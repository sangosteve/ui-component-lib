import NativeSelect from "../components/NativeSelect";
import { ComponentStory, ComponentMeta } from "@storybook/react";
export default {
  title: "Inputs/NativeSelect",
  component: NativeSelect,
} as ComponentMeta<typeof NativeSelect>;

const Template: ComponentStory<typeof NativeSelect> = (args) => (
  <NativeSelect>
    <option>Low</option>
    <option>Medium</option>
    <option>High</option>
  </NativeSelect>
);

export const Overview = Template.bind({});
