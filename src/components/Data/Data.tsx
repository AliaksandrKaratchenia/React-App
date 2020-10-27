import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IOrderItem, ApiStatus } from "../../store/models";
import { IState } from "../../store/reducers";
import { CircularProgress, Typography } from '@material-ui/core';
import { loadOrders } from "../../store/actions/orderActions";
import MUIDataTable, { MUIDataTableColumn, MUIDataTableOptions } from "mui-datatables";
import SwipeableTemporaryDrawer, { SwipeableDrawerCollapseDirection } from "../SwipeableDrawer/SwipeableDrawer";
import OrderDetails from "./OrderDetails/OrderDetails";

interface ISelectedRow {
  index: number,
  dataIndex: number
}

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



const Data: React.FC = () => {
  const orders = useSelector<IState, IOrderItem[]>(state => state.orders.orders);
  const loadingStatus = useSelector<IState, ApiStatus>(state => state.orders.loadingStatus);
  const dispatch = useDispatch();
  const [selection, setSelection] = useState<IOrderItem>();
  const [detailsOpen, setDetailsOpen] = useState(false);
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
    tableBodyMaxHeight: '70vh',
    onRowSelectionChange: (currentRowsSelected: ISelectedRow[]) => {
      const selectedOrder = orders[currentRowsSelected[0].dataIndex];
      setSelection(selectedOrder);
      setDetailsOpen(true);
    }
  };

  const handleDetailsClose = () => {
    setDetailsOpen(false);
  }

  useEffect(() => {
    dispatch(loadOrders());
  }, []);

  return (
    <div>
      {loadingStatus === ApiStatus.LOADING && <CircularProgress />}

      {loadingStatus === ApiStatus.FAILED && <Typography color="error">Failed to load orders</Typography>}

      {loadingStatus === ApiStatus.LOADED && <MUIDataTable title={"Orders List"} data={orders} columns={columns} options={options} />}
      <SwipeableTemporaryDrawer collapseDirection={SwipeableDrawerCollapseDirection.RIGHT} open={detailsOpen} onClose={handleDetailsClose}>
        {selection && <OrderDetails order={selection} />}
      </SwipeableTemporaryDrawer>
    </div>
  );
};
export default Data;
