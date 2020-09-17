import CityCurrentWeather from "./index.svelte";

export default {
  title: "City/CityCurrentWeather",
  component: CityCurrentWeather,
  argTypes: {
    date: { control: "date" },
    // isRight: { control: "boolean" },
    // disabled: { control: "boolean" },
    // handleRefresh: { action: "refresh" },
    // handleMoveUp: { action: "move-up" },
    // handleMoveDown: { action: "move-down" },
    // handleRemove: { action: "remove" },
  },
};

const Template = ({ ...args }) => ({
  Component: CityCurrentWeather,
  props: args,
  on: {},
});

export const Main = Template.bind({});
Main.args = {
  date: new Date(),
};
