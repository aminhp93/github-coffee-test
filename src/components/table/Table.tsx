// Import libraries
import { FilterList } from "@mui/icons-material";
import { DataGridPremiumProps, GridSlotProps } from "@mui/x-data-grid-premium";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ToggleButton from "@mui/material/ToggleButton";
import React from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

// Import local files
import { useSearch } from "@/hooks/useSearch";
import { useTranslation } from "@/utils/translation";
import { HeaderLayoutProps, useHeaderLayout } from "../header-layout";
import { Search } from "../search";
import {
  COLUMN_HEADER_HEIGHT,
  CUSTOM_RESIZE_COLUMN,
  HIDE_FOOTER,
  PAGE_SIZE_OPTIONS,
  PAGINATION,
  ROW_HEIGHT,
  HIDE_HEADER,
} from "./Table.constants";
import { StyledDataGridPremium } from "./Table.styles";
import { getColumns, getInitialState } from "./Table.utils";
import { CustomToolbar } from "./components/CustomToolbar";
import { EmptyDataRow } from "./components/EmptyDataRow";
import { getTableLocalization } from "./localization";
import { useIsMobile } from "@/hooks";
import { styled } from "@/theme";

export type RowContextMenu = {
  label: string;
  icon?: React.ReactNode;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: (rowData: any, rowIndex: string | null) => void;
};

export type TableProps = {
  emptyDataRowComponent?: React.JSXElementConstructor<
    GridSlotProps["noRowsOverlay"]
  >;
  customResizeColumn?: boolean;
  customHeader?: HeaderLayoutProps;
  hideHeader?: boolean;
  isMobile?: boolean;
  rowContextMenu?: RowContextMenu[];
} & DataGridPremiumProps;

const Table = ({
  customResizeColumn = CUSTOM_RESIZE_COLUMN,
  columnHeaderHeight = COLUMN_HEADER_HEIGHT,
  hideHeader = HIDE_HEADER,
  hideFooter = HIDE_FOOTER,
  pageSizeOptions = PAGE_SIZE_OPTIONS,
  pagination = PAGINATION,
  rowHeight = ROW_HEIGHT,
  customHeader,
  columns,
  rows,
  ...rest
}: TableProps) => {
  const { t } = useTranslation();
  const { showDetailAction, setShowDetailAction } = useHeaderLayout();
  const { data: searchedRows, onChangeKeyword } = useSearch([...(rows || [])]);
  const isMobile = useIsMobile();
  const [selectedRow, setSelectedRow] = React.useState<string | null>("");

  const [contextMenu, setContextMenu] = React.useState<{
    mouseX: number;
    mouseY: number;
  } | null>(null);

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();

    setSelectedRow(event.currentTarget.getAttribute("data-id"));

    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX + 2,
            mouseY: event.clientY - 6,
          }
        : // repeated contextmenu when it is already open closes it with Chrome 84 on Ubuntu
          // Other native context menus might behave different.
          // With this behavior we prevent contextmenu from the backdrop to re-locale existing context menus.
          null
    );
  };

  const handleClose = () => {
    setContextMenu(null);
  };

  const CUSTOM_HEADER: HeaderLayoutProps = {
    actionListNodes: [
      <ToggleButton
        key="filter"
        value="filter"
        size="small"
        selected={showDetailAction}
        color="secondary"
        onClick={() => setShowDetailAction(!showDetailAction)}
      >
        <FilterList />
      </ToggleButton>,
      <Search key="search" onChange={onChangeKeyword} />,
    ],
  };

  return (
    <>
      {rest.rowContextMenu && (
        <Menu
          open={contextMenu !== null}
          onClose={handleClose}
          anchorReference="anchorPosition"
          anchorPosition={
            contextMenu !== null
              ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
              : undefined
          }
        >
          {rest.rowContextMenu.map((item, index) => (
            <StyledMenuItem
              key={index}
              onClick={() =>
                item.onClick(
                  rows?.find((i) => i.id === selectedRow),
                  selectedRow
                )
              }
            >
              {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
              <ListItemText primary={item.label} />
            </StyledMenuItem>
          ))}
        </Menu>
      )}

      <StyledDataGridPremium
        data-testid="table"
        columnHeaderHeight={columnHeaderHeight}
        initialState={getInitialState({
          customResizeColumn,
          columnHeaderHeight,
          hideFooter,
          pageSizeOptions,
          pagination,
          rowHeight,
          columns,
          ...rest,
        })}
        slots={{
          toolbar: hideHeader ? null : CustomToolbar,
          noRowsOverlay: rest.emptyDataRowComponent ?? EmptyDataRow,
        }}
        slotProps={{
          toolbar: { ...CUSTOM_HEADER, ...customHeader },
          row: {
            onContextMenu: (e) => {
              if (!rest.rowContextMenu) return;
              e.preventDefault();
              e.stopPropagation();
              handleContextMenu(e);
            },
            style: { cursor: "context-menu" },
          },
        }}
        hideFooter={hideFooter}
        pageSizeOptions={pageSizeOptions}
        pagination={pagination}
        rowHeight={rowHeight}
        localeText={rest.localeText ?? getTableLocalization(t)}
        columns={getColumns({
          customResizeColumn,
          columnHeaderHeight,
          hideFooter,
          pageSizeOptions,
          pagination,
          rowHeight,
          columns,
          isMobile,
          ...rest,
        })}
        rows={searchedRows}
        {...rest}
      />
    </>
  );
};

export { Table };

const StyledMenuItem = styled(MenuItem)(() => ({
  minWidth: 150,
}));
