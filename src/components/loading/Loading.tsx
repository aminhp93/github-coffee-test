import CircularProgress from "@mui/material/CircularProgress";
import type { CircularProgressProps } from "@mui/material/CircularProgress";

const Loading = ({ ...props }: CircularProgressProps) => {
  return <CircularProgress {...props} />;
};

export { Loading };
