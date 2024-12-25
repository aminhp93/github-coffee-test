import { styled } from "@/theme";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { TypographyProps } from "@mui/material/Typography";
import type { BoxProps } from "@mui/material/Box";
import { StyledComponent } from "@emotion/styled";

export const StyledBoxRoot: StyledComponent<BoxProps> = styled(Box)(({ theme }) => ({
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

export const StyledBoxIcon: StyledComponent<BoxProps> = styled(Box)(({ theme }) => ({
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

export const StyledBoxText: StyledComponent<BoxProps> = styled(Box)(() => ({
  paddingInlineStart: "8px",
  overflow: "hidden",
  whiteSpace: "nowrap",
}));

export const StyledText: StyledComponent<TypographyProps> = styled(Typography)(({ theme }) => ({
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden",
  color: theme.palette.text.primary,
}));

export const StyledBoxTypeIcon: StyledComponent<BoxProps> = styled(Box)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  ".MuiSvgIcon-root": {
    color: theme.palette.text.secondary,
  },
}));

interface ActionsGroupProps extends BoxProps {
  show?: boolean;
}

export const StyledBoxActionsGroup: StyledComponent<ActionsGroupProps> = styled(Box, {
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
