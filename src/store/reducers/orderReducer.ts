import produce from "immer";
import { ApiStatus, IOrderItem } from "../models";
import { OrdersAction, OrdersActionTypes } from "../actions/orderActions";

export const initialOrderState: IOrderState = {
  loadingStatus: ApiStatus.LOADING,
  addingStatus: ApiStatus.LOADED,
  orders: [],
};

export default function ordersReducer(
  state: IOrderState = initialOrderState,
  action: OrdersAction
): IOrderState {
  return produce(state, (draft) => {
    switch (action.type) {
      case OrdersActionTypes.LOAD_ORDERS:
      case OrdersActionTypes.LOADING_ORDERS:
        draft.loadingStatus = ApiStatus.LOADING;
        break;

      case OrdersActionTypes.LOADING_ORDERS_FAILED:
        draft.loadingStatus = ApiStatus.FAILED;
        break;

      case OrdersActionTypes.LOADED_ORDERS:
        draft.loadingStatus = ApiStatus.LOADED;
        draft.orders = action.payload.orders;
        break;
    }
  });
}

export interface IOrderState {
  loadingStatus: ApiStatus;
  addingStatus: ApiStatus;
  orders: IOrderItem[];
}