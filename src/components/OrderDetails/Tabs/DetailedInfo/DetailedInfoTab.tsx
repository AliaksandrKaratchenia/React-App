import React from "react";
import { Box, Divider, Grid } from "@material-ui/core";
import { IOrderDetails, IOrderedProduct } from "../../../../store/models/orderDetails";
import classNames from "classnames";
import "../CommonTabStyles.scss";
import { IOrderItem, OrderStatus } from "../../../../store/models/orderItem";
import Timeline from "../../../Timeline/Timeline";
import { TimelineDefinition, TimelineVariant } from "../../../Timeline/timelineDefinition";
import DoneIcon from '@material-ui/icons/Done';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import SendIcon from '@material-ui/icons/Send';

interface IDetailedInfoTabProps {
    visible: boolean;
    orderDetails: IOrderDetails;
    orderItem: IOrderItem;
}

const getTimelines = (orderItem: IOrderItem) => {
    const { order_status, order_date, required_date, shipped_date } = orderItem;
    const timelines: TimelineDefinition[] = [];
    if (order_status >= 1) {
        const el: TimelineDefinition = {
            lineDotIcon: <WatchLaterIcon />,
            content: <div>Order date: {order_date}</div>,
            labelComponent: <div><span>{OrderStatus[1]}</span> <DoneIcon fontSize="small" htmlColor="green" /></div>
        };
        timelines.push(el);
    }
    if (order_status >= 2) {
        const el: TimelineDefinition = {
            lineDotIcon: <AutorenewIcon />,
            content: <div>Required date: {required_date}</div>,
            labelComponent: <div><span>{OrderStatus[2]}</span> <DoneIcon fontSize="small" htmlColor="green" /></div>
        };
        timelines.push(el);
    }
    if (order_status === 3) {
        const el: TimelineDefinition = {
            lineDotIcon: <SendIcon />,
            content: <div>Somthing wend wrong</div>,
            labelComponent: <div><span>{OrderStatus[3]}</span> <HighlightOffIcon fontSize="small" htmlColor="red" /></div>
        };
        timelines.push(el);
    }
    if (order_status === 4) {
        const el: TimelineDefinition = {
            lineDotIcon: <SendIcon />,
            content: <div>Shipped date: {shipped_date}</div>,
            labelComponent: <div><span>{OrderStatus[4]}</span> <DoneIcon fontSize="small" htmlColor="green" /></div>
        };
        timelines.push(el);
    }

    return timelines;
}

const DetailedInfoTab: React.FC<IDetailedInfoTabProps> = ({ visible, orderItem, orderDetails }) => {
    const noInfo = String.fromCharCode(8212);
    const timelines = getTimelines(orderItem);
    const { store_name, email, state, city, street, ordered_products } = orderDetails.info[0];
    return (
        <Box className={classNames({
            "box-container": true,
            "hidden": !visible
          })}>
            <Box className="box-section first">
                <Timeline timelines={timelines} variant={TimelineVariant.Main} />
            </Box>
            <Box className="box-section">
                <Grid container>
                    <Grid className="section-title" item xs={12}>Store Info</Grid>
                    <Grid item sm={5} xs={12}>
                        <div className="title">Store Name:</div>
                        <div className="field-content">{store_name || noInfo}</div>
                    </Grid>
                    <Grid item sm={7} xs={12}>
                        <div className="title">Store Email:</div>
                        <div className="field-content">{email || noInfo}</div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className="title">Store Address:</div>
                        <div className="field-content">{`${state} ${city} ${street}` || noInfo}</div>
                    </Grid>
                </Grid>
            </Box>
            <Box className="box-section last">
                <Grid container>
                    <Grid className="section-title" item xs={12}>Products Info</Grid>
                    {ordered_products.map((el: IOrderedProduct, i) => {
                        const { quantity, list_price, products } = el;
                        const { product_name, model_year, categories } = products[0];
                        const { category_name, brands } = categories[0];
                        const { brand_name } = brands[0];
                        return (
                            <Grid item xs={12} container key={i}>
                                <Grid item xs={12}>
                                    <div className="title">Product Name:</div>
                                    <div className="field-content">{product_name || noInfo}</div>
                                </Grid>
                                <Grid item sm={4} xs={6}>
                                    <div className="title">Price:</div>
                                    <div className="field-content">{list_price || noInfo}</div>
                                </Grid>
                                <Grid item sm={4} xs={6}>
                                    <div className="title">Quantity:</div>
                                    <div className="field-content">{quantity || noInfo}</div>
                                </Grid>
                                <Grid item sm={4} xs={6}>
                                    <div className="title">Model Year:</div>
                                    <div className="field-content">{model_year || noInfo}</div>
                                </Grid>
                                <Grid item sm={4} xs={6}>
                                    <div className="title">Category:</div>
                                    <div className="field-content">{category_name || noInfo}</div>
                                </Grid>
                                <Grid item sm={4} xs={6}>
                                    <div className="title">Brand:</div>
                                    <div className="field-content">{brand_name || noInfo}</div>
                                </Grid>
                                <Grid item xs={12}>
                                    <Divider />
                                </Grid>
                            </Grid>
                        )
                    }
                    )}
                </Grid>
            </Box>
        </Box>
    );
}
export default DetailedInfoTab;