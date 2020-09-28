import TimeSeries from "./index.svelte";

import StationObservations from "@app/test/data/station-observations.json";

export default {
  title: "Charts/TimeSeries",
  component: TimeSeries,
};

const Template = ({ ...args }) => ({
  Component: TimeSeries,
  props: args,
  on: {},
});

export const Main = Template.bind({});
Main.args = {
  data: StationObservations,
};
