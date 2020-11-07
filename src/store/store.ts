import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./effects/index";

import rootReducer, { initialState } from "./reducers";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  middleware: [sagaMiddleware] as const
});

sagaMiddleware.run(rootSaga);

export default store;