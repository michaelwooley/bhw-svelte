const sveltePreprocess = require("svelte-preprocess");

module.exports = {
  preprocess: sveltePreprocess({
    defaults: {
      script: "typescript",
    },
    babel: {
      plugins: [
        [
          "module-resolver",
          {
            alias: {
              "^@app/(.+)": "./src/\\1",
            },
          },
        ],
      ],
    },
  }),
};
