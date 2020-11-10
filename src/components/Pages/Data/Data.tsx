import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress, Typography } from '@material-ui/core';
import MUIDataTable, { MUIDataTableColumn, MUIDataTableOptions } from "mui-datatables";
import SwipeableTemporaryDrawer, { SwipeableDrawerCollapseDirection } from "../../SwipeableDrawer/SwipeableDrawer";
import "./Data.scss";
import { loadOrderDetails, loadOrders } from "../../../store/slices/ordersSlice";
import { ordersSelector } from "../../../store/selectors/ordersSelector";
import OrderDetails from "../../OrderDetails/OrderDetails";
import DescriptionIcon from '@material-ui/icons/Description';
import { ApiStatus } from "../../../store/models/apiStatus";
import { IOrderItem } from "../../../store/models/orderItem";

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
  const { orders, loadingOrdersStatus, errorMessage, selectedOrderDetails } = useSelector(ordersSelector);
  const dispatch = useDispatch();
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [orderItem, setOrderItem] = useState<IOrderItem>();
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
    tableBodyHeight: 'calc(100% - 125px)',
    onRowSelectionChange: (currentRowsSelected: ISelectedRow[]) => {
      const selectedOrderItem = orders[currentRowsSelected[0].dataIndex];
      setOrderItem(selectedOrderItem);
      dispatch(loadOrderDetails(selectedOrderItem.id));
      setDetailsOpen(true);
    }
  };

  const handleDetailsClose = () => setDetailsOpen(false); 

  useEffect(() => {
    dispatch(loadOrders());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="data-page">
      {loadingOrdersStatus === ApiStatus.LOADING && <CircularProgress thickness={2} size="70px" />}

      {loadingOrdersStatus === ApiStatus.FAILED && <Typography color="error">Failed to load orders with error {errorMessage}</Typography>}

      {loadingOrdersStatus === ApiStatus.LOADED && <MUIDataTable title={"Orders List"} data={orders} columns={columns} options={options} />}
      <SwipeableTemporaryDrawer
        collapseDirection={SwipeableDrawerCollapseDirection.RIGHT}
        title={"Order Details"}
        icon={<DescriptionIcon/>}
        open={detailsOpen}
        onClose={handleDetailsClose}>
        {(selectedOrderDetails && orderItem) && <OrderDetails orderItem={orderItem} orderDetails={selectedOrderDetails} />}
      </SwipeableTemporaryDrawer>
    </div>
  );
};
export default Data;
