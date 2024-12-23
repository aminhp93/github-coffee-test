import Box from "@mui/material/Box";
import * as xxx from "@/utils/process-view";

const ProcessViewTemplate = () => {
  return (
    <Box sx={{ width: "300px" }}>
      {Object.keys(xxx).map((key) => (
        <Box key={key}>{key}</Box>
      ))}
    </Box>
  );
};

export default ProcessViewTemplate;
