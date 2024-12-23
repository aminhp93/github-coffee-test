import Box from "@mui/material/Box";
import * as xxx from "@/utils/load-remote";

const LoadRemoteTemplate = () => {
  return (
    <Box sx={{ width: "300px" }}>
      {Object.keys(xxx).map((key) => (
        <Box key={key}>{key}</Box>
      ))}
    </Box>
  );
};

export default LoadRemoteTemplate;
