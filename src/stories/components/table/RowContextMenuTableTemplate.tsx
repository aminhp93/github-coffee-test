import { Table, GridColDef } from "@/components/table";
import { useTranslation } from "@/utils/translation";
import { fakeData, MEDIUM_COLUMNS, SMALL_COLUMNS } from "./Table.utils";
import { Theme, useMediaQuery } from "@/theme";
import { HeaderLayoutProvider } from "@/components/header-layout";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { log } from "@/utils/logger";
import { Box } from "@mui/material";

const RowContextMenuTableTemplate = () => {
  const smSize = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const { t } = useTranslation();
  const columns: GridColDef[] = smSize ? SMALL_COLUMNS(t) : MEDIUM_COLUMNS(t);
  const rowContextMenu = [
    {
      label: "Edit",
      icon: <EditIcon />,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onClick: (rowData: any, rowIndex: string | null) => {
        log("Edit", rowData, rowIndex);
      },
    },
    {
      label: "Delete",
      icon: <DeleteIcon />,
      onClick: () => {},
    },
  ];

  return (
    <Box
      sx={(theme) => {
        return {
          backgroundColor: theme.palette.background.paper,
        };
      }}
    >
      <Table
        rows={fakeData()}
        columns={columns}
        rowContextMenu={rowContextMenu}
      />
    </Box>
  );
};

const WrapperRowContextMenuTableTemplate = () => {
  return (
    <HeaderLayoutProvider>
      <RowContextMenuTableTemplate />
    </HeaderLayoutProvider>
  );
};

export default WrapperRowContextMenuTableTemplate;
