import { FAKE_DATA } from "@/data-test";
import { getDefaultOption } from "@/components/plot/constants";
import { getOptionsFromData } from "@/components/plot/utils";
import { Plot } from "@/components/plot/Plot";
import Box from "@mui/material/Box";
import { HeaderLayoutProvider } from "@/components/header-layout/HeaderLayout";

const DEFAULT_OPTION = {
  ...getDefaultOption(),
  ...getOptionsFromData([FAKE_DATA[0], FAKE_DATA[1]]),
};

const DefaultChartWithTableTemplate = () => {
  return (
    <HeaderLayoutProvider>
      <Box sx={{ width: "100%", height: "calc(100vh - 40px)" }}>
        <Plot options={DEFAULT_OPTION} showToolbar />
      </Box>
    </HeaderLayoutProvider>
  );
};

export default DefaultChartWithTableTemplate;
