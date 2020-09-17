import Nav from "./index.svelte";

export default {
  title: "Nav",
  component: Nav,
  argTypes: {
    toggleCity: { action: "onClick" },
  },
};

const Template = ({ toggleCity, ...args }) => ({
  Component: Nav,
  props: args,
  on: {
    click: toggleCity,
    "toggle-city": toggleCity,
  },
});

export const Main = Template.bind({});
Main.args = {
  label: "Button",
};
