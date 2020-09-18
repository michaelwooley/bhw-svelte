import CityCurrentWeather from "./index.svelte";

import StationObservationsLatest from "@app/test/data/station-observations-latest.json";

export default {
  title: "City/CityCurrentWeather",
  component: CityCurrentWeather,
  argTypes: {
    data: { control: "object" },
  },
};

const Template = ({ ...args }) => ({
  Component: CityCurrentWeather,
  props: args,
  on: {},
});

export const Main = Template.bind({});
Main.args = {
  data: StationObservationsLatest,
};
