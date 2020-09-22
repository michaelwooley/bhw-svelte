import Footer from "./index.svelte";

export default {
  title: "Common/Footer",
  component: Footer,
  argTypes: {},
};

const Template = ({ ...args }) => ({
  Component: Footer,
  props: args,
  on: {},
});

export const Main = Template.bind({});
Main.args = {};
