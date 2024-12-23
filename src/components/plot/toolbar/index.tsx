// Import libaries
import React from "react";
import {
  AspectRatio,
  MoreVert,
  Refresh,
  Timeline,
  TableChart,
} from "@mui/icons-material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Tooltip from "@mui/material/Tooltip";
import HighchartsReact from "highcharts-react-official";
import { DateRange } from "@mui/x-date-pickers-pro";

// Import local files
import { DateTimePicker } from "@/components/date-time-picker";
import { PlotType, ToolbarProps } from "@/components/plot/types";
import ExportButton, { ExportType } from "./ExportButton";
import { PlotDataType } from "../types";
import { styled } from "@/theme";
import { Dayjs } from "@/utils/formatter/dayjs";
import { log } from "@/utils/logger";
import { useTranslation } from "@/utils/translation";

type Props = {
  chartRef: React.RefObject<HighchartsReact.RefObject>;
  dataType: PlotType;
  onChangePlotType: (type: PlotType) => void;
} & ToolbarProps;

const Toolbar = ({
  chartRef,
  hideTimeRange,
  components,
  componentsProps,
  dataType,
  onChangePlotType,
}: Props) => {
  const { t } = useTranslation();

  const handleFullScreen = () => {
    chartRef.current?.chart?.fullscreen?.toggle();
  };

  const handelExport = (type: ExportType) => {
    if (type === "csv") {
      chartRef.current?.chart.downloadCSV();
    }
    if (type === "png") {
      chartRef.current?.chart.exportChart({}, {});
    }
  };

  const extendedComponent = Object.keys(components || {}).map((key) => {
    const component = components?.[key] as React.JSX.Element;
    if (componentsProps?.[key]) {
      return React.cloneElement(component, { ...componentsProps?.[key], key });
    } else {
      return React.cloneElement(component, { key });
    }
  });

  const resetZoom = () => {
    chartRef.current?.chart?.zoomOut();
  };

  const handlePlotType = (_: React.MouseEvent<HTMLElement>, type: PlotType) => {
    if (type === null) return;
    onChangePlotType(type);
  };

  const handleChangeDateTime = (date: DateRange<Dayjs>) => {
    log(date);
  };

  return (
    <StyledStackContainer
      className="plot-toolbar"
      spacing={1}
      direction="row"
      alignItems="center"
      justifyContent="space-between"
    >
      {hideTimeRange ? (
        <Box />
      ) : (
        <StyledTimePickerContainer>
          <DateTimePicker onChange={handleChangeDateTime} />
        </StyledTimePickerContainer>
      )}

      <Stack spacing={1.5} direction="row" alignItems="center">
        <>{extendedComponent}</>

        <StyledToggleButtonGroup
          value={dataType}
          exclusive
          onChange={handlePlotType}
          size="small"
        >
          <ToggleButton value={PlotDataType.CHART}>
            <Timeline />
          </ToggleButton>
          <ToggleButton value={PlotDataType.TABLE}>
            <TableChart />
          </ToggleButton>
        </StyledToggleButtonGroup>

        <Tooltip title={t("fullscreen")}>
          <IconButton size="small" onClick={handleFullScreen}>
            <AspectRatio />
          </IconButton>
        </Tooltip>
        <Tooltip title={t("refresh")}>
          <IconButton size="small" onClick={resetZoom}>
            <Refresh />
          </IconButton>
        </Tooltip>

        <ExportButton onExport={handelExport} />
        <Tooltip title={t("more")}>
          <IconButton size="small">
            <MoreVert />
          </IconButton>
        </Tooltip>
      </Stack>
    </StyledStackContainer>
  );
};

export default Toolbar;

const StyledStackContainer = styled(Stack)(({ theme }) => ({
  zIndex: 1,
  padding: theme.spacing(0, 4),
  margin: theme.spacing(4, 0),
  "& .MuiBox-root .MuiStack-root": {
    padding: "0px",
  },
}));

const StyledTimePickerContainer = styled(Box)(() => ({
  marginRight: "auto",
}));

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  "& button.Mui-selected": {
    backgroundColor: theme.palette.extendedColors.primary.lightBackground,
    color: theme.palette.primary.main,
    border: `1px solid ${theme.palette.extendedColors.primary.border}`,
    ":hover": {
      backgroundColor: theme.palette.extendedColors.primary.lightBackground,
    },
  },
  "& button:hover": {
    backgroundColor: theme.palette.extendedColors.primary.lightBackground,
  },
}));
