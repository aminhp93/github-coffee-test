import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@/theme";
import { StyledComponent } from "@emotion/styled";
import type { TypographyProps } from "@mui/material/Typography";
import type { BoxProps } from "@mui/material/Box";


export const StyledBoxContainer: StyledComponent<BoxProps> = styled(Box)(({ theme }) => ({
  overflow: "auto",
  display: "flex",
  flexFlow: "column",
  height: "100%",
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
}));

export const StyledBoxHeader: StyledComponent<BoxProps> = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flex: "0 1 auto",

  "& .MuiTypography-root": {
    textTransform: "capitalize",
  },
}));

export const StyledBoxContent: StyledComponent<BoxProps> = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flex: "1 1 auto",
}));

export const StyledTypography: StyledComponent<TypographyProps> = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.typography.fontSize,
}));
