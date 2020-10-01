import LineChart from "./lineChart.svelte";

export default {
  title: "Charts/Line chart",
  component: LineChart,
  argTypes: {},
};

const Template = ({
  handleRefresh,
  handleMoveUp,
  handleMoveDown,
  handleRemove,
  ...args
}) => ({
  Component: LineChart,
  props: args,
  on: {},
});

export const Main = Template.bind({});
Main.args = {};
