interface Props {
  endpoint: string;
  query?: Record<string, string>;
  wrappedByKey?: string;
  wrappedByList?: boolean;
}

/**
 * Fetches data from the Strapi API
 * @param endpoint - The endpoint to fetch from
 * @param query - The query parameters to add to the url
 * @param wrappedByKey - The key to unwrap the response from
 * @param wrappedByList - If the response is a list, unwrap it
 * @returns
 */

export default async function fetchApi<T>({
  endpoint,
  query,
  wrappedByKey,
  wrappedByList,
}: Props): Promise<T> {
  if (endpoint.startsWith("/")) {
    endpoint = endpoint.slice(1);
  }
  // const url = import.meta.env.PUBLIC_STRAPI_URL + "/api/" + endpoint;
  const url = new URL(`${import.meta.env.PUBLIC_STRAPI_URL}/api/${endpoint}`);
  // const url = new URL(`http://strapi.leonardchiu.com:1337/api/${endpoint}`);

  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }
  const res = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${import.meta.env.PUBLIC_apiKEY}`,
      // Authorization:
      //   "Bearer a14ce8824cfd6c2e52bfaf8e38501bf20d865f190df240e17eca264bd228e1a2e85b1cbe2e8add492652ec7e19afc70d233c6b5966cee10663b382087fdca4e597d7d07842845cc1a0b483faa356337fd8b6425ca557087ca6471fbb0b48ec19174e92c7b86e84df5b87520e3d34e3ec8f57c55cdaba0663dc2939ca90a5fd1e",
    },
  });
  let data = await res.json();

  if (wrappedByKey) {
    data = data[wrappedByKey];
  }

  if (wrappedByList) {
    data = data[0];
  }

  return data as T;
}
