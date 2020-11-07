import { IOrderState } from "../slices/ordersSlice";

export const ordersSelector = (state: { orders: IOrderState }) => state.orders;