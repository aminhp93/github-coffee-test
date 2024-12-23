import Box from "@mui/material/Box";

import { FAKE_DATA } from "@/data-test";
import { getDefaultOption } from "@/components/plot/constants";
import { getOptionsFromData } from "@/components/plot/utils";
import { Plot } from "@/components/plot/Plot";

const DEFAULT_OPTION = {
  ...getDefaultOption(),
  ...getOptionsFromData([FAKE_DATA[0], FAKE_DATA[1], FAKE_DATA[2]]),
};

const MutipleSeriesNumberType = () => {
  return (
    <Box sx={{ width: "100%", height: "calc(100vh - 40px)" }}>
      <Plot options={DEFAULT_OPTION} />
    </Box>
  );
};

export default MutipleSeriesNumberType;
