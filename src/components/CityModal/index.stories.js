import CityModal from "./index.svelte";

export default {
  title: "Modals/City/CityModal",
  component: CityModal,
  argTypes: {
    onClose: { action: "onClose" },
  },
};

const Template = ({ onClose, ...args }) => ({
  Component: CityModal,
  props: args,
  on: {
    close: onClose,
  },
});

export const Main = Template.bind({});
Main.args = {
  isOpen: true,
};
