import { ISwipeableDrawerModel } from "../models";

export enum SwipeableDrawerActionTypes {
  OPEN_DRAWER = "swipeableDrawer/open",
  CLOSE_DRAWER = "swipeableDrawer/close"
}

export function openSwipeableDrawer(drawer: ISwipeableDrawerModel): IOpenSwipeableDrawerAction {
  return {
    type: SwipeableDrawerActionTypes.OPEN_DRAWER,
    payload: {
      drawer
    },
  };
}


export function closeSwipeableDrawer(): ICloseSwipeableDrawerAction {
  return {
    type: SwipeableDrawerActionTypes.CLOSE_DRAWER
  };
}

export interface IOpenSwipeableDrawerAction {
  type: SwipeableDrawerActionTypes.OPEN_DRAWER;
  payload: {
    drawer: ISwipeableDrawerModel
  };
}

export interface ICloseSwipeableDrawerAction {
  type: SwipeableDrawerActionTypes.CLOSE_DRAWER;
}

export type SwipeableDrawerAction =
  | IOpenSwipeableDrawerAction
  | ICloseSwipeableDrawerAction;