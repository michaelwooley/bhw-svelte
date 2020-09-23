import CityModal from "./view.svelte";

export default {
  title: "Modals/City/CityModal_(container)",
  component: CityModal,
};

const Template = ({ ...args }) => ({
  Component: CityModal,
  props: args,
});

export const Main = Template.bind({});
Main.args = {};
