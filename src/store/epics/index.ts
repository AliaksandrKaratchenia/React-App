import { combineEpics, createEpicMiddleware } from "redux-observable";
import loadOrderEpic from "./orderEpics";
import { IState } from "../reducers";
import { Action } from "redux";

export const rootEpic = combineEpics(loadOrderEpic);

export default createEpicMiddleware<Action, Action, IState>();
