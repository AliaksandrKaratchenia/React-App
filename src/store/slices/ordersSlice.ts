import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApiStatus } from "../models/apiStatus";
import { IOrderDetails } from "../models/orderDetails";
import { IOrderItem } from "../models/orderItem";

export interface IOrderState {
    orders: IOrderItem[];
    loadingOrdersStatus?: ApiStatus;
    loadingOrderDetailsStatus?: ApiStatus;
    errorMessage?: string;
    selectedOrderDetails?: IOrderDetails;
};

export const initialOrderState: IOrderState = {
    orders: []
};

const ordersSlice = createSlice({
    name: 'orders',
    initialState: initialOrderState,
    reducers: {
        loadOrders: state => {
            state.loadingOrdersStatus = ApiStatus.LOADING;
        },
        loadingOrders: state => {
            state.loadingOrdersStatus = ApiStatus.LOADING;
        },
        loadingOrdersFailed: (state, { payload }: PayloadAction<string>) => {
            state.loadingOrdersStatus = ApiStatus.FAILED;
            state.errorMessage = payload;
        },
        loadedOrders: (state, { payload }: PayloadAction<IOrderItem[]>) => {
            state.loadingOrdersStatus = ApiStatus.LOADED;
            state.orders = payload;
        },
        loadOrderDetails: (state, { payload }: PayloadAction<number>) => {
            state.loadingOrderDetailsStatus = ApiStatus.LOADING;
        },
        loadingOrderDetails: state => {
            state.loadingOrderDetailsStatus = ApiStatus.LOADING;
        },
        loadingOrderDetailsFailed: (state, { payload }: PayloadAction<string>) => {
            state.loadingOrderDetailsStatus = ApiStatus.FAILED;
            state.errorMessage = payload;
        },
        loadedOrderDetails: (state, { payload }: PayloadAction<IOrderDetails>) => {
            state.loadingOrderDetailsStatus = ApiStatus.LOADED;
            state.selectedOrderDetails = payload;
        }
    }
})

export const {
    loadOrders,
    loadingOrders,
    loadingOrdersFailed,
    loadedOrders,
    loadOrderDetails,
    loadingOrderDetails,
    loadingOrderDetailsFailed,
    loadedOrderDetails
} = ordersSlice.actions;

export default ordersSlice.reducer;