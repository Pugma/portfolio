import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const posts = defineCollection({
  loader: glob({ base: "./src/contents", pattern: "*.md" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    updatedDate: z.date().optional(),
  }),
});

export const collections = {
  posts,
};
