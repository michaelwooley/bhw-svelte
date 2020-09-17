import CityBlock from "./index.svelte";

export default {
  title: "City/CityBlock",
  component: CityBlock,
  argTypes: {
    toggleCity: { action: "onClick" },
  },
};

const Template = ({ toggleCity, ...args }) => ({
  Component: CityBlock,
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
