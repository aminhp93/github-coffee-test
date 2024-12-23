import React from "react";
import { Preview } from "@storybook/react";
import { DialogContainer } from "../src/components/dialog-container/DialogContainer";
import { SettingsConsumer, SettingsProvider } from "../src/theme";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { i18n, useTranslation } from "../src/utils/translation/i18n";

const preview: Preview = {
  decorators: [
    (Story) => (
      <SettingsProvider>
        <SettingsConsumer>
          <ButtonChangeLanguage />
          <Story />
          {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
          <DialogContainer />
        </SettingsConsumer>
      </SettingsProvider>
    ),
  ],
};

export default preview;

export const ButtonChangeLanguage = () => {
  const { t } = useTranslation();
  const [language, setLanguage] = React.useState(i18n.language);
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">{t("Language")}</FormLabel>
      <RadioGroup
        row
        onChange={(e) => {
          setLanguage(e.target.value);
          i18n.changeLanguage(e.target.value);
        }}
        aria-labelledby="demo-radio-buttons-group-label"
        value={language}
        name="radio-buttons-group"
      >
        <FormControlLabel value="en" control={<Radio />} label="en" />
        <FormControlLabel value="no" control={<Radio />} label="no" />
        <FormControlLabel value="sv" control={<Radio />} label="sv" />
      </RadioGroup>
    </FormControl>
  );
};
