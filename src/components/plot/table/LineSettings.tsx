// Import libraries
import {
  KeyboardArrowDown,
  MoreVert,
  Close,
  DeleteOutline,
} from "@mui/icons-material";
import Select from "@mui/material/Select";
import type { SelectChangeEvent } from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Switch from "@mui/material/Switch";
import { ChangeEvent, MouseEvent, ReactElement, useState } from "react";
import { MenuItemContent } from "./MenuItemContent";
import { ITypeChart } from "../constants";
import { useTranslation } from "@/utils/translation";
export interface LineSettingsProps {
  cbRemove?: () => void;
  onChangeStepLine?: (state: boolean) => void;
  onChangeChartType?: (typeChart: ITypeChart) => void;
}

export default function LineSettings({
  cbRemove,
  onChangeStepLine,
  onChangeChartType,
}: LineSettingsProps): ReactElement {
  const { t } = useTranslation();
  const [selectedRowType, setSelectedRowType] = useState<ITypeChart>("line");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  //  const [decimal, setDecimal] = useState(2);
  const [isStepLine, setIsStepLine] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSwitchStepLine = (e: ChangeEvent<HTMLInputElement>) => {
    setIsStepLine(e.target.checked);
    onChangeStepLine?.(e.target.checked);
  };

  const handleChangeType = (e: SelectChangeEvent) => {
    setSelectedRowType(e.target.value as ITypeChart);
    onChangeChartType?.(e.target.value as ITypeChart);
  };

  return (
    <Box>
      <Tooltip title={t("settings")}>
        <IconButton role="SettingsBtn" onClick={handleClick}>
          <MoreVert />
        </IconButton>
      </Tooltip>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
          disablePadding: true,
        }}
      >
        <Box
          sx={(theme) => {
            return {
              padding: theme.spacing(0.5, 2, 0.5, 4),
              backgroundColor: theme.palette.background.paper,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: `1px solid ${theme.palette.grey[50]}`,
            };
          }}
        >
          <Typography
            sx={(theme) => {
              return {
                fontWeight: theme.typography.fontWeightBold,
              };
            }}
          >
            {t("settings")}
          </Typography>
          <IconButton role="settings" onClick={handleClose}>
            <Close fontSize="small" />
          </IconButton>
        </Box>
        <MenuItem
          disableRipple
          sx={(theme) => {
            return {
              width: "312px",
              padding: `${theme.spacing(1)} ${theme.spacing(4)}`,
              cursor: "default",
            };
          }}
        >
          <MenuItemContent>
            <>
              <Typography>{t("chartType")}</Typography>
              <Select
                labelId="time-frame"
                id="time-frame-select"
                IconComponent={KeyboardArrowDown}
                value={selectedRowType}
                label=""
                onChange={handleChangeType}
                sx={{
                  width: "136px",
                  height: "32px",
                }}
              >
                <MenuItem value={"line"}>{t("line")}</MenuItem>
                <MenuItem value={"bar"}>{t("bar")}</MenuItem>
              </Select>
            </>
          </MenuItemContent>
        </MenuItem>

        {selectedRowType === "line" && (
          <MenuItem
            disableRipple
            sx={(theme) => {
              return {
                padding: `${theme.spacing(1)} ${theme.spacing(4)}`,
                cursor: "default",
              };
            }}
          >
            <MenuItemContent>
              <>
                <Typography>{t("stepLine")}</Typography>
                <Switch
                  size="small"
                  checked={isStepLine}
                  onChange={handleSwitchStepLine}
                />
              </>
            </MenuItemContent>
          </MenuItem>
        )}

        <MenuItem
          disableRipple
          sx={(theme) => {
            return {
              padding: `${theme.spacing(1)} ${theme.spacing(4)}`,
              cursor: "default",
            };
          }}
        >
          <MenuItemContent>
            <>
              <Typography
                color="error"
                sx={(theme) => {
                  return {
                    fontWeight: theme.typography.fontWeightMedium,
                  };
                }}
              >
                {t("remove")}
              </Typography>
              <IconButton
                sx={{ marginRight: "-6px" }}
                role="remove"
                onClick={cbRemove}
              >
                <DeleteOutline color="error" fontSize="small" />
              </IconButton>
            </>
          </MenuItemContent>
        </MenuItem>
      </Menu>
    </Box>
  );
}
