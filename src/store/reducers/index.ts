import { combineReducers } from "redux";
import { initialOrderState, IOrderState } from "../slices/ordersSlice";
import ordersReducer from "../slices/ordersSlice";

export interface IState {
  orders: IOrderState;
}

export const initialState: IState = {
  orders: initialOrderState
};

export default combineReducers({
  orders: ordersReducer
});