import { styled } from "@/theme";
import Box from "@mui/material/Box";
import type { BoxProps } from "@mui/material/Box";
import { PlotType, PlotDataType } from "./types";
import { StyledComponent } from "@emotion/styled";


export const StyledBoxContainer: StyledComponent<BoxProps> = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.palette.background.paper,
}));

type BoxChartContainerProps = BoxProps & {
  dataType: PlotType;
};

export const StyledBoxChartContainer: StyledComponent<BoxChartContainerProps>  = styled(Box, {
  shouldForwardProp: (prop) => prop !== "dataType",
})<BoxChartContainerProps>(({ dataType }) => ({
  position: "relative",

  "& .yAxis-enum-label:hover": {
    cursor: "pointer",

    "& .yAxis-enum-tooltip": {
      visibility: "visible !important",
      opacity: "1 !important",
    },
  },

  "& .yAxis-enum-tooltip": {
    backgroundColor: "#555",
    color: "#fff",
    textAlign: "center",
    padding: "5px",
    borderRadius: "3px",
    zIndex: 1,
    bottom: "100%",
    left: "50%",
    transform: "translate(-50%, -20%)",
    opacity: 0,
    transition: "opacity 0.3s",
    "&::after": {
      content: "''",
      position: "absolute",
      top: "100%",
      left: "50%",
      marginLeft: "-5px",
      borderWidth: "3px",
      borderStyle: "solid",
      borderColor: "#555 transparent transparent transparent",
    },
  },

  flex: "1 1 auto",
  "& .highcharts-container ": {
    display: dataType === PlotDataType.TABLE ? "none" : "block",
  },
  "& .highcharts-data-table": {
    width: "100%",
    display: dataType === PlotDataType.TABLE ? "block" : "none !important",
    position: dataType === PlotDataType.TABLE ? "absolute" : "positive",
    top: "0",
    maxHeight: "100%",
    overflow: "auto",
    "& .highcharts-table-caption": {
      display: "none",
    },
    "& table": {
      borderCollapse: "collapse",
      borderSpacing: 0,
      background: "white",
      minWidth: "100%",
      marginTop: "10px",
      fontFamily: "sans-serif",
      fontSize: "0.9em",
    },
    "& td, & th, & caption": {
      border: "1px solid silver",
      padding: "0.5em",
    },
    "& tr:nth-child(even), & thead tr": {
      background: "#f8f8f8",
    },
    "& tr": {
      cursor: "pointer",
    },
    "& tr:hover": {
      background: "#eff",
    },
    "& caption": {
      borderBottom: "none",
      fontSize: "1.1em",
      fontWeight: "bold",
    },
    "& th": {
      minWidth: "200px",
    },
    "& .highcharts-sort-ascending::after": {
      content: "' ↓'",
    },
    "& .highcharts-sort-descending::after": {
      content: "' ↑'",
    },
  },
}));
