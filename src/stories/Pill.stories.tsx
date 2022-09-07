import { ComponentStory, ComponentMeta } from "@storybook/react";
import Pill from "../components/Pill";

export default {
  title: "Pill/Pill",
  component: Pill,
  allowClose: true,
} as ComponentMeta<typeof Pill>;

const Template: ComponentStory<typeof Pill> = (args) => (
  <Pill {...args} variant="outline" color="red" size="xs">
    OVERDUE
  </Pill>
);

export const Overview = Template.bind({});
