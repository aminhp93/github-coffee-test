import { StoryObj } from "@storybook/react";
import ProcessViewTemplate from "./ProcessViewTemplate";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Utils",
  component: ProcessViewTemplate,
};

type Story = StoryObj<typeof ProcessViewTemplate>;

export const ProcessView: Story = {
  args: {},
  name: "process-view",
};
