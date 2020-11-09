import React from "react";
import { Box } from "@material-ui/core";
import { IOrderDetails } from "../../../../store/models/orderDetails";

interface IAdditionalInfoTabProps {
    visible: boolean;
    orderDetails: IOrderDetails;
}

const AdditionalInfoTab: React.FC<IAdditionalInfoTabProps> = ({ visible, orderDetails }) => {
    return (
        <Box hidden={!visible}>
            AdditionalInfoTab {orderDetails.info[0].store_name}
        </Box>
    );
}
export default AdditionalInfoTab;