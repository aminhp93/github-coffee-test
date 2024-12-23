// ColorPicker.stories.tsx
import Box from "@mui/material/Box";
import { StoryFn } from "@storybook/react";

import { ColorPicker, PropsColorPicker } from "@/components/color-picker";
import { log } from "@/utils/logger";

const Template: StoryFn<PropsColorPicker> = (args) => <ColorPicker {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "textFiled",
  value: "#ff0000",
  size: "small",
  paddingHorizon: "10px",
  showCopyButton: true,
  label: "Color Picker",
  onChange: (color: string) => log(color),
};

const ColorPickerTemplate = (props: PropsColorPicker) => {
  // Component logic here

  return <Box sx={{ width: "300px" }}>{ColorPicker(props)}</Box>;
};
export default ColorPickerTemplate;
