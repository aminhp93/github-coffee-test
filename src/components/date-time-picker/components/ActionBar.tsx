import { useTranslation } from "@/utils/translation";
import { LIST_START_TIME_FRAME } from "../constants";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";

type ActionBarProps = {
  setTimeOption: (value: string) => void;
};
const ActionBar = ({ setTimeOption }: ActionBarProps) => {
  const { t } = useTranslation();
  return (
    <Box sx={{ overflow: "auto", height: "384px" }}>
      {LIST_START_TIME_FRAME(t).map((item, index) => (
        <ListItem disablePadding key={index}>
          <ListItemButton onClick={() => setTimeOption(item.value)}>
            <ListItemText>{item.label}</ListItemText>
          </ListItemButton>
        </ListItem>
      ))}
    </Box>
  );
};

export { ActionBar };
