import CityListElement from "./index.svelte";
import STATIONS_LIST from "@app/test/data/city-list.json";

export default {
  title: "Modals/City/CityListElement",
  component: CityListElement,
  argTypes: {
    onMoveUp: { action: "onMoveUp" },
    onMoveDown: { action: "onMoveDown" },
    onRefresh: { action: "onRefresh" },
    onRemove: { action: "onRemove" },
  },
};

const Template = ({ onMoveDown, onMoveUp, onRefresh, onRemove, ...args }) => ({
  Component: CityListElement,
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
  station: STATIONS_LIST[0],
  idx: 0,
};
