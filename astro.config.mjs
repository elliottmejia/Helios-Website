import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import partytown from "@astrojs/partytown";
import { remarkReadingTime } from "./remark-reading-time.mjs";

import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  integrations: [
    tailwind(),
    mdx(),
    sitemap(),
    react(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  output: "server",
  adapter: vercel(),
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});