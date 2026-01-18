import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

const posts = await getCollection("posts").then((posts) =>
  posts.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(), // newest first
  ),
);

export const GET = () => {
  return rss({
    title: "Posts - ぷぐま",
    description: "Latest posts from my blog",
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      title: post.data.title,
      link: `/posts/${post.id}`,
      pubDate: post.data.date,
      description: post.body?.slice(0, 200) ?? "",
    })),
  });
};
