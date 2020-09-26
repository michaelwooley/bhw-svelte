import CityModal from "./index.svelte";

export default {
  title: "Modals/City/CityModal",
  component: CityModal,
  argTypes: {},
};

const Template = ({ ...args }) => ({
  Component: CityModal,
  props: args,
  on: {},
});

export const Main = Template.bind({});
Main.args = {};
