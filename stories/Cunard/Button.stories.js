import { createButton } from "./Button";

export default {
  title: "Cunard/Button",
};

const Template = (args) => createButton(args);

export const CTA = Template.bind({});
CTA.args = {
  mode: "primary",
  label: "Cunard CTA",
};

export const Secondary = Template.bind({});
Secondary.args = {
  mode: "secondary",
  label: "Cunard Button Secondary",
};
