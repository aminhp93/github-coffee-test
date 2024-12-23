import Box from "@mui/material/Box";
import AppConfig from "@/configs/app";

const AppTemplate = () => {
  return (
    <Box sx={{ width: "300px" }}>
      <pre>{JSON.stringify(AppConfig, null, 2)}</pre>
    </Box>
  );
};

export default AppTemplate;
