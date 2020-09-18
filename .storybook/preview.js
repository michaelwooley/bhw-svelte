import "../public/global.css";

import "@storybook/addon-console";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: "app",
    values: [
      {
        name: "app",
        value: "#F5F5F5",
      },
    ],
  },
};
