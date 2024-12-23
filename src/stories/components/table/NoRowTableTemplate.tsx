import { Table, GridColDef } from "@/components/table";
import { useTranslation } from "@/utils/translation";
import { MEDIUM_COLUMNS, SMALL_COLUMNS } from "./Table.utils";
import { Theme, useMediaQuery } from "@/theme";
import { HeaderLayoutProvider } from "@/components/header-layout";
import Box from "@mui/material/Box";

const DefaultTableTemplate = () => {
  const smSize = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const { t } = useTranslation();
  const columns: GridColDef[] = smSize ? SMALL_COLUMNS(t) : MEDIUM_COLUMNS(t);

  return (
    <Box
      sx={(theme) => {
        return {
          backgroundColor: theme.palette.background.paper,
          height: 500,
        };
      }}
    >
      <Table rows={[]} columns={columns} />
    </Box>
  );
};

const WrapperDefaultTableTemplate = () => {
  return (
    <HeaderLayoutProvider>
      <DefaultTableTemplate />
    </HeaderLayoutProvider>
  );
};

export default WrapperDefaultTableTemplate;
