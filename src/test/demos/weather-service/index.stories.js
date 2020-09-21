import WeatherService from "./index.svelte";

export default {
  title: "Demos/Weather Service",
  component: WeatherService,
  argTypes: {
    name: { control: "string" },
  },
};

const Template = ({ ...args }) => ({
  Component: WeatherService,
  props: args,
  on: {},
});

export const Main = Template.bind({});
Main.args = {};
