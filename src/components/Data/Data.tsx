import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IOrderItem, ApiStatus, SwipeableDrawerCollapseDirection } from "../../store/models";
import { IState } from "../../store/reducers";
import { CircularProgress, Typography } from '@material-ui/core';
import { ColDef, RowData, SelectionChangeParams } from '@material-ui/data-grid';
import DataGridWrapper from "../DataGrid/DataGridWrapper";
import { openSwipeableDrawer } from "../../store/actions/swipeableDrawerActions";

const columns: ColDef[] = [
  { field: 'id', hide: true, headerName: 'Order ids', type: 'number' },
  { field: 'order_status', headerName: 'Order status', type: 'number' },
  { field: 'order_date', headerName: 'Order date', type: 'date' },
  { field: 'shipped_date', hide: true, headerName: 'Shipped date', type: 'date' },
  { field: 'sales_manager', headerName: 'Sales manager', type: 'string' },
  { field: 'customer_name', hide: true, headerName: 'Customer name', type: 'string' },
  { field: 'email', hide: true, headerName: 'Customer Email', type: 'string' },
  { field: 'address', hide: true, headerName: 'Customer Address', type: 'string' }
];

const Data: React.FC = () => {
  const orders = useSelector<IState, IOrderItem[]>(state => state.orders.orders);
  const loadingStatus = useSelector<IState, ApiStatus>(state => state.orders.loadingStatus);
  const [rows, setRows] = useState<RowData[]>([]);

  useEffect(() => {
    const newRows = orders as RowData[];
    setRows(newRows);
  }, [orders]);

  const dispatch = useDispatch();

  const handleSelectionChange = (param: SelectionChangeParams) => {
    const order = param.rows[0] as IOrderItem;
    if (order) {
      const jsxEl = (
        <div>
          <h1>Any title here</h1>
          <p>{order.customer_name}</p>
          <p>{order.address}</p>
          <p>{order.sales_manager}</p>
        </div>
      );
      dispatch(openSwipeableDrawer({
        collapse_direction: SwipeableDrawerCollapseDirection.RIGHT,
        content: jsxEl
      }));
    }
  };

  return (
    <div style={{ height: '90%', width: '100%' }}>
      {loadingStatus === ApiStatus.LOADING && <CircularProgress />}

      {loadingStatus === ApiStatus.FAILED && <Typography color="error">Failed to load todos</Typography>}

      {loadingStatus === ApiStatus.LOADED && <DataGridWrapper columns={columns} rows={rows} onSelectionChange={handleSelectionChange} />}
    </div>
  );
};
export default Data;
