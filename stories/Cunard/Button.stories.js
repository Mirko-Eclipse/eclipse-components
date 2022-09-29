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
CTA.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/XX778VaSZ3F1pAVlCPxzM4/testing-link-to-storybook?node-id=0%3A1',
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  mode: "secondary",
  label: "Cunard Button Secondary",
};

