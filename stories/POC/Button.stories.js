import { createButton } from "./Button";

export default {
  title: "PO/Button",
};

const Template = (args) => createButton(args);

export const CTA = Template.bind({});
CTA.args = {
  mode: "primary",
  label: "POC CTA",
};

export const Secondary = Template.bind({});
Secondary.args = {
  mode: "secondary",
  label: "POC Button Secondary",
};
