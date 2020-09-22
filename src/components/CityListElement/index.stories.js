import CityListElement from "./index.svelte";
import STATIONS_LIST from "@app/test/data/city-list.json";

export default {
  title: "Modals/City/CityListElement",
  component: CityListElement,
  argTypes: {},
};

const Template = ({ ...args }) => ({
  Component: CityListElement,
  props: args,
  on: {},
});

export const Main = Template.bind({});
Main.args = {
  stations: STATIONS_LIST,
};
