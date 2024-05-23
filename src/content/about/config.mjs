import { defineCollection, reference } from "astro:content";

export const collections = {
  about: defineCollection({
    schema: ({ z }) =>
      z.object({
        title: z.string(),
        snippet: z.string(),
        menu_label: z.string(),
      }),
  }),
};
