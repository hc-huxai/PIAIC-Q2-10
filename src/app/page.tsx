import { createClient } from "contentful";

async function getData() {
  const client = createClient({
    space: process.env.SPACE_ID!,
    accessToken: process.env.CONTENT_DELIVERY_ID!,
  });

  const res = await client.getEntries({ content_type: "blog" });

  return res.items;
}

export default async function Home() {
  console.log("getting data...");
  let result = await getData();
  console.log(result);

  return <></>;
}
