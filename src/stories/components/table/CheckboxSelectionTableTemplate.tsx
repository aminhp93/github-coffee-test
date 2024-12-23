import { Table, GridColDef } from "@/components/table";
import { useTranslation } from "@/utils/translation";
import { fakeData, MEDIUM_COLUMNS, SMALL_COLUMNS } from "./Table.utils";
import { Theme, useMediaQuery } from "@/theme";
import { HeaderLayoutProvider } from "@/components/header-layout";
import Box from "@mui/material/Box";

const CheckboxSelectionTableTemplate = () => {
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
      <Table checkboxSelection rows={fakeData()} columns={columns} />
    </Box>
  );
};

const WrapperCheckboxSelectionTableTemplate = () => {
  return (
    <HeaderLayoutProvider>
      <CheckboxSelectionTableTemplate />
    </HeaderLayoutProvider>
  );
};

export default WrapperCheckboxSelectionTableTemplate;
