import { FileDownload } from "@mui/icons-material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import { MouseEvent, useState } from "react";

// ** Translation Imports
import { useTranslation } from "@/utils/translation";

export type ExportType = "csv" | "png";

export type Props = {
  onExport?: (type: ExportType) => void;
};

const ExportButton = ({ onExport }: Props) => {
  const { t } = useTranslation();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title={t("export")}>
        <IconButton
          role="ExportBtn"
          onClick={handleClick}
          sx={{ maxHeight: "40px" }}
        >
          <FileDownload />
        </IconButton>
      </Tooltip>

      <Menu
        role="ExportTypeMenu"
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            onExport?.("csv");
            handleClose();
          }}
        >
          <Box data-testid=".csv">{`.csv`}</Box>
        </MenuItem>
        <MenuItem
          onClick={() => {
            onExport?.("png");
            handleClose();
          }}
        >
          <Box data-testid=".png">{`.png`}</Box>
        </MenuItem>
      </Menu>
    </>
  );
};

export default ExportButton;
