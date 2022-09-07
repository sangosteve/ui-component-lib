import Notification from "../components/Notification";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FiX, FiAlertCircle } from "react-icons/fi";
export default {
  title: "Notification/Notification",
  component: Notification,
  allowClose: true,
} as ComponentMeta<typeof Notification>;

const Template: ComponentStory<typeof Notification> = (args) => (
  <Notification
    {...args}
    icon={<FiAlertCircle />}
    title="Default"
    color="teal"
    allowClose
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua
  </Notification>
);

export const Overview = Template.bind({});
