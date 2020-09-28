import MarginsExample from "./margins.svelte";

export default {
  title: "Charts/Settings/Margins",
  component: MarginsExample,
  argTypes: {
    width: {
      control: {
        type: "range",
        min: 10,
        max: 1000,
        step: 1,
      },
    },
    height: {
      control: { type: "range", min: 10, max: 1000, step: 1 },
    },
    marginBottom: { control: { type: "range", min: 0, max: 100, step: 1 } },
    marginTop: { control: { type: "range", min: 0, max: 100, step: 1 } },
    marginLeft: { control: { type: "range", min: 0, max: 100, step: 1 } },
    marginRight: { control: { type: "range", min: 0, max: 100, step: 1 } },
  },
};

const Template = ({
  handleRefresh,
  handleMoveUp,
  handleMoveDown,
  handleRemove,
  ...args
}) => ({
  Component: MarginsExample,
  props: args,
  on: {},
});

export const Main = Template.bind({});
Main.args = {
  width: 450,
  height: 350,
  marginBottom: 10,
  marginTop: 0,
  marginLeft: 10,
  marginRight: 0,
};
