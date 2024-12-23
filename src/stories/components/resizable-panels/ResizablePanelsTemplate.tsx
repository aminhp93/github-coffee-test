import Box from "@mui/material/Box";

import { ResizablePanels, DEFAULT_SIZES } from "@/components/resizable-panels";
import { useTranslation } from "@/utils/translation";

const AppTemplate = () => {
  const { t } = useTranslation();
  return (
    <Box sx={{ width: "100%", height: "calc(100vh - 40px)" }}>
      <ResizablePanels
        direction="vertical"
        defaultSizes={DEFAULT_SIZES}
        panels={[
          <div key={1}>{t("Panel1")}</div>,
          <div key={2}>{t("Panel2")}</div>,
        ]}
      />
    </Box>
  );
};

export default AppTemplate;
