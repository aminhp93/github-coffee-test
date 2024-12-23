import {
  Edit,
  FilterList,
  OpenInNew,
  Preview,
  StarBorder,
} from "@mui/icons-material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import type { SelectChangeEvent } from "@mui/material/Select";
import { StoryFn } from "@storybook/react";
import { Tooltip } from "@/components/tooltip";
import { HeaderLayoutProvider } from "@/components/header-layout";
import {
  GridActionsCellItem,
  GridColDef,
  Table,
  TableProps,
} from "@/components/table";
import { useFilterSelect } from "@/hooks";
import { i18n, useTranslation } from "@/utils/translation/i18n";
import { fakeData } from "./Table.utils";
import ButtonChangeLanguage from "../../utils/translation/components/ButtonChangeLanguage";
import { TypeFilter } from "@/components/table/components/TypeFilter";

const PlaygroundTableTemplate: StoryFn<TableProps> = (args) => {
  // const smSize = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const { t } = useTranslation();

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "name",
      flex: 1,
      minWidth: 350,
    },
    {
      field: "description",
      headerName: "description",
      width: 400,
    },
    {
      field: "dataType",
      headerName: "data type",
      width: 500,
    },
    {
      field: "action",
      headerName: "",
      type: "actions",
      sortable: false,
      align: "right",
      getActions: (params) => [
        <GridActionsCellItem
          key={params.id}
          icon={
            <Tooltip title={i18n.t("open")}>
              <Preview />
            </Tooltip>
          }
          label={i18n.t("quickLook")}
        />,
        //  Menu
        <GridActionsCellItem
          key={params.id}
          icon={
            <Tooltip title={i18n.t("open")}>
              <OpenInNew />
            </Tooltip>
          }
          label={i18n.t("open")}
          showInMenu
        />,
        <GridActionsCellItem
          key={params.id}
          icon={
            <Tooltip title={i18n.t("quickLook")}>
              <Preview />
            </Tooltip>
          }
          label={i18n.t("quickLook")}
          showInMenu
        />,
        <GridActionsCellItem
          key={params.id}
          icon={
            <Tooltip title={i18n.t("edit")}>
              <Edit />
            </Tooltip>
          }
          label={i18n.t("edit")}
          showInMenu
        />,
      ],
    },
  ];

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
      <ButtonChangeLanguage />
      <Table
        rows={filteredRows}
        customHeader={{
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
              {t("QuickAction1")}
            </Button>,
            <Button
              variant="outlined"
              startIcon={<FilterList />}
              key="quick-action-2"
            >
              {t("QuickAction2")}
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
