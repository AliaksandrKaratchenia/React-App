import React, { useState } from "react";
import { DataGrid, ColDef, RowData, SelectionChangeParams } from '@material-ui/data-grid';
import ToolBar from "./ToolBar";

interface DataGridWrapperProps {
    columns: ColDef[];
    rows: RowData[];
    onSelectionChange?: (param: SelectionChangeParams) => void;
}

const DataGridWrapper: React.FC<DataGridWrapperProps> = ({
    columns,
    rows,
    onSelectionChange
}: DataGridWrapperProps) => {
    const [gridColumns, setColumns] = useState<ColDef[]>(columns);

    return (
        <>
            <ToolBar columns={gridColumns} setColumns={setColumns} />
            <DataGrid columns={gridColumns} rows={rows} onSelectionChange={onSelectionChange} />
        </>
    );
};

export default DataGridWrapper;