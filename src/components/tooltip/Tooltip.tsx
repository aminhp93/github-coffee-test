import MuiTooltip from "@mui/material/Tooltip";
import type { TooltipProps } from "@mui/material/Tooltip";
const Tooltip = ({ children, title, ...props }: TooltipProps) => {
  return (
    <MuiTooltip title={title} arrow {...props}>
      {children}
    </MuiTooltip>
  );
};

export { Tooltip };
