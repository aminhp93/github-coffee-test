import { styled } from "@/theme";
import { DataGridPremium, gridClasses } from "@mui/x-data-grid-premium";

// Import local files
import { FOOTER_HEIGHT } from "./Table.constants";

export const StyledDataGridPremium = styled(DataGridPremium)(({ theme }) => ({
  ".MuiDataGrid-cell--pinnedLeft, .MuiDataGrid-cell--pinnedRight": {
    backgroundColor: theme.palette.background.paper,
  },
  ".MuiDataGrid-virtualScrollerContent .MuiDataGrid-row.Mui-selected .MuiDataGrid-cell--pinnedLeft, .MuiDataGrid-virtualScrollerContent .MuiDataGrid-row.Mui-selected .MuiDataGrid-cell--pinnedRight":
    {
      backgroundColor: theme.palette.mode === "light" ? "#EDF7FE" : "#142736",
    },
  ".MuiDataGrid-virtualScrollerContent .MuiDataGrid-row.Mui-selected:hover .MuiDataGrid-cell--pinnedLeft, .MuiDataGrid-virtualScrollerContent .MuiDataGrid-row.Mui-selected:hover .MuiDataGrid-cell--pinnedRight":
    {
      backgroundColor: theme.palette.mode === "light" ? "#EDF7FE" : "#142736",
    },
  ".MuiDataGrid-virtualScrollerContent .MuiDataGrid-row:hover .MuiDataGrid-cell--pinnedLeft, .MuiDataGrid-virtualScrollerContent .MuiDataGrid-row:hover .MuiDataGrid-cell--pinnedRight":
    {
      backgroundColor: theme.palette.mode === "light" ? "#F5F5F5" : "#252525",
    },
  ".MuiDataGrid-virtualScrollerContent  .MuiDataGrid-filler--pinnedLeft, .MuiDataGrid-virtualScrollerContent .MuiDataGrid-filler--pinnedRight":
    {
      backgroundColor: theme.palette.background.paper,
    },

  ".MuiDataGrid-row.Mui-selected": {
    backgroundColor: theme.palette.mode === "light" ? "#EDF7FE" : "#142736",
  },
  ".MuiDataGrid-row:hover": {
    backgroundColor: theme.palette.mode === "light" ? "#F5F5F5" : "#252525",
  },
  ".MuiDataGrid-row.Mui-selected:hover": {
    backgroundColor: theme.palette.mode === "light" ? "#EDF7FE" : "#142736",
  },
  ".MuiDataGrid-filler--pinnedLeft, .MuiDataGrid-filler--pinnedRight": {
    backgroundColor: theme.palette.background.paper,
  },

  border: "none",
  // Hide outline when a cell is selected in the data grid.
  [`& .${gridClasses.columnHeader}, & .${gridClasses.cell}`]: {
    outline: "transparent",
  },
  [`& .${gridClasses.columnHeader}:focus-within, & .${gridClasses.cell}:focus-within`]:
    {
      outline: "none",
    },

  "& .MuiDataGrid-cell": {
    color: theme.palette.text.primary,
  },

  "& .MuiDataGrid-row:hover": {
    "& .MuiDataGrid-actionsCell, & .MuiDataGrid-rowReorderCell": {
      button: {
        visibility: "visible",
      },
    },
  },

  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    borderRadius: "unset",
    ".MuiDataGrid-columnHeaderTitle": {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: "0.75rem",
      lineHeight: 1.75,
    },
  },

  "& .MuiDataGrid-actionsCell, .MuiDataGrid-rowReorderCell": {
    "button:not([aria-label='more'])": {
      visibility: "hidden",
    },
    "& .MuiSvgIcon-root": {
      fontSize: theme.spacing(6),
    },
  },

  "& .MuiDataGrid-cell--withRightBorder": {
    borderRightWidth: 0,
  },

  "& .MuiDataGrid-columnHeader--withRightBorder": {
    borderRightWidth: 0,
  },

  "& .MuiDataGrid-filler--pinnedLeft": {
    borderRightWidth: 0,
  },

  "& .MuiDataGrid-footerContainer": {
    height: FOOTER_HEIGHT,
    minHeight: FOOTER_HEIGHT,
  },

  "& .MuiTablePagination-root": {
    maxHeight: "unset !important",
  },
}));
