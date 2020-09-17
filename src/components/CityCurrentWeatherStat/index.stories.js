import CityCurrentWeatherStat from "./index.svelte";

export default {
  title: "City/CityCurrentWeatherStat",
  component: CityCurrentWeatherStat,
  argTypes: {
    icon: { control: "string" },
    name: { control: "string" },
    value: { control: "number" },
    description: { control: "string" },
  },
};

const Template = ({ ...args }) => ({
  Component: CityCurrentWeatherStat,
  props: args,
  on: {},
});

export const Main = Template.bind({});
Main.args = {
  icon: "fas fa-cloud",
  name: "Temperature",
  value: "98.6",
  description: "Temperature in farheneit.",
};
