import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IOrderItem, ApiStatus } from "../../store/models";
import { loadOrders } from "../../store/actions/orderActions";
import { IState } from "../../store/reducers";
import { CircularProgress, Typography } from '@material-ui/core';
import { DataGrid, ColDef, RowData } from '@material-ui/data-grid';

const columns: ColDef[] = [
  { field: 'id', hide: true },
  { field: 'order_status', headerName: 'Order status', type: 'number', width: 115 },
  { field: 'order_date', headerName: 'Order date', type: 'date', width: 110 },
  { field: 'shipped_date', headerName: 'Shipped date', type: 'date', width: 120 },
  { field: 'sales_manager', headerName: 'Sales manager', type: 'string', width: 150 },
  { field: 'customer_name', headerName: 'Customer name', type: 'string', width: 150 },
  { field: 'email', headerName: 'Email', type: 'string', width: 150 },
  { field: 'address', headerName: 'Address', type: 'string', width: 250 }
];
const Data: React.FC = () => {
  const orders = useSelector<IState, IOrderItem[]>(state => state.orders.orders);
  const loadingStatus = useSelector<IState, ApiStatus>(state => state.orders.loadingStatus);
  const dispatch = useDispatch();
  const [rows, setRows] = useState<RowData[]>([]);
  
  useEffect(() => {
    dispatch(loadOrders());
  }, []);

  useEffect(() => {
    const newRows = orders as RowData[];
    setRows(newRows);
  }, [orders]);

  return (
    <div style={{ height: 250, width: '100%' }}>
      {loadingStatus === ApiStatus.LOADING && <CircularProgress />}

      {loadingStatus === ApiStatus.FAILED && <Typography color="error">Failed to load todos</Typography>}

      {loadingStatus === ApiStatus.LOADED && <DataGrid columns={columns} rows={rows} />}
    </div>
  );
};
export default Data;
