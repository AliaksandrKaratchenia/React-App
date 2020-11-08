import React from "react";
import { IOrderItem } from "../../../../store/models";
import { Box } from "@material-ui/core";
import Divider from '@material-ui/core/Divider';

interface IAdditionalInfoTabProps {
    visible: boolean;
    additionalOrderInfo: IOrderItem;
}

const AdditionalInfoTab: React.FC<IAdditionalInfoTabProps> = ({ visible, additionalOrderInfo }) => {
    return (
        <Box hidden={!visible}>
            AdditionalInfoTab {additionalOrderInfo.customer_name}
        </Box>
    );
}
export default AdditionalInfoTab;