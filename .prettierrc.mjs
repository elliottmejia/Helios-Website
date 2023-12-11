// .prettierrc.js
/**
 * @type {import('prettier').Config}
 */
export default {
    "tabWidth": 2,
    "plugins": ["prettier-plugin-astro"],
    "useTabs": false,
    "overrides": [{
        "files": "*.astro",
        "options": {
            "parser": "astro"
        }
    }]
}
