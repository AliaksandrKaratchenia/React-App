import {Action, Reducer} from "redux";

export interface InitialState {
}

export const initialState: InitialState = {
};

export interface DispatchAction extends Action {
    payload: Partial<InitialState>;
}

export const rootReducer: Reducer<InitialState, DispatchAction> = (state, action) => {
    return initialState;
};