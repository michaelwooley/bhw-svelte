const path = require("path");
const { preprocess, moduleResolver } = require("../svelte.config.js");

// Export a function. Accept the base config as the only param.
module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../libs/**/*.stories.mdx",
    "../libs/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-actions",
  ],
  webpackFinal: async (config) => {
    config.module.rules = config.module.rules
      .filter((r) => !!!".svelte".match(r.test))
      .concat([
        {
          test: /\.(svelte|html)$/,
          loader: require.resolve("svelte-loader"),
          options: { preprocess },
        },
      ]);

    config.module.rules = config.module.rules.map((r) => {
      if (!r.use) return r;
      r.use = r.use.map((u) => {
        if (u.loader !== "babel-loader") return u;
        u.options.plugins = (u.options.plugins || []).concat([moduleResolver]);
        return u;
      });
      return r;
    });

    return config;
  },
};
