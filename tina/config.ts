import { defineConfig, type Field } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";
  

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "tina_assets",
      publicFolder: "public",
    },
  },
  search: {
    tina: {
      indexerToken: process.env.TINA_SEARCH,
      stopwordLanguages: ["eng"],
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100,
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/content/blog",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "snippet",
            label: "Snippet",
            required: true,
            ui: {
              validate: (value) => {
                if (value?.length > 200)
                  return "Snippet must be less than 200 characters";
              },
            },
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            required: true,
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft",
            required: true,
          },
          {
            name: "publishDate",
            label: "Date Posted",
            type: "string",
            ui: {
              component: "date",
            },
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            name: "image",
            label: "Hero Image",
            type: "object",
            required: true,
            fields: [
              {
                name: "src",
                label: "Image Source",
                type: "image",
                required: true,
              },
              {
                name: "alt",
                label: "Image Alt",
                type: "string",
              },
            ],
          },
          {
            name: "tags",
            label: "Tags",
            type: "string",
            list: true,
            required: false,
          },
        ],
      },
      {
        name: "about",
        label: "About",
        path: "src/content/about",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "snippet",
            label: "Snippet",
          },
          {
            type: "string",
            name: "menu_label",
            label: "Menu Label",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            required: true,
            isBody: true,
          },
        ],
      },
      {
        name: "team",
        label: "Team",
        path: "src/content/team",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Name",
            required: true,
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft",
            required: true,
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            name: "avatar",
            label: "Avatar",
            type: "object",
            required: true,
            fields: [
              {
                name: "src",
                label: "Image Source",
                type: "image",
                required: true,
              },
              {
                name: "alt",
                label: "Image Alt",
                type: "string",
              },
            ],
          },
          {
            name: "publishDate",
            label: "Date Posted",
            type: "string",
            ui: {
              component: "date",
            },
            required: true,
          },
        ],
      },
    ],
  },
});
