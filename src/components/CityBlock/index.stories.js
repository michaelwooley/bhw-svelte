import CityBlock from "./index.svelte";

export default {
  title: "City/CityBlock",
  component: CityBlock,
  argTypes: {
    name: { control: "string" },
  },
};

const Template = ({ ...args }) => ({
  Component: CityBlock,
  props: args,
  on: {},
});

export const Main = Template.bind({});
Main.args = {
  name: "City",
  id: "city",
};
