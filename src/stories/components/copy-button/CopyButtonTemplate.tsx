// CopyButton.stories.tsx
import { StoryFn } from "@storybook/react";

import { CopyButton, PropsCopyButton } from "@/components/copy-button";
import Box from "@mui/material/Box";

const Template: StoryFn<PropsCopyButton> = (args) => <CopyButton {...args} />;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Primary: any = Template.bind({});
Primary.args = {
  copyContent: "Sample text to copy",
  edge: "start",
};

const ColorPickerTemplate = (props: PropsCopyButton) => {
  // Component logic here

  return (
    <Box sx={{ width: "300px" }}>
      {`Sample text to copy`}
      {CopyButton(props)}
    </Box>
  );
};
export default ColorPickerTemplate;
