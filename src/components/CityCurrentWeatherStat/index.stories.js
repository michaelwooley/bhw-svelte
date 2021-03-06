import CityCurrentWeatherStat from "./index.svelte";

export default {
  title: "City/CityCurrentWeatherStat",
  component: CityCurrentWeatherStat,
  argTypes: {
    icon: { control: "string" },
    name: { control: "string" },
    value: { control: "number" },
    description: { control: "string" },
    unit: { control: "string" },
    unitAbbrev: { control: "string" },
  },
};

const Template = ({ date, ...args }) => ({
  Component: CityCurrentWeatherStat,
  props: args,
  on: {},
  bind: {
    date,
  },
});

export const Main = Template.bind({});
Main.args = {
  icon: "fas fa-cloud",
  name: "Temperature",
  value: "98.6",
  description: "Temperature in farheneit.",
  unit: "Meters",
  unitAbbrev: "m",
};
