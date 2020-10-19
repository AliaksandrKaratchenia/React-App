import produce from "immer";
import { ISwipeableDrawerModel } from "../models";
import { SwipeableDrawerAction, SwipeableDrawerActionTypes } from "../actions/swipeableDrawerActions";

export const initialSwipeableDrawerState: ISwipeableDrawerState = {
  openDrawer: undefined
};

export default function swipeableDrawerReducer(
  state: ISwipeableDrawerState = initialSwipeableDrawerState,
  action: SwipeableDrawerAction
): ISwipeableDrawerState {
  return produce(state, (draft) => {
    switch (action.type) {
      case SwipeableDrawerActionTypes.OPEN_DRAWER:
        draft.openDrawer = action.payload.drawer;
        break;

      case SwipeableDrawerActionTypes.CLOSE_DRAWER:
        draft.openDrawer = undefined;
        break;
    }
  });
}

export interface ISwipeableDrawerState {
  openDrawer?: ISwipeableDrawerModel;
}