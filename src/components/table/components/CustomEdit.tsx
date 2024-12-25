import { useState } from "react";
import { GridColDef, GridRowsProp, GridValidRowModel } from "@mui/x-data-grid-premium";
import { Table } from "../Table";

interface RowData extends GridValidRowModel {
  id: number;
  name: string;
  age: number;
  role: string;
}

const initialRows: GridRowsProp<RowData> = [
  { id: 1, name: "Alice Johnson", age: 28, role: "Development" },
  { id: 2, name: "Bob Smith", age: 35, role: "Finance" },
  { id: 3, name: "Charlie Brown", age: 42, role: "Market" },
  { id: 4, name: "Diana Prince", age: 30, role: "Finance" },
  { id: 5, name: "Ethan Hunt", age: 26, role: "Development" },
];

export default function EditableDataGrid() {
  const [rows, setRows] = useState<GridRowsProp<RowData>>(initialRows);

  const handleProcessRowUpdate = (newRow: RowData): RowData => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === newRow.id ? { ...row, ...newRow } : row
      )
    );
    return newRow;
  };

  const columns: GridColDef<RowData>[] = [
    { field: "name", headerName: "Name", width: 180, editable: false },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 80,
      editable: false,
    },
    {
      field: "role",
      headerName: "Department",
      width: 220,
      editable: true,
      type: "singleSelect",
      valueOptions: ["Market", "Finance", "Development"],
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <Table
        rows={rows}
        columns={columns}
        pageSizeOptions={[5, 10]}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 5, page: 0 },
          },
        }}
        processRowUpdate={handleProcessRowUpdate}
      />
    </div>
  );
}
