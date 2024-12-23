import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Highcharts, {
  OptionsStepValue,
  SeriesOptionsType,
} from "highcharts/highstock";
import cloneDeep from "lodash/cloneDeep";
import { useCallback, useMemo } from "react";

import {
  filteredRowTable,
  getIdChartRange,
  getOptionsRowRemove,
  getOptionsRowSelectionModelChange,
  getValidatedOptions,
} from "../utils";
import { HoverPoints } from "../types";
import LineSettings from "./LineSettings";
import { PlotDataDetail } from "../types";
import { ITypeChart } from "../constants";
import { GridColDef, Table } from "@/components/table";
import { ColorPicker } from "@/components/color-picker";
import { useTranslation } from "@/utils/translation";

type Props = {
  hoverPoints?: HoverPoints;
  series: SeriesOptionsType[];
  setOptions: React.Dispatch<React.SetStateAction<Highcharts.Options>>;
};

const ChartTable = ({ hoverPoints, series, setOptions }: Props) => {
  const { t } = useTranslation();

  const rows = useMemo(() => {
    return filteredRowTable(series, hoverPoints);
  }, [series, hoverPoints]);

  const onRowRemove = useCallback(
    (row: PlotDataDetail) => {
      setOptions((prev) => {
        const newOptions = getOptionsRowRemove(row, prev);
        return getValidatedOptions(newOptions, prev);
      });
    },
    [setOptions]
  );

  // TODO: now it is not change from step line to normal line. check later
  const onChangeStepLine = (state: boolean, idRow: string) => {
    setOptions((prev) => {
      const newOptions = {
        series: prev.series?.map((item) => {
          if (item.id === idRow) {
            if (state) {
              return {
                ...item,
                step: "center" as OptionsStepValue,
              };
            } else {
              const cloneItem = cloneDeep(item);
              if ("step" in cloneItem) {
                delete cloneItem.step;
              }
              return {
                ...cloneItem,
              };
            }
          }
          return item;
        }),
      };
      return getValidatedOptions(newOptions, prev);
    });
  };

  const onChangeChartType = useCallback(
    (state: ITypeChart, idRow: string) => {
      setOptions((prev) => {
        const newOptions = {
          series: prev.series?.map((item) => {
            const cloneItem = cloneDeep(item);
            if (cloneItem.id !== undefined) {
              const idRangeSplit = getIdChartRange(cloneItem.id);

              if (
                item.type === "arearange" &&
                (cloneItem.id === idRow || idRangeSplit === idRow)
              ) {
                cloneItem.visible = state === "line";
              }

              if (cloneItem.id === idRow) {
                return {
                  ...cloneItem,
                  type: state,
                } as Highcharts.SeriesOptionsType;
              }
            }
            return cloneItem;
          }),
        };
        return getValidatedOptions(newOptions, prev);
      });
    },
    [setOptions]
  );

  const changeColorChangeSeries = useCallback(
    (color: string, idRow: string) => {
      setOptions((prev) => {
        const newOptions = {
          series: prev.series?.map((item) => {
            let cloneItem = cloneDeep(item);
            if (cloneItem.id !== undefined) {
              const idRangeSplit = getIdChartRange(cloneItem.id);

              if (
                item.type === "arearange" &&
                (cloneItem.id === idRow || idRangeSplit === idRow)
              ) {
                cloneItem = {
                  ...cloneItem,
                  color,
                } as Highcharts.SeriesOptionsType;
              }

              if (cloneItem.id === idRow) {
                return { ...cloneItem, color } as Highcharts.SeriesOptionsType;
              }
            }
            return cloneItem;
          }),
        };
        return getValidatedOptions(newOptions, prev);
      });
    },
    [setOptions]
  );

  const COLUMNS: GridColDef[] = [
    {
      field: "name",
      headerName: t("tagName"),
      flex: 1,
      editable: false,
      renderCell: (param) => {
        const handleColorChange = (color: string) => {
          changeColorChangeSeries(color, param.row.id);
        };

        return (
          <Stack
            spacing={1}
            direction="row"
            justifyContent="start"
            alignItems="center"
          >
            <Box sx={{ width: "25px", height: "25px" }}>
              <ColorPicker
                value={param.row.color}
                variant="button"
                onChange={handleColorChange}
              />
            </Box>
            <Box>{param.value}</Box>
          </Stack>
        );
      },
    },

    {
      field: "description",
      headerName: t("description"),
      flex: 1,
      editable: false,
    },

    {
      field: "avg",
      headerName: t("avg"),
      width: 100,
      editable: false,
      renderCell: (param) => {
        return param.row.point?.avg?.toFixed(2);
      },
    },

    {
      field: "min",
      headerName: t("min"),
      width: 100,
      editable: false,
      renderCell: (param) => {
        return param.row.point?.min?.toFixed(2);
      },
    },

    {
      field: "max",
      headerName: t("max"),
      width: 100,
      editable: false,
      renderCell: (param) => {
        return param.row.point?.max?.toFixed(2);
      },
    },

    {
      field: "unit",
      headerName: t("unit"),
      width: 100,
      editable: false,
    },

    {
      field: "stateText",
      headerName: t("stateText"),
      width: 100,
      editable: false,
    },

    {
      field: "action",
      headerName: "",
      width: 100,
      editable: false,
      renderCell: (params) => {
        return (
          <Box>
            <LineSettings
              cbRemove={() => onRowRemove(params.row)}
              onChangeStepLine={(state) =>
                onChangeStepLine(state, params.row.id)
              }
              onChangeChartType={(chartType) =>
                onChangeChartType(chartType, params.row.id)
              }
            />
          </Box>
        );
      },
    },
  ];

  const handleRowSelection = (selectedRows: string[]) => {
    setOptions((prev) => {
      const newOptions = getOptionsRowSelectionModelChange(selectedRows, prev);
      return getValidatedOptions(newOptions, prev);
    });
  };

  return (
    <Table
      className="chart-table"
      rowSelectionModel={rows.filter((i) => i.visible).map((i) => i.id ?? "")}
      onRowSelectionModelChange={(rowSelectionModel) => {
        handleRowSelection(rowSelectionModel as string[]);
      }}
      disableRowSelectionOnClick
      checkboxSelection
      columns={COLUMNS}
      rows={rows}
      hideFooter
      hideHeader
    />
  );
};

export default ChartTable;
