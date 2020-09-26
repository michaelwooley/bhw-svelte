import CityBlockDropdown from "./view.svelte";

export default {
  title: "City/CityBlockDropdown",
  component: CityBlockDropdown,
  argTypes: {
    isFirst: { control: "boolean" },
    isLast: { control: "boolean" },
    handleRefresh: { action: "refresh" },
    handleMoveUp: { action: "move-up" },
    handleMoveDown: { action: "move-down" },
    handleRemove: { action: "remove" },
  },
};

const Template = ({
  handleRefresh,
  handleMoveUp,
  handleMoveDown,
  handleRemove,
  ...args
}) => ({
  Component: CityBlockDropdown,
  props: args,
  on: {
    refresh: handleRefresh,
    "move-up": handleMoveUp,
    "move-down": handleMoveDown,
    remove: handleRemove,
  },
});

export const Main = Template.bind({});
Main.args = {
  isFirst: false,
  isLast: false,
};
