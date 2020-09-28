import LineChart from "./lineChart.svelte";

export default {
  title: "Charts/Line chart",
  component: LineChart,
  argTypes: {
    width: { control: { type: "range", min: 10, max: 1000, step: 1 } },
    height: { control: { type: "range", min: 10, max: 1000, step: 1 } },
  },
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
