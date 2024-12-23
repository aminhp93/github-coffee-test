import { StoryObj } from "@storybook/react";
import LoggerTemplate from "./LoggerTemplate";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Utils",
  component: LoggerTemplate,
};

type Story = StoryObj<typeof LoggerTemplate>;

export const Logger: Story = {
  args: {},
  name: "logger",
};
