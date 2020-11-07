import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApiStatus, IOrderItem } from "../models";

export interface IOrderState {
    loadingStatus: ApiStatus;
    orders: IOrderItem[];
};

export const initialOrderState: IOrderState = {
  loadingStatus: ApiStatus.LOADING,
  orders: [],
};

const ordersSlice = createSlice({
    name: 'orders',
    initialState: initialOrderState,
    reducers: {
        loadOrders: state => {
            state.loadingStatus = ApiStatus.LOADING;
        },
        loadingOrders: state => {
            state.loadingStatus = ApiStatus.LOADING;
        },
        loadingOrdersFailed: state => {
            state.loadingStatus = ApiStatus.FAILED;
        },
        loadedOrders: (state, { payload }: PayloadAction<IOrderItem[]>) => {
            state.loadingStatus = ApiStatus.LOADED;
            state.orders = payload;
        }
    }
})

export const { loadOrders, loadingOrders, loadingOrdersFailed, loadedOrders } = ordersSlice.actions;

export default ordersSlice.reducer;