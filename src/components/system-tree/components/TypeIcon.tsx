// Import libraries
import {
  FilePresent,
  Folder,
  FolderOpen,
  Language,
  Lock,
  Storage,
} from "@mui/icons-material";

// Import local files
import { PRIVATE_FOLDER } from "../constants";

type Props = {
  type?: string | null;
  isOpen: boolean;
  droppable?: boolean;
};

const ICON_MAPPING: { [key: string]: React.ReactNode } = {
  network: <Language />,
  controller: <Storage />,
  [PRIVATE_FOLDER]: <Lock />,
};

const TypeIcon = ({ type, isOpen, droppable }: Props) => {
  const iconSize = 16;

  if (!type)
    return (
      <FilePresent
        sx={{ color: "inherit", width: iconSize + 2, height: iconSize + 2 }}
      />
    );

  if (ICON_MAPPING[type]) {
    return ICON_MAPPING[type] as React.ReactElement;
  }

  return isOpen && droppable ? (
    <FolderOpen sx={{ color: "inherit" }} />
  ) : (
    <Folder sx={{ color: "inherit" }} />
  );
};

export default TypeIcon;
