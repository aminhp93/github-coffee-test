import { styled } from "@/theme";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { BoxProps } from "@mui/material/Box";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const StyledBoxRoot: any = styled(Box)(({ theme }) => ({
  alignItems: "center",
  display: "grid",
  gridTemplateColumns: "auto auto 1fr auto",
  paddingInlineEnd: theme.spacing(2),
  minHeight: theme.spacing(10),

  ":hover": {
    backgroundColor: theme.palette.action.hover,
    "& .actions-group": {
      visibility: "visible",
    },
  },

  "&.isSelected": {
    backgroundColor: theme.palette.action.selected,
  },
}));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const StyledBoxIcon: any = styled(Box)(({ theme }) => ({
  alignItems: "center",
  fontSize: 0,
  cursor: "pointer",
  display: "flex",
  height: theme.spacing(6),
  width: theme.spacing(6),
  justifyContent: "center",
  transition: "transform linear 0.1s",
  transform: "rotate(0deg)",

  "&.isOpen": {
    transform: "rotate(90deg)",
  },
}));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const StyledBoxText: any = styled(Box)(() => ({
  paddingInlineStart: "8px",
  overflow: "hidden",
  whiteSpace: "nowrap",
}));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const StyledText: any = styled(Typography)(({ theme }) => ({
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden",
  color: theme.palette.text.primary,
}));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const StyledBoxTypeIcon: any = styled(Box)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  ".MuiSvgIcon-root": {
    color: theme.palette.text.secondary,
  },
}));

interface ActionsGroupProps extends BoxProps {
  show?: boolean;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const StyledBoxActionsGroup: any = styled(Box, {
  shouldForwardProp: (prop) => prop !== "show",
})<ActionsGroupProps>(({ theme, show }) => ({
  alignItems: "center",
  display: "flex",
  visibility: show ? "visible" : "hidden",
  "& .MuiButtonBase-root": {
    borderRadius: theme.shape.borderRadius,
    padding: 0,
  },
}));
