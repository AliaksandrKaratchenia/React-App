import React, { useState } from "react";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { AppBar } from "@material-ui/core";
import "./OrderDetails.scss";
import MainInfoTab from "./Tabs/MainInfo/MainInfoTab";
import DetailedInfoTab from "./Tabs/DetailedInfo/DetailedInfoTab";
import { IOrderDetails } from "../../store/models/orderDetails";
import { IOrderItem } from "../../store/models/orderItem";

interface IOrderDetailsProps {
  orderItem: IOrderItem;
  orderDetails: IOrderDetails;
}

const OrderDetails: React.FC<IOrderDetailsProps> = ({ orderItem, orderDetails }) => {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar position="sticky" color="inherit" className="tabs-header">
        <Tabs
          value={value}
          onChange={handleChange}
          selectionFollowsFocus={false}
        >
          <Tab label="Main Info" />
          <Tab label="Detailed Info" />
        </Tabs>
      </AppBar>
        <MainInfoTab visible={value === 0} orderItem={orderItem} />
        <DetailedInfoTab visible={value === 1} orderItem={orderItem} orderDetails={orderDetails} />
    </>
  );
};

export default OrderDetails;