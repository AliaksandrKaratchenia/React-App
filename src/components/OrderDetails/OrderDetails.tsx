import React, { useState } from "react";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { AppBar } from "@material-ui/core";
import "./OrderDetails.scss";
import MainInfoTab from "./Tabs/MainInfo/MainInfoTab";
import AdditionalInfoTab from "./Tabs/AdditionalInfo/AdditionalInfoTab";
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
          <Tab label="Additional Info" />
        </Tabs>
      </AppBar>
        <MainInfoTab visible={value === 0} orderItem={orderItem} />
        <AdditionalInfoTab visible={value === 1} orderDetails={orderDetails} />
    </>
  );
};

export default OrderDetails;