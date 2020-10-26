import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IOrderItem, ApiStatus, SwipeableDrawerCollapseDirection } from "../../store/models";
import { IState } from "../../store/reducers";
import { CircularProgress, Typography } from '@material-ui/core';
import { ColDef, RowData, SelectionChangeParams } from '@material-ui/data-grid';
import DataGridWrapper from "../DataGrid/DataGridWrapper";
import { openSwipeableDrawer } from "../../store/actions/swipeableDrawerActions";
import { loadOrders } from "../../store/actions/orderActions";
import MUIDataTable, { MUIDataTableColumn, MUIDataTableColumnDef, MUIDataTableOptions } from "mui-datatables";

// const columns: ColDef[] = [
//   { field: 'id', hide: true, headerName: 'Order ids', type: 'number' },
//   { field: 'order_status', headerName: 'Order status', type: 'number' },
//   { field: 'order_date', headerName: 'Order date', type: 'date' },
//   { field: 'shipped_date', hide: true, headerName: 'Shipped date', type: 'date' },
//   { field: 'sales_manager', headerName: 'Sales manager', type: 'string' },
//   { field: 'customer_name', hide: true, headerName: 'Customer name', type: 'string' },
//   { field: 'email', hide: true, headerName: 'Customer Email', type: 'string' },
//   { field: 'address', hide: true, headerName: 'Customer Address', type: 'string' }
// ];

const columns: MUIDataTableColumn[] = [
  {
    name: 'id',
    label: 'Order ids'
  },
  {
    name: 'order_status',
    label: 'Order status'
  },
  {
    name: 'required_date',
    label: 'Required Date'
  },
  {
    name: 'order_date',
    label: 'Order date'
  },
  {
    name: 'shipped_date',
    label: 'Shipped date',
    options: {
      display: false
    }
  },
  {
    name: 'sales_manager',
    label: 'Sales manager'
  },
  {
    name: 'customer_name',
    label: 'Customer name',
    options: {
      display: false
    }
  },
  {
    name: 'email',
    label: 'Customer Email',
    options: {
      display: false
    }
  },
  {
    name: 'address',
    label: 'Customer Address',
    options: {
      display: false
    }
  }];

const options: MUIDataTableOptions = {
  fixedHeader: true,
  filter: true,
  filterType: 'dropdown',
  responsive: 'simple',
  download: false,
  resizableColumns: false,
  search: false,
  print: false,
  selectableRows: 'single',
  selectableRowsOnClick: true,
  selectableRowsHideCheckboxes: true,
  selectToolbarPlacement: 'none',
  tableBodyMaxHeight: '200px'
};


const Data: React.FC = () => {
  const orders = useSelector<IState, IOrderItem[]>(state => state.orders.orders);
  const loadingStatus = useSelector<IState, ApiStatus>(state => state.orders.loadingStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadOrders());
  }, []);

  // const handleSelectionChange = (param: SelectionChangeParams) => {
  //   const order = param.rows[0] as IOrderItem;
  //   if (order) {
  //     const jsxEl = (
  //       <div>
  //         <h1>Any title here</h1>
  //         <p>{order.customer_name}</p>
  //         <p>{order.address}</p>
  //         <p>{order.sales_manager}</p>
  //       </div>
  //     );
  //     dispatch(openSwipeableDrawer({
  //       collapse_direction: SwipeableDrawerCollapseDirection.RIGHT,
  //       content: jsxEl
  //     }));
  //   }
  // };

  return (
    <div>
      {loadingStatus === ApiStatus.LOADING && <CircularProgress />}

      {loadingStatus === ApiStatus.FAILED && <Typography color="error">Failed to load todos</Typography>}

      {loadingStatus === ApiStatus.LOADED && <MUIDataTable title={"Orders List"} data={orders} columns={columns} options={options} />}
    </div>
  );
};
export default Data;
