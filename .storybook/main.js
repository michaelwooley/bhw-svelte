const path = require("path");
const { preprocess } = require("../svelte.config.js");

// Export a function. Accept the base config as the only param.
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
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

    return config;
  },
};
