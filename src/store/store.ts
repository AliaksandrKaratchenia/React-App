import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/index';

import rootReducer, { initialState } from "./reducers";

const composeEnhancer = composeWithDevTools({
  name: "React App",
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancer(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;