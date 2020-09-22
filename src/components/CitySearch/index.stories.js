import CitySearch from "./index.svelte";
import { STATIONS } from "@app/common/data";

export default {
  title: "Modals/City/CitySearch",
  component: CitySearch,
  argTypes: {},
};

const Template = ({ ...args }) => ({
  Component: CitySearch,
  props: args,
  on: {},
});

export const Main = Template.bind({});
Main.args = {
  stations: STATIONS,
};
