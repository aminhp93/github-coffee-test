import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { i18n, useTranslation } from "@/utils/translation/i18n";

const ButtonChangeLanguage = () => {
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

export default ButtonChangeLanguage;
