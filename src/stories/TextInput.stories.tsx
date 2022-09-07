import TextInput from "../components/TextInput";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Inputs/TextField",
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
);

export const Overview = Template.bind({});

Overview.args = {
  type: "text",
  name: "test",
  placeholder: "Enter text",
};

export const Label = Template.bind({});
Label.args = {
  type: "email",
  name: "Email",
  label: "Email",
  placeholder: "Enter email",
};

export const Required = Template.bind({});
Required.args = {
  type: "email",
  name: "Email",
  label: "Email",
  placeholder: "Enter email",
  required: true,
};

export const Caption = Template.bind({});
Caption.args = {
  type: "email",
  name: "Email",
  caption: "your email remains private",
  placeholder: "Enter email",
};
