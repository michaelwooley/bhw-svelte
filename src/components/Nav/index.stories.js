import Nav from "./index.svelte";

export default {
  title: "Nav",
  component: Nav,
  argTypes: {
    label: { control: "text" },
    primary: { control: "boolean" },
    backgroundColor: { control: "color" },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
    onClick: { action: "onClick" },
  },
};

const Template = ({ onClick, ...args }) => ({
  Component: Nav,
  props: args,
  on: {
    click: onClick,
  },
});

export const Main = Template.bind({});
Main.args = {
  label: "Button",
};
