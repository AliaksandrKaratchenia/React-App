import { IOrderItem } from "../models";

export enum OrdersActionTypes {
  LOAD_ORDERS = "orders/load",
  LOADING_ORDERS = "orders/loading",
  LOADED_ORDERS = "orders/loaded",
  LOADING_ORDERS_FAILED = "orders/loading_failed",
}

export function loadOrders(): ILoadOrdersAction {
  return {
    type: OrdersActionTypes.LOAD_ORDERS,
  };
}

export function loadingOrders(): ILoadingOrdersAction {
  return {
    type: OrdersActionTypes.LOADING_ORDERS,
  };
}

export function loadedOrders(orders: IOrderItem[]): ILoadedOrdersAction {
  return {
    type: OrdersActionTypes.LOADED_ORDERS,
    payload: {
      orders
    },
  };
}

export function loadingOrdersFailed(): ILoadingOrdersFailedAction {
  return {
    type: OrdersActionTypes.LOADING_ORDERS_FAILED,
  };
}

export interface ILoadOrdersAction {
  type: OrdersActionTypes.LOAD_ORDERS;
}

export interface ILoadingOrdersAction {
  type: OrdersActionTypes.LOADING_ORDERS;
}

export interface ILoadedOrdersAction {
  type: OrdersActionTypes.LOADED_ORDERS;
  payload: {
    orders: IOrderItem[];
  };
}

export interface ILoadingOrdersFailedAction {
  type: OrdersActionTypes.LOADING_ORDERS_FAILED;
}

export type OrdersAction =
  | ILoadOrdersAction
  | ILoadingOrdersAction
  | ILoadedOrdersAction
  | ILoadingOrdersFailedAction;
