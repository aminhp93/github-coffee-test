import Box from "@mui/material/Box";

import { useTranslation } from "@/utils/translation";
import ButtonChangeLanguage from "./components/ButtonChangeLanguage";
import * as xxx from "@/utils/translation";

const AppTemplate = () => {
  const { t } = useTranslation();
  return (
    <Box sx={{ width: "300px" }}>
      <ButtonChangeLanguage />
      {t("about")}
      {Object.keys(xxx).map((key) => (
        <Box key={key}>{key}</Box>
      ))}
    </Box>
  );
};

export default AppTemplate;
