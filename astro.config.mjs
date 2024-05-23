import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import partytown from "@astrojs/partytown";
import tina from "astro-tina";
import { collections } from "./src/content/config.mjs";

import { remarkReadingTime } from "./remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  prefetch: {
    default: "viewport",
    prefetchAll: true,
  },
  integrations: [
    tailwind(),
    mdx(),
    sitemap(),
    react({
      include: ["**.tsx"],
    }),
    tina(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  output: "hybrid",
  adapter: vercel(),
  content: {
    collections,
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});
