import { Action, Reducer } from "redux";

export interface InitialState {
  data: string;
}

export const initialState: InitialState = {
  data: "value",
};

export interface DispatchAction extends Action {
  payload: Partial<InitialState>;
}

export const rootReducer: Reducer<InitialState, DispatchAction> = () => {
  return initialState;
};
