import MUIDialogCombine from "@/components/mui-dialog-combine";
import { useState } from "react";

const DialogCombineTemplate = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <button onClick={() => setOpen(true)}>Open Dialog</button>
      <MUIDialogCombine open={open} onClose={handleClose} />
    </div>
  );
};

export default DialogCombineTemplate;
