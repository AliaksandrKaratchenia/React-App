import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IOrderItem, ApiStatus } from "../../store/models";
import { IState } from "../../store/reducers";
import { CircularProgress, Typography } from '@material-ui/core';
import { ColDef, RowData } from '@material-ui/data-grid';
import DataGridWrapper from "../DataGrid/DataGridWrapper";

const columns: ColDef[] = [
  { field: 'id', hide: true, headerName: 'Order ids', type: 'number' },
  { field: 'order_status', headerName: 'Order status', type: 'number', width: 115 },
  { field: 'order_date', headerName: 'Order date', type: 'date', width: 110 },
  { field: 'shipped_date', hide: true, headerName: 'Shipped date', type: 'date', width: 120 },
  { field: 'sales_manager', headerName: 'Sales manager', type: 'string', width: 150 },
  { field: 'customer_name', hide: true, headerName: 'Customer name', type: 'string', width: 150 },
  { field: 'email', hide: true, headerName: 'Customer Email', type: 'string', width: 150 },
  { field: 'address', hide: true, headerName: 'Customer Address', type: 'string', width: 250 }
];

const Data: React.FC = () => {
  const orders = useSelector<IState, IOrderItem[]>(state => state.orders.orders);
  const loadingStatus = useSelector<IState, ApiStatus>(state => state.orders.loadingStatus);
  const [rows, setRows] = useState<RowData[]>([]); 

  useEffect(() => {
    const newRows = orders as RowData[];
    setRows(newRows);
  }, [orders]);

  return (
    <div style={{ height: '90%', width: '100%' }}>
      {loadingStatus === ApiStatus.LOADING && <CircularProgress />}

      {loadingStatus === ApiStatus.FAILED && <Typography color="error">Failed to load todos</Typography>}

      {loadingStatus === ApiStatus.LOADED && <DataGridWrapper columns={columns} rows={rows} />}
    </div>
  );
};
export default Data;
