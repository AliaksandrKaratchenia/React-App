import { combineReducers } from "redux";
import ordersReducer, { IOrderState, initialOrderState } from "./orderReducer";
import swipeableDrawerReducer, { initialSwipeableDrawerState, ISwipeableDrawerState } from "./swipeableDrawerReducer";

export interface IState {
  orders: IOrderState;
  swipeableDrawer: ISwipeableDrawerState;
}

export const initialState: IState = {
  orders: initialOrderState,
  swipeableDrawer: initialSwipeableDrawerState
};

export default combineReducers({
  orders: ordersReducer,
  swipeableDrawer: swipeableDrawerReducer
});