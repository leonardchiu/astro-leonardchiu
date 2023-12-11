import { Client } from "@notionhq/client";
import {
  BlockObjectRequest,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

export const notionClient = new Client({
  auth: import.meta.env.PUBLIC_apiKEY,
});

export const getPages = () => {
  return notionClient.databases.query({
    filter: {
      property: "Status",
      status: {
        equals: "Posted",
      },
    },
    database_id: import.meta.env.PUBLIC_DATABASE_ID,
  });
};

export const getPageContent = (pageId: string) => {
  return notionClient.blocks.children
    .list({ block_id: pageId })
    .then((res) => res.results as BlockObjectRequest[]);
};

export const getPageBySlug = (slug: string) => {
  return notionClient.databases
    .query({
      database_id: import.meta.env.PUBLIC_DATABASE_ID,
      filter: {
        property: "Slug",
        rich_text: {
          equals: slug,
        },
      },
    })
    .then((res) => res.results[0] as PageObjectResponse | undefined);
};
