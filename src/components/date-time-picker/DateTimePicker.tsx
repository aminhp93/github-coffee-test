// Import libraries
import { useState, useEffect } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DateTimeRangePicker } from "@mui/x-date-pickers-pro/DateTimeRangePicker";
import { SingleInputDateTimeRangeField } from "@mui/x-date-pickers-pro/SingleInputDateTimeRangeField";
import { DateRange } from "@mui/x-date-pickers-pro";
import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import keyBy from "lodash/keyBy";

// Import local files
import { log } from "@/utils/logger";
import { LIST_DATE_TIME_FORMAT } from "@/hooks/useFormatDate";
import { LIST_START_TIME_FRAME } from "./constants";
import { dayjs, Dayjs } from "@/utils/formatter/dayjs";
import { useTranslation } from "@/utils/translation";
import { ActionBar } from "./components/ActionBar";
import { ShortCuts } from "./components/ShortCuts";
import { Toolbar } from "./components/Toolbar";

type CustomdatePickerProps = {
  format?: string;
  onChange?: (dateRange: DateRange<Dayjs>) => void;
};

const DateTimePicker = ({
  format: formatProps,
  onChange,
}: CustomdatePickerProps) => {
  const format =
    formatProps ??
    `${LIST_DATE_TIME_FORMAT["mm/dd/yyyy"]?.default} ${LIST_DATE_TIME_FORMAT["24-hour"]?.default}`;
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [selectedDateRange, setSelectedDateRange] = useState<DateRange<Dayjs>>([
    dayjs(),
    dayjs(),
  ]);
  const [timeOption, setTimeOption] = useState<string | null>(null);

  const handleChange = (dateRange: DateRange<Dayjs>) => {
    let newSelectedDateRange = dateRange;
    if (!dateRange[1]) {
      newSelectedDateRange = [dateRange[0], dateRange[0]];
    }
    setSelectedDateRange(newSelectedDateRange);
    onChange?.(newSelectedDateRange);
  };

  useEffect(() => {
    if (timeOption) {
      const toDate = dayjs();
      let fromDate: Dayjs;
      const timeFrames = LIST_START_TIME_FRAME(t);
      const timeFrameObj = keyBy(timeFrames, "value");
      const result = timeFrameObj[timeOption];
      if (result) {
        fromDate = toDate.subtract(result.count, result.unit);
        setSelectedDateRange([fromDate, toDate]);
      } else {
        log("Invalid time option:", timeOption);
      }
    }
  }, [t, timeOption]);

  const renderTitle = () => (
    <Box onClick={() => setOpen(true)}>
      {selectedDateRange[0] === null && selectedDateRange[1] === null
        ? "click me"
        : `${selectedDateRange[0]?.format(format)} - ${
            selectedDateRange[1] !== null
              ? selectedDateRange[1].format(format)
              : format
          }`}
    </Box>
  );

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <Box data-testid="plot-timepicker-box" sx={{ position: "relative" }}>
        {renderTitle()}
        {open && (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
              components={["SingleInputDateTimeRangeField"]}
              sx={{
                position: "absolute",
                background: (theme) => theme.palette.background.paper,
              }}
            >
              <DateTimeRangePicker
                onChange={handleChange}
                value={selectedDateRange}
                open
                slots={{
                  field: SingleInputDateTimeRangeField,
                  toolbar: Toolbar,
                  shortcuts: ShortCuts,
                  actionBar: () => <ActionBar setTimeOption={setTimeOption} />,
                }}
                format={format}
                slotProps={{
                  actionBar: {
                    actions: ["cancel", "accept"],
                  },
                  popper: {
                    // @ts-expect-error to bypass data-testid not existed in type
                    "data-testid": "plot-timepicker-popper",
                  },
                }}
              />
            </DemoContainer>
          </LocalizationProvider>
        )}
      </Box>
    </ClickAwayListener>
  );
};

export { DateTimePicker };
