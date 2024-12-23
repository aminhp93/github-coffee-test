import { Table, GridColDef } from "@/components/table";
import { useTranslation } from "@/utils/translation";
import { fakeData, MEDIUM_COLUMNS, SMALL_COLUMNS } from "./Table.utils";
import { Theme, useMediaQuery } from "@/theme";
import { HeaderLayoutProvider } from "@/components/header-layout";
import Box from "@mui/material/Box";

const NoPaginationTableTemplate = () => {
  const smSize = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const { t } = useTranslation();
  const columns: GridColDef[] = smSize ? SMALL_COLUMNS(t) : MEDIUM_COLUMNS(t);

  return (
    <Box
      sx={(theme) => {
        return {
          backgroundColor: theme.palette.background.paper,
        };
      }}
    >
      <Table rows={fakeData()} columns={columns} pagination={false} />
    </Box>
  );
};

const WrapperNoPaginationTableTemplate = () => {
  return (
    <HeaderLayoutProvider>
      <NoPaginationTableTemplate />
    </HeaderLayoutProvider>
  );
};

export default WrapperNoPaginationTableTemplate;
