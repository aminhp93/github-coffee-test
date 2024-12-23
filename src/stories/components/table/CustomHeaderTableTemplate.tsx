import { FilterList, StarBorder } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import type { SelectChangeEvent } from "@mui/material/Select";

import { Table, GridColDef } from "@/components/table";
import { useTranslation } from "@/utils/translation";
import { MEDIUM_COLUMNS, SMALL_COLUMNS, fakeData } from "./Table.utils";
import { Theme, useMediaQuery } from "@/theme";
import { HeaderLayoutProvider } from "@/components/header-layout";
import { useFilterSelect } from "@/hooks/useFilterSelect";
import { TypeFilter } from "@/components/table/components/TypeFilter";

const CustomHeaderTableTemplate = () => {
  const smSize = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const { t } = useTranslation();
  const columns: GridColDef[] = smSize ? SMALL_COLUMNS(t) : MEDIUM_COLUMNS(t);

  const {
    data: filteredRows,
    filterValues,
    handleChangeFilter,
  } = useFilterSelect(fakeData(), "name");

  return (
    <Box
      sx={(theme) => {
        return {
          backgroundColor: theme.palette.background.paper,
        };
      }}
    >
      <Table
        sx={{
          minHeight: 300,
        }}
        rows={filteredRows}
        columns={columns}
        hideHeader
        customHeader={{
          priorityActionListNodes: [
            <Button startIcon={<FilterList />} key="force-action-1">
              {"Force action 1"}
            </Button>,
            <Button startIcon={<FilterList />} key="force-action-2">
              {"Force action 2"}
            </Button>,
            <Button startIcon={<FilterList />} key="force-action-3">
              {"Force action 3"}
            </Button>,
          ],

          infoList: [
            { value: "1", label: "Info 1" },
            { value: "2", label: "Info 2" },
          ],
          quickActionListNodes: [
            <Button
              variant="outlined"
              startIcon={<FilterList />}
              key="quick-action-1"
            >
              {"Quick action 1"}
            </Button>,
            <Button
              variant="outlined"
              startIcon={<FilterList />}
              key="quick-action-2"
            >
              {"Quick action 2"}
            </Button>,
          ],
          detailActionNode: (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Button
                startIcon={<StarBorder />}
                variant="outlined"
                className="filter-button"
                sx={{ mr: 2 }}
              >
                {t("showFavorites")}
              </Button>
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
            </Box>
          ),
        }}
      />
    </Box>
  );
};

const WrapperCustomHeaderTableTemplate = () => {
  return (
    <HeaderLayoutProvider>
      <CustomHeaderTableTemplate />
    </HeaderLayoutProvider>
  );
};

export default WrapperCustomHeaderTableTemplate;
