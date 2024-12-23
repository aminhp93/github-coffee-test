import Select from "@mui/material/Select";
import type { SelectProps } from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import keyBy from "lodash/keyBy";
import { useTranslation } from "@/utils/translation/i18n";
import { NODE_OPTIONS } from "@/components/system-tree/constants";

export const TypeFilter = (props: SelectProps) => {
  const { t } = useTranslation();
  return (
    <FormControl
      sx={{
        width: 300,
        "#type-filter-label.Mui-focused": {
          top: "0 !important",
        },
      }}
    >
      <InputLabel
        id="type-filter-label"
        sx={{
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          top: (props.value as any).length === 0 ? "-8px" : 0,
        }}
      >
        {t("typeFilter")}
      </InputLabel>
      <Select
        {...props}
        labelId="type-filter-label"
        id="type-filter"
        size="small"
        multiple
        input={<OutlinedInput label="Type Filter" />}
        renderValue={(value) => {
          const keyByValue = keyBy(NODE_OPTIONS, "type");
          return (value as string[])
            .map((i) => {
              // capitalize word
              const item = keyByValue[i].text;
              return item.charAt(0).toUpperCase() + item.slice(1);
            })
            .join(", ");
        }}
      >
        {NODE_OPTIONS.map((option) => (
          <MenuItem key={option.type} value={option.type}>
            {option.text}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
