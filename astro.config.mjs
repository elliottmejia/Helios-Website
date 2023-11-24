import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";
import vercelEdge from "@astrojs/vercel/edge";

// https://astro.build/config
export default defineConfig({
  site: "https://myhonestpower.com",
  experimental: {
    viewTransitions: true,
  },
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    mdx(),
    sitemap(),
    react(),
  ],
  output: "server",
  adapter: verceledge(),
});