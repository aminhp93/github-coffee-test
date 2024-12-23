import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@/theme";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const StyledBoxContainer: any = styled(Box)(({ theme }) => ({
  overflow: "auto",
  display: "flex",
  flexFlow: "column",
  height: "100%",
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
}));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const StyledBoxHeader: any = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flex: "0 1 auto",

  "& .MuiTypography-root": {
    textTransform: "capitalize",
  },
}));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const StyledBoxContent: any = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flex: "1 1 auto",
}));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const StyledTypography: any = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.typography.fontSize,
}));
