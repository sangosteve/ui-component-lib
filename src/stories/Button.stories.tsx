import React from "react";
import Button from "../components/Button";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FiPlusCircle } from "react-icons/fi";

export default {
  title: "Buttons/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);

export const Overview = Template.bind({});

Overview.args = {
  color: "primary",
};

export const Sizes = Template.bind({});

Sizes.decorators = [
  () => {
    return (
      <div
        style={{
          display: "flex",
          width: "400px",
          height: "200px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Button color="primary" size="lg">
          Large
        </Button>
        <Button color="primary" size="md">
          Medium
        </Button>
        <Button color="primary" size="sm">
          Small
        </Button>
        <Button color="primary" size="xs">
          ExSmall
        </Button>
      </div>
    );
  },
];

//Icons

export const Icons = Template.bind({});

Icons.decorators = [
  () => {
    return (
      <div
        style={{
          display: "flex",
          maxWidth: "260px",
          justifyContent: "space-between",
        }}
      >
        <Button color="primary" size="md" rightIcon={<FiPlusCircle />}>
          Right Icon
        </Button>
        <Button color="primary" size="md" leftIcon={<FiPlusCircle />}>
          Left Icon
        </Button>
      </div>
    );
  },
];

export const Variants = Template.bind({});

Variants.decorators = [
  () => {
    return (
      <div
        style={{
          display: "flex",
          maxWidth: "260px",
          justifyContent: "space-between",
        }}
      >
        <Button variant="fill">Fill</Button>
        <Button color="danger" variant="outline">
          Outline
        </Button>
        <Button color="danger" variant="ghost">
          Ghost
        </Button>
      </div>
    );
  },
];
