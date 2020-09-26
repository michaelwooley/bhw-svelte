import CityBlockPlaceholder from "./index.svelte";

export default {
  title: "City/CityBlockPlaceholder",
  component: CityBlockPlaceholder,
  argTypes: {
    hasCities: { control: "boolean" },
    onClick: { action: "on:click" },
  },
};

const Template = ({ onClick, ...args }) => ({
  Component: CityBlockPlaceholder,
  props: args,
  on: {
    click: onClick,
  },
});

export const Main = Template.bind({});
Main.args = {
  hasCities: false,
};
