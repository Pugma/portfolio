import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const posts = defineCollection({
  loader: glob({ base: "./src/pages/posts/contents", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    updatedDate: z.date().optional(),
  }),
});

const works = defineCollection({
  loader: glob({ base: "./src/pages/works/contents", pattern: "**/*.md" }),
  schema: z.strictObject({}),
});

export const collections = {
  posts,
  works,
};
