import React from "react";
import { Box, Grid, Divider } from "@material-ui/core";
import "./MainInfoTab.scss";
import classNames from "classnames";
import { IOrderItem, OrderStatus } from "../../../../store/models/orderItem";

interface IMainInfoTabProps {
    visible: boolean;
    orderItem: IOrderItem;
}

const MainInfoTab: React.FC<IMainInfoTabProps> = ({ visible, orderItem }) => {
    const noInfo = String.fromCharCode(8212);
    const { id,
        order_status,
        order_date,
        required_date,
        shipped_date,
        sales_manager,
        customer_name,
        email,
        address } = orderItem;
    return (
        <Box className={classNames({
            "box-container": true,
            "hidden": !visible
          })}>
            <Box className="box-section first">
                <Grid container>
                    <Grid className="section-title" item xs={12}>Order Info</Grid>
                    <Grid item xs={4}>
                        <div className="title">Order Id:</div>
                        <div className="field-content">{id || noInfo}</div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className="title">Order Status:</div>
                        <div className="field-content">{`${order_status} (${OrderStatus[order_status]})`}</div>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider />
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <div className="title">Order Date:</div>
                        <div className="field-content">{order_date || noInfo}</div>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <div className="title">Required Date:</div>
                        <div className="field-content">{required_date || noInfo}</div>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <div className="title">Shipped Date:</div>
                        <div className="field-content">{shipped_date || noInfo}</div>
                    </Grid>
                </Grid>
            </Box>
            <Box className="box-section">
                <Grid container>
                    <Grid className="section-title" item xs={12}>Customer Info</Grid>
                    <Grid item sm={5} xs={12}>
                        <div className="title">Customer Name:</div>
                        <div className="field-content">{customer_name || noInfo}</div>
                    </Grid>
                    <Grid item sm={7} xs={12}>
                        <div className="title">Customer Email:</div>
                        <div className="field-content">{email || noInfo}</div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className="title">Customer Address:</div>
                        <div className="field-content">{address || noInfo}</div>
                    </Grid>
                </Grid>
            </Box>
            <Box className="box-section last">
                <Grid container>
                    <Grid className="section-title" item xs={12}>Staffs Info</Grid>
                    <Grid item xs={12}>
                        <div className="title">Sales Manager:</div>
                        <div className="field-content">{sales_manager || noInfo}</div>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
export default MainInfoTab;