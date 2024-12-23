import { ReactNode } from "react";
import MuiButton from "@mui/material/Button";
import type { ButtonProps } from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import type { TooltipProps } from "@mui/material/Tooltip";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";

const IconButtonWithTooltip = ({
  showBorder = false,
  iconButtonProps,
  tooltipProps,
  buttonProps,
  children,
  ...rest
}: {
  showBorder?: boolean;
  iconButtonProps?: IconButtonProps;
  tooltipProps?: Omit<TooltipProps, "children">;
  buttonProps?: ButtonProps;
  children: ReactNode;
}) => {
  const size = buttonProps?.size ?? "medium";
  let minWidth = "2.5rem";
  if (size === "small") {
    minWidth = "2rem";
  } else if (size === "large") {
    minWidth = "3rem";
  }

  const { sx, ...restButtonProps } = buttonProps ?? {};

  if (!showBorder) {
    return (
      <Tooltip title="icon button" placement="right" {...tooltipProps}>
        <span>
          <IconButton {...iconButtonProps} {...rest}>
            {children}
          </IconButton>
        </span>
      </Tooltip>
    );
  }

  return (
    <Tooltip title="icon button" placement="right" {...tooltipProps}>
      <span>
        <MuiButton
          variant="text"
          color="secondary"
          sx={{
            padding: "0",
            minWidth,
            "& .MuiButton-icon": {
              margin: "0",
            },
            ...sx,
          }}
          {...restButtonProps}
          {...rest}
        >
          {children}
        </MuiButton>
      </span>
    </Tooltip>
  );
};

export { IconButtonWithTooltip };
