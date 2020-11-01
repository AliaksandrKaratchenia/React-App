import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { IOrderItem } from "../../../store/models";

interface IOrderDetailsProps {
  order: IOrderItem;
}

const OrderDetails: React.FC<IOrderDetailsProps> = ({ order }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography>{order.id}</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography>Order Date</Typography>
        <Typography>{order.order_date}</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography>Order Status</Typography>
        <Typography>{order.order_status}</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography>Required Date</Typography>
        <Typography>{order.required_date}</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography>Shipped Date</Typography>
        <Typography>{order.shipped_date}</Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography>Customer Name</Typography>
        <Typography>{order.customer_name}</Typography>
      </Grid>
      <Grid item xs={12} sm={8}>
        <Typography>Customer Address</Typography>
        <Typography>{order.address}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>Customer Email</Typography>
        <Typography>{order.email}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>Sales manager</Typography>
        <Typography>{order.sales_manager}</Typography>
      </Grid>
    </Grid>
  );
};

export default OrderDetails;