const path = require("path");
const { preprocess } = require("../svelte.config.js");

const alias = {
  "@app/components": path.resolve(__dirname, "src/components/"),
  "@app/containers": path.resolve(__dirname, "src/containers/"),
  "@app/services": path.resolve(__dirname, "src/services/"),
  "@app/test": path.resolve(__dirname, "src/test/"),
  "@app/stores": path.resolve(__dirname, "src/stores/"),
};

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
    config.resolve.alias = { ...config.resolve.alias, ...alias };

    return config;
  },
};
