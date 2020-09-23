import CitySearch from "./index.svelte";
import { STATIONS } from "@app/common/data";

export default {
  title: "Modals/City/CityAdd",
  component: CitySearch,
  argTypes: {
    onAdd: { action: "on-add" },
  },
};

const Template = ({ onAdd, ...args }) => ({
  Component: CitySearch,
  props: args,
  on: {
    add: onAdd,
  },
});

export const Main = Template.bind({});
Main.args = {
  stations: STATIONS,
};
