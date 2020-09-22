import CityList from "./index.svelte";
import STATIONS_LIST from "@app/test/data/city-list.json";

export default {
  title: "Modals/City/CityList",
  component: CityList,
  argTypes: {},
};

const Template = ({ ...args }) => ({
  Component: CityList,
  props: args,
  on: {},
});

export const Main = Template.bind({});
Main.args = {
  stations: STATIONS_LIST,
};
