import "react-resizable/css/styles.css";

import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Paper,
  PaperProps,
} from "@mui/material";
import { MouseEvent, SyntheticEvent, useState } from "react";
import Draggable from "react-draggable";
import { Resizable } from "react-resizable";

type Props = {
  open: boolean;
  onClose?: () => void;
};

const MIN_WIDTH = 400;
const MIN_HEIGHT = 150;

const PaperComponent = (props: PaperProps) => {
  return (
    <Box
      sx={{
        "& .MuiPaper-root": {
          minWidth: `${MIN_WIDTH}px`,
          maxWidth: "unset",
          minHeight: `${MIN_HEIGHT}px`,
        },
      }}
    >
      <Draggable
        handle="#draggable-dialog-title"
        cancel={".react-resizable-handle"}
      >
        <Paper {...props} />
      </Draggable>
    </Box>
  );
};

const MUIDialogCombine = (props: Props) => {
  const { open, onClose } = props;
  const [width, setWidth] = useState(MIN_WIDTH);
  const [height, setHeight] = useState(MIN_HEIGHT);

  const handleResize = (event: SyntheticEvent) => {
    const newHeight = height + (event as MouseEvent).movementY;
    const newWidth = width + (event as MouseEvent).movementX;

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    setHeight(newHeight);
    setWidth(newWidth);
  };

  return (
    <Dialog
      open={open}
      PaperComponent={PaperComponent}
      hideBackdrop
      onClose={onClose}
      aria-labelledby="draggable-dialog-title"
    >
      <Resizable
        width={width}
        height={height}
        // minConstraints={[300, 500]}
        maxConstraints={[Infinity, Infinity]}
        onResize={handleResize}
      >
        <>
          <DialogTitle
            style={{ cursor: "move" }}
            id="draggable-dialog-title"
            fontSize={14}
          >
            title drag me!
          </DialogTitle>
          <DialogContent sx={{ width, height }}>
            resize in the right corner
          </DialogContent>
        </>
      </Resizable>
    </Dialog>
  );
};

export default MUIDialogCombine;
