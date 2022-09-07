import Select from "../components/Select";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Inputs/Select",
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
  <Select
    {...args}
    options={[
      { id: "1", name: "Medium" },
      { id: "2", name: "Low" },
      { id: "3", name: "High" },
      { id: "4", name: "Normal" },
    ]}
    name="priority"
    label="name"
    id="id"
  />
);

export const Overview = Template.bind({});

Overview.decorators = [
  () => {
    return (
      <div
        style={{
          display: "flex",
          width: "400px",
          height: "300px",
        }}
      >
        <Select
          onSelectChange={() => null}
          options={[
            { id: "1", name: "Medium" },
            { id: "2", name: "Low" },
            { id: "3", name: "High" },
            { id: "4", name: "Normal" },
          ]}
          name="priority"
          label="name"
          id="id"
        />
      </div>
    );
  },
];
