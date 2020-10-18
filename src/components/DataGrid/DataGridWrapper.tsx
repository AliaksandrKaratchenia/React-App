import React, { useState } from "react";
import { DataGrid, ColDef, RowData } from '@material-ui/data-grid';
import ToolBar from "./ToolBar";

interface DataGridWrapperProps {
    columns: ColDef[];
    rows: RowData[];
}

const DataGridWrapper: React.FC<DataGridWrapperProps> = ({
    columns,
    rows,
}: DataGridWrapperProps) => {
    const [gridColumns, setColumns] = useState<ColDef[]>(columns);
    return (
        <>
            <ToolBar columns={gridColumns} setColumns={setColumns} />
            <DataGrid columns={gridColumns} rows={rows} />
        </>
    );
};

export default DataGridWrapper;