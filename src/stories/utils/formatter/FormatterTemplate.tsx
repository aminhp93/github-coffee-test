import Box from "@mui/material/Box";
import * as formatter from "@/utils/formatter";

const FormatterTemplate = () => {
  return (
    <Box sx={{ width: "300px" }}>
      {Object.keys(formatter).map((key) => (
        <Box key={key}>{key}</Box>
      ))}
    </Box>
  );
};

export default FormatterTemplate;
