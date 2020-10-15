import { combineReducers } from "redux";
import ordersReducer, { IOrderState, initialOrderState } from "./orderReducer";

export interface IState {
  orders: IOrderState;
}

export const initialState: IState = {
  orders: initialOrderState,
};

export default combineReducers({
  orders: ordersReducer,
});
