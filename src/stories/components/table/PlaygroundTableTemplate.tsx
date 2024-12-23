import React from "react";
import { StoryFn } from "@storybook/react";
import type { SelectChangeEvent } from "@mui/material/Select";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { StarBorder, AddReaction } from "@mui/icons-material";
import { TypeFilter } from "@/components/table/components/TypeFilter";

import { Table, GridColDef, TableProps } from "@/components/table";
import { useTranslation } from "@/utils/translation";
import { fakeData, MEDIUM_COLUMNS, SMALL_COLUMNS } from "./Table.utils";
import ButtonChangeLanguage from "../../utils/translation/components/ButtonChangeLanguage";
import { HeaderLayoutProvider } from "@/components/header-layout";
import { useFilterSelect, useIsMobile } from "@/hooks";
import { IconButtonWithTooltip } from "@/components";

const PlaygroundTableTemplate: StoryFn<TableProps> = (args) => {
  const smSize = useIsMobile();
  const { t } = useTranslation();

  const columns: GridColDef[] = smSize ? SMALL_COLUMNS(t) : MEDIUM_COLUMNS(t);

  const {
    data: filteredRows,
    filterValues,
    handleChangeFilter,
  } = useFilterSelect(fakeData(), "name");

  const [alignment, setAlignment] = React.useState("");

  const handleChange = (
    _: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <Box
      sx={(theme) => {
        return {
          backgroundColor: theme.palette.background.paper,
        };
      }}
    >
      <ButtonChangeLanguage />
      <Table
        rows={filteredRows}
        customHeader={{
          infoList: [
            { value: "1", label: "Info 1" },
            { value: "2", label: "Info 2" },
          ],
          quickActionListNodes: [
            <IconButtonWithTooltip key="filter1">
              <AddReaction />
            </IconButtonWithTooltip>,
            <IconButtonWithTooltip key="filter2">
              <AddReaction />
            </IconButtonWithTooltip>,
          ],
          detailActionNode: (
            <>
              <ToggleButtonGroup
                size="small"
                color="secondary"
                value={alignment}
                exclusive
                aria-label="Platform"
                onChange={handleChange}
              >
                <ToggleButton value="showFavorites">
                  <StarBorder
                    sx={{
                      mr: 2,
                    }}
                  />
                  <Typography>{`showFavorites`}</Typography>
                </ToggleButton>
              </ToggleButtonGroup>
              <TypeFilter
                value={filterValues || []}
                onChange={(e) =>
                  handleChangeFilter?.(
                    e as SelectChangeEvent<
                      (
                        | string
                        | number
                        | {
                            active: number;
                          }
                      )[]
                    >
                  )
                }
              />
            </>
          ),
        }}
        {...args}
        columns={columns}
      />
    </Box>
  );
};

const WrapperPlaygroundTableTemplate: StoryFn<TableProps> = (props) => {
  return (
    <HeaderLayoutProvider>
      <PlaygroundTableTemplate {...props} />
    </HeaderLayoutProvider>
  );
};

export default WrapperPlaygroundTableTemplate;
