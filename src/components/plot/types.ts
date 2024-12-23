import { SeriesOptionsType } from "highcharts";
import { NodeDetail } from "@/services/http/system-tree/SystemTree.schema";
import { dayjs } from "@/utils/formatter/dayjs";
import { TimeConfig } from "../date-time-picker/types";

export type HoverPoints = {
  [key: string]: {
    avg?: number;
    max?: number;
    min?: number;
  };
};

export type ToolbarProps = {
  onTimeChange?: (from?: TimeConfig, to?: TimeConfig) => void;
  hideTimeRange?: boolean;
  components?: { [key: string]: React.JSX.Element };
  componentsProps?: { [key: string]: React.JSX.Element };
};

export type PlotProps = {
  showTable?: boolean;
  showToolbar?: boolean;
  showTimeRange?: boolean;
  options: Highcharts.Options;
  toolbarProps?: ToolbarProps;
  language?: string;
};

export type PlotType = keyof typeof PlotDataType;

export interface RowTable extends Omit<NodeDetail, "children"> {
  parentId: string | null;
}

export type StartTime = {
  value: string | undefined;
  timeFrame: string | undefined;
};

export type EndTime = {
  value: string | undefined;
  timeFrame: string | undefined;
};

export type TimeChangeData = {
  timeFrame?: string;
  dateValue?: dayjs.Dayjs;
  timeValue?: dayjs.Dayjs;
};

export type TimeFrame = {
  value: string;
  label: string;
  count: number;
  unit: string;
};

export type Series = {
  id: string;
  type: string;
  data: [number, number, number?][];
};

type DataType = "number" | "string" | "boolean" | "enum" | "digital";

export type PlotDataDetail = {
  id: string;
  name: string;
  dataType: DataType;
  dataUnit: string;
  data: [number, number, string?][];
  dataRange?: [number, number, number, string?][];
  customUnit?: {
    [key: string]: string;
  };
};

export type PlotData = PlotDataDetail[];

export type INewYAxisItem = {
  title: string | undefined;
  opposite: boolean;
};

export type PlotTableProps = SeriesOptionsType[] & {
  average?: number;
  point?: HoverPoints[string];
};

export enum PlotDataType {
  CHART = "CHART",
  TABLE = "TABLE",
}

export type HistoricalDetail = PlotDataDetail;
