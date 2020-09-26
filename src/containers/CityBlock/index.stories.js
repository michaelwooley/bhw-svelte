import CityBlock from "./index.svelte";

export default {
  title: "City/City Block (container)",
  component: CityBlock,
};

const Template = ({ ...args }) => ({
  Component: CityBlock,
  props: args,
});

export const Main = Template.bind({});
Main.args = {};
