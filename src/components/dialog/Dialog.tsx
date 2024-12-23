// Import libraries
import { Close, Save } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import type { DialogProps as MuiDialogProps } from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import MuiDialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

// Import local files
import { FULLSCREEN, FULLWIDTH, MAX_WIDTH } from "./Dialog.constants";
import { useTranslation } from "@/utils/translation";
import { styled } from "@/theme";
import DialogFooter, { DialogFooterProps } from "./DialogFooter";
import { log } from "@/utils/logger";

type DefaultActions = {
  show?: boolean;
  onSave?: () => void;
  onCancel?: () => void;
};

type ActionButtons = React.ReactNode;

export enum DialogFooterType {
  SAVE = "SAVE",
  DELETE = "DELETE",
}

export interface DialogProps extends MuiDialogProps {
  /**
   * defaultActions prop that are going to be removed in the future
   * @deprecated This will be removed soon in favor of FooterProps
   */
  defaultActions?: DefaultActions;
  /**
   * actionButtons prop that are going to be removed in the future
   * @deprecated This will be removed soon in favor of FooterProps
   */
  actionButtons?: ActionButtons;
  FooterProps?: DialogFooterProps;
}

const Dialog = ({
  title,
  children,
  open,
  onClose,
  defaultActions,
  actionButtons,
  fullScreen = FULLSCREEN,
  maxWidth = MAX_WIDTH,
  fullWidth = FULLWIDTH,
  FooterProps,
  ...props
}: DialogProps) => {
  const { t } = useTranslation();

  if (defaultActions || actionButtons) {
    log(
      "defaultActions and actionButtons are deprecated and will be removed in the future. Use FooterProps instead."
    );
  }

  return (
    <StyledDialog
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      fullScreen={fullScreen}
      open={open}
      onClose={onClose}
      {...props}
    >
      <StyledDialogTitle>
        <Box className="title">{title ?? t("title")}</Box>
        <ButtonGroup>
          <IconButton onClick={() => onClose?.({}, "escapeKeyDown")}>
            <Close />
          </IconButton>
        </ButtonGroup>
      </StyledDialogTitle>

      <StyledDialogContent>
        <StyledBoxContentDialog>{children}</StyledBoxContentDialog>
      </StyledDialogContent>

      <DialogFooter {...FooterProps} />

      {/* /**
       * That is @deprecated components that will be removed in the future in favor of DialogFooter
       */}
      {(defaultActions?.show || actionButtons) && (
        <DialogActions>
          <StyledBoxActionDialog>
            {defaultActions?.show ? (
              <>
                <Button color="secondary" onClick={defaultActions.onCancel}>
                  {t("cancel")}
                </Button>
                <Button startIcon={<Save />} onClick={defaultActions.onSave}>
                  {t("save")}
                </Button>
              </>
            ) : (
              <>{actionButtons}</>
            )}
          </StyledBoxActionDialog>
        </DialogActions>
      )}
    </StyledDialog>
  );
};

export { Dialog };

const StyledDialog = styled(MuiDialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    borderRadius: theme.shape.borderRadius,
  },
  "& .MuiDialogContent-root": {
    padding: 0,
  },
}));

const StyledDialogContent = styled(DialogContent)(() => ({
  display: "flex",
  flexDirection: "column",
}));

const StyledBoxContentDialog = styled(Box)(() => ({
  overflow: "auto",
  height: "100%",
  flex: 1,
  display: "flex",
  flexDirection: "column",
}));

const StyledBoxActionDialog = styled(Box)(() => ({
  padding: "0",
  marginTop: "auto",
  display: "flex",
  justifyContent: "flex-end",
}));

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  position: "relative",
  padding: "12px 16px",
  display: "flex",
  alignItems: "center",

  "& .title": {
    fontSize: "16px",
    flex: 1,
    fontWeight: 600,
  },
  "& .MuiIconButton-root": {
    padding: theme.spacing(1),
  },
}));
