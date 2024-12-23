import Box from "@mui/material/Box";
import { styled } from "@/theme";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const StyledBoxPath: any = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  border: `1px solid ${theme.palette.border}`,
  justifyContent: "space-between",
  borderRadius: theme.shape.borderRadius,
  height: "40px",
  padding: "0 14px",
  "& .MuiTypography-root": {
    width: "100%",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    "&.path": {
      padding: `${theme.spacing(1)} 0`,
    },
  },
  ".MuiSvgIcon-root": {
    color: theme.palette.grey["600"],
  },
  ":hover": {
    cursor: "pointer",
    border: `1px solid ${theme.palette.secondary.main}`,
  },
}));
