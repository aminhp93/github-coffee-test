import { GRID_CHECKBOX_SELECTION_COL_DEF } from "@mui/x-data-grid-premium";
import { TableProps } from "./Table";
import { DEFAULT_PAGE_SIZE } from "./Table.constants";

export const getInitialState = (props: TableProps) => {
  let initialState = props.initialState;

  if (!props.columns || props.columns.length === 0) {
    return initialState;
  }

  if (props.customResizeColumn) {
    // default will be pinned the first columns
    // if checkbox selection is enabled, it will be pinned to the left
    if (props.checkboxSelection) {
      initialState = {
        ...initialState,
        pinnedColumns: {
          left: [GRID_CHECKBOX_SELECTION_COL_DEF.field, props.columns[0].field],
        },
      };
    } else {
      initialState = {
        ...initialState,
        pinnedColumns: {
          left: [props.columns[0].field],
        },
      };
    }
  }

  if (props.pagination) {
    initialState = {
      ...initialState,
      pagination: { paginationModel: { pageSize: DEFAULT_PAGE_SIZE } },
    };
  }

  return initialState;
};

export const getColumns = (props: TableProps) => {
  let columns = props.columns;
  if (props.customResizeColumn) {
    // update size of the first column
    columns = columns.map((column, index) => {
      if (index === 0) {
        // Update size of the first column for mobile or desktop
        return {
          ...column,
          minWidth: props.isMobile ? 150 : 300,
          maxWidth: props.isMobile ? 150 : 500,
          flex: 1,
        };
      }

      // update size of the second column on mobile screen
      if (index === 1 && props.isMobile) {
        return {
          minWidth: 150,
          maxWidth: 150,
          ...column,
        };
      }

      // default min width is 100, width is 200
      return { minWidth: 100, width: 200, ...column };
    });
  }
  return columns;
};
