import Highcharts from "highcharts";
import { formatDate } from "./utils";

export type ITypeChart = "line" | "bar" | "scatter";

export interface StatusValue {
  value: number;
  label: string;
}

export interface YAxisLabel {
  label: string;
  enumLabel: string[];
}

export interface OnlineOfflineChartProps {
  containerId: string;
}

export const APP_BAR_HEIGHT = 49;

export const DEFAULT_CHART_COLOR = [
  "#5470c6",
  "#91cc75",
  "#fac858",
  "#ee6666",
  "#73c0de",
  "#3ba272",
  "#fc8452",
  "#9a60b4",
  "#ea7ccc",
];

export const DATE_FORMAT = "YYYY-MM-DD";
export const TIME_FORMAT = "HH:mm:ss";
export const HOUR_MINUTE_FORMAT = "HH:mm";
export const DATE_TIME_FORMAT = `${DATE_FORMAT} ${TIME_FORMAT}`;
export const SEMI_TRANSPARENT = "rgba(128, 128, 128, 0.5)";

// TODO(minh.tran): Remove callback function in getDefaultOption. Need to refactor other components to use this function
export const getDefaultOption = (): Highcharts.Options => ({
  chart: {
    marginTop: 16,
  },
  credits: {
    enabled: false,
  },
  rangeSelector: {
    selected: 1,
    enabled: false,
  },
  navigator: {
    enabled: false,
  },
  tooltip: {
    enabled: true,
    shared: true,
    useHTML: true,
    backgroundColor: "#ffffff",
    formatter: function () {
      let tooltipContent = `<b>${formatDate(this.x as number)}</b><br>`;
      this.points?.forEach((point) => {
        // Tooltip is only displayed for series that are not arearange(max min value)
        if (point.series.userOptions.type !== "arearange") {
          tooltipContent += `<span style="color:${point.color}">\u25CF</span> ${point.series.name}: <b>${point.y}</b><br>`;
        }
      });

      return tooltipContent;
    },
  },
  // legend: { enabled: false },
  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "middle",
  },
  series: [],
  xAxis: {
    crosshair: {
      color: "red",
      dashStyle: "Dash",
      zIndex: 5,
    },
    // labels: {
    //   formatter: function () {
    //     console.log(this.value);
    //     return this.value;
    //   },
    // },
  },
  yAxis: {
    crosshair: {
      width: 1,
      color: "green",
      dashStyle: "Dash",
      zIndex: 5,
      label: {
        enabled: true,
      },
    },
  },
  exporting: {
    buttons: {
      contextButton: {
        enabled: false,
      },
    },
    showTable: true,
  },
  plotOptions: {},
});

export const LANGUAGE_OPTIONS: {
  [key: string]: Highcharts.Options;
} = {
  en: {
    lang: {
      viewFullscreen: "View in full screen",
      exitFullscreen: "Exit from full screen",
      printChart: "Print chart",
      downloadPNG: "Download PNG image",
      downloadJPEG: "Download JPEG image",
      downloadPDF: "Download PDF document",
      downloadSVG: "Download SVG vector image",
      contextButtonTitle: "Chart context menu",
      loading: "Loading...",
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      shortMonths: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      weekdays: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      decimalPoint: ".",
      numericSymbols: ["k", "M", "G", "T", "P", "E"],
      resetZoom: "Reset zoom",
      resetZoomTitle: "Reset zoom level 1:1",
      thousandsSep: " ",
      rangeSelectorZoom: "Zoom",
      rangeSelectorFrom: "",
      rangeSelectorTo: "→",
      downloadCSV: "Download CSV",
      downloadXLS: "Download XLS",
      exportData: {
        annotationHeader: "Annotations",
        categoryHeader: "Category",
        categoryDatetimeHeader: "DateTime",
      },
      viewData: "View data table",
      hideData: "Hide data table",
      exportInProgress: "Exporting...",
    },
  },
  no: {
    lang: {
      viewFullscreen: "Vis i fullskjerm",
      exitFullscreen: "Avslutt fullskjerm",
      printChart: "Skriv ut diagram",
      downloadPNG: "Last ned PNG-bilde",
      downloadJPEG: "Last ned JPEG-bilde",
      downloadPDF: "Last ned PDF-dokument",
      downloadSVG: "Last ned SVG-vektorbilde",
      contextButtonTitle: "Diagram kontekstmeny",
      loading: "Laster...",
      months: [
        "Januar",
        "Februar",
        "Mars",
        "April",
        "Mai",
        "Juni",
        "Juli",
        "August",
        "September",
        "Oktober",
        "November",
        "Desember",
      ],
      shortMonths: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Mai",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Okt",
        "Nov",
        "Des",
      ],
      weekdays: [
        "Søndag",
        "Mandag",
        "Tirsdag",
        "Onsdag",
        "Torsdag",
        "Fredag",
        "Lørdag",
      ],
      decimalPoint: ",",
      numericSymbols: ["k", "M", "G", "T", "P", "E"],
      resetZoom: "Tilbakestill zoom",
      resetZoomTitle: "Tilbakestill zoomnivå 1:1",
      thousandsSep: " ",
      rangeSelectorZoom: "Zoom",
      rangeSelectorFrom: "Fra",
      rangeSelectorTo: "Til",
      downloadCSV: "Last ned CSV",
      downloadXLS: "Last ned XLS",
      exportData: {
        annotationHeader: "Merknader",
        categoryHeader: "Kategori",
        categoryDatetimeHeader: "DatoTid",
      },
      viewData: "Vis datatabell",
      hideData: "Skjul datatabell",
      exportInProgress: "Eksporterer...",
    },
  },
  sv: {
    lang: {
      viewFullscreen: "Visa i helskärm",
      exitFullscreen: "Avsluta helskärm",
      printChart: "Skriv ut diagram",
      downloadPNG: "Ladda ner PNG-bild",
      downloadJPEG: "Ladda ner JPEG-bild",
      downloadPDF: "Ladda ner PDF-dokument",
      downloadSVG: "Ladda ner SVG-vektorbild",
      contextButtonTitle: "Diagram kontextmeny",
      loading: "Laddar...",
      months: [
        "Januari",
        "Februari",
        "Mars",
        "April",
        "Maj",
        "Juni",
        "Juli",
        "Augusti",
        "September",
        "Oktober",
        "November",
        "December",
      ],
      shortMonths: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Maj",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Okt",
        "Nov",
        "Dec",
      ],
      weekdays: [
        "Söndag",
        "Måndag",
        "Tisdag",
        "Onsdag",
        "Torsdag",
        "Fredag",
        "Lördag",
      ],
      decimalPoint: ",",
      numericSymbols: ["k", "M", "G", "T", "P", "E"],
      resetZoom: "Återställ zoom",
      resetZoomTitle: "Återställ zoomnivå 1:1",
      thousandsSep: " ",
      rangeSelectorZoom: "Zoom",
      rangeSelectorFrom: "Från",
      rangeSelectorTo: "Till",
      downloadCSV: "Ladda ner CSV",
      downloadXLS: "Ladda ner XLS",
      exportData: {
        annotationHeader: "Anteckningar",
        categoryHeader: "Kategori",
        categoryDatetimeHeader: "DatumTid",
      },
      viewData: "Visa datatabell",
      hideData: "Dölj datatabell",
      exportInProgress: "Exporterar...",
    },
  },
};
