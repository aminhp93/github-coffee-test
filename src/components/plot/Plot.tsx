// Import libraries
import HighchartsReact from "highcharts-react-official";
import hcMore from "highcharts/highcharts-more";
import Highcharts from "highcharts/highstock";
import Box from "@mui/material/Box";
import ExportData from "highcharts/modules/export-data";
import Exporting from "highcharts/modules/exporting";
import { useCallback, useEffect, useRef, useState } from "react";

// Import local files
import { HeaderLayoutProvider } from "../header-layout/HeaderLayout";
import { ResizablePanels } from "../resizable-panels";
import { PlotDataType, HoverPoints, PlotType, PlotProps } from "./types";
import { getDataHover, getValidatedOptions } from "./utils";
import Table from "./table";
import Toolbar from "./toolbar";
import { StyledBoxContainer, StyledBoxChartContainer } from "./styles";
import { DEFAULT_SIZES_PANEL } from "@/components/resizable-panels/constants";
import { LANGUAGE_OPTIONS } from "./constants";
import { useTranslation } from "@/utils/translation";

if (typeof Highcharts === "object") {
  hcMore(Highcharts);
  Exporting(Highcharts);
  ExportData(Highcharts);
}

const TOOLBAR_HEIGHT = 56;

const Plot = ({
  options,
  showTable = false,
  showToolbar = false,
  toolbarProps = {
    hideTimeRange: true,
  },
  ...props
}: PlotProps) => {
  const { i18n } = useTranslation();
  const [hoverPoints, setHoverPoints] = useState<HoverPoints>();
  const [optionsPlot, setOptionsPlot] = useState<Highcharts.Options>(options);
  const [dataType, setDataType] = useState<PlotType>(PlotDataType.CHART);

  const chartRef = useRef<HighchartsReact.RefObject>(null);

  useEffect(() => {
    setOptionsPlot(options);
  }, [options]);

  useEffect(() => {
    if (showTable) {
      setOptionsPlot((prev) => {
        if (!prev) return prev;
        const newOptions = {
          plotOptions: {
            series: {
              point: {
                events: {
                  mouseOver: function () {
                    if (options.series) {
                      setHoverPoints(getDataHover(options.series, this.x));
                    }
                  },
                },
              },
            },
          } as Highcharts.PlotOptions,
        };
        return getValidatedOptions(newOptions, prev);
      });
    }
  }, [showTable, options.series]);

  useEffect(() => {
    if (chartRef.current) {
      const chart = chartRef.current.chart;
      const listYAxis = chart.yAxis;

      // Iterate over each yAxis
      if (listYAxis.every((yAxis) => yAxis.options.id?.includes("_enum"))) {
        const yAxisTickAmounts = listYAxis
          .map((yAxis) => yAxis.options.tickAmount)
          .filter(
            (tickAmount): tickAmount is number => tickAmount !== undefined
          );
        const maxTickAmount = Math.max(...yAxisTickAmounts);

        const yAxis = listYAxis.find(
          (yAxis) => yAxis.options.tickAmount === maxTickAmount
        );
        if (yAxis) {
          yAxis.update({
            gridLineWidth: 1,
          });
        }
      }
    }
  }, [chartRef]);

  Highcharts.setOptions(LANGUAGE_OPTIONS[i18n.language]);

  const renderChart = useCallback(() => {
    return (
      <StyledBoxContainer key="chart-toolbar">
        {showToolbar && (
          <Toolbar
            dataType={dataType}
            onChangePlotType={(type: PlotType) => setDataType(type)}
            chartRef={chartRef}
            {...toolbarProps}
          />
        )}
        <StyledBoxChartContainer
          dataType={dataType}
          style={{
            height: showToolbar ? `calc(100% - ${TOOLBAR_HEIGHT}px)` : "100%",
          }}
        >
          <HighchartsReact
            ref={chartRef}
            containerProps={{ style: { height: "100%" } }}
            highcharts={Highcharts}
            options={optionsPlot}
            allowChartUpdate={true}
            constructorType="stockChart"
            {...props}
          />
        </StyledBoxChartContainer>
      </StyledBoxContainer>
    );
  }, [showToolbar, dataType, toolbarProps, optionsPlot, props]);

  if (!showTable || dataType === PlotDataType.TABLE) {
    return renderChart();
  }

  return (
    <ResizablePanels
      direction="vertical"
      defaultSizes={[100 - DEFAULT_SIZES_PANEL, DEFAULT_SIZES_PANEL]}
      size={[{ minSize: 50 }, { minSize: 10 }]}
      panels={[
        renderChart(),
        showTable && (
          <Box key="chart-table" sx={{ width: "100%", height: "100%" }}>
            {optionsPlot.series && (
              <HeaderLayoutProvider>
                <Table
                  series={optionsPlot.series}
                  hoverPoints={hoverPoints}
                  setOptions={setOptionsPlot}
                />
              </HeaderLayoutProvider>
            )}
          </Box>
        ),
      ]}
    />
  );
};

export { Plot };
