import Button from "@mui/material/Button";
import { useSettings } from "@/theme";
import { useTranslation } from "@/utils/translation";

const ThemeToggleButton = () => {
  const { t } = useTranslation();
  const { settings, saveSettings } = useSettings();
  return (
    <Button
      variant="contained"
      onClick={() => {
        saveSettings({
          ...settings,
          mode: settings.mode === "light" ? "dark" : "light",
        });
      }}
    >
      {t("Mode")} {settings.mode}
    </Button>
  );
};

export default ThemeToggleButton;
