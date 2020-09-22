import BaseModal from "./index.svelte";

export default {
  title: "Common/BaseModal",
  component: BaseModal,
  argTypes: {
    onClose: { action: "onClose" },
  },
};

const Template = ({ onClose, ...args }) => ({
  Component: BaseModal,
  props: args,
  on: {
    close: onClose,
  },
});

export const Main = Template.bind({});
Main.args = {
  isOpen: true,
};
