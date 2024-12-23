import { getDefaultOption } from "@/components/plot/constants";
import { getOptionsFromData } from "@/components/plot/utils";
import { Plot } from "@/components/plot/Plot";
import Box from "@mui/material/Box";
import { FAKE_DATA } from "@/data-test";

const LoadMoreDataChartTemplate = () => {
  const DEFAULT_OPTION = {
    ...getDefaultOption(),
    ...getOptionsFromData([
      {
        ...FAKE_DATA[0],
        // get only last 5 data in FAKE_DATA[0].data
        data: FAKE_DATA[0].data.slice(-5),
      },
    ]),
  };

  return (
    <Box sx={{ width: "100%", height: "calc(100vh - 40px)" }}>
      <Plot options={DEFAULT_OPTION} showTable showToolbar />
    </Box>
  );
};

export default LoadMoreDataChartTemplate;
