const sveltePreprocess = require("svelte-preprocess");

const moduleResolver = [
  "module-resolver",
  {
    alias: {
      "^@app/(.+)": "./src/\\1",
    },
  },
];

module.exports = {
  moduleResolver,
  preprocess: sveltePreprocess({
    defaults: {
      script: "typescript",
    },
    babel: {
      plugins: [moduleResolver],
    },
  }),
};
