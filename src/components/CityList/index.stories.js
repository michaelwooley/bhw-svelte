import CityList from "./index.svelte";
import STATIONS_LIST from "@app/test/data/city-list.json";

export default {
  title: "Modals/City/CityList",
  component: CityList,
  argTypes: {
    onMoveUp: { action: "onMoveUp" },
    onMoveDown: { action: "onMoveDown" },
    onRefresh: { action: "onRefresh" },
    onRemove: { action: "onRemove" },
  },
};

const Template = ({ onMoveDown, onMoveUp, onRefresh, onRemove, ...args }) => ({
  Component: CityList,
  props: args,
  on: {
    "move-down": onMoveDown,
    "move-up": onMoveUp,
    refresh: onRefresh,
    remove: onRemove,
  },
});

export const Main = Template.bind({});
Main.args = {
  stations: STATIONS_LIST,
};
