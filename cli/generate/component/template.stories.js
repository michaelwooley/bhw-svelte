// Stories for ComponentName
import ComponentName from "./index.svelte";

export default {
  title: "ComponentName",
  component: ComponentName,
  argTypes: {
    // TODO Add arguments for component (https://storybook.js.org/docs/svelte/essentials/controls#annotation)
    // label: { control: "text" },
    // primary: { control: "boolean" },
    // backgroundColor: { control: "color" },
    // size: {
    //   control: { type: "select", options: ["small", "medium", "large"] },
    // },
    // onClick: { action: "onClick" },
  },
};

const Template = ({ onClick, ...args }) => ({
  Component: ComponentName,
  props: args,
  on: {
    click: onClick,
  },
});

export const Main = Template.bind({});
Main.args = {
  // TODO Add applicable args here
};
