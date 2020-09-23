import WeatherStore from "./index.svelte";

export default {
  title: "Demos/Weather Data Store",
  component: WeatherStore,
  argTypes: {
    name: { control: "string" },
  },
};

const Template = ({ ...args }) => ({
  Component: WeatherStore,
  props: args,
  on: {},
});

export const Main = Template.bind({});
Main.args = {};
