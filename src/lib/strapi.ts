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
  // const url = new URL(`http://127.0.0.1:1337/api/${endpoint}`);

  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }
  const res = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${import.meta.env.PUBLIC_apiKEY}`,
      // Authorization:
      //   "Bearer 79add1fd324e3a84fea06d633f5ce9259106aa9beb703eb8d117b1c1f7e7755ea69ee13cfcaeba48c2dffdb94244567ab5f2d93536f953d6db265aa44d7971d6fa363309009f24a644f62579007450f3c3d0b5153755b65cd15e729389da2b9088f1e92dd8df3efa3ad9c9516da2fca21ab0c85b00bcbc2eaf9f24aec3158fa0",
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
