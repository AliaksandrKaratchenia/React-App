import React from "react";
import { IOrderItem } from "../../../store/models";

interface IOrderDetailsProps {
  order: IOrderItem
}

const OrderDetails: React.FC<IOrderDetailsProps> = ({ order }) => {
    return (
        <div>
            <h1>Any title here</h1>
            <p>{order.customer_name}</p>
            <p>{order.address}</p>
            <p>{order.sales_manager}</p>
        </div>
    );
};

export default OrderDetails;
