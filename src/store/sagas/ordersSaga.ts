import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  OrdersActionTypes,
  loadedOrders,
  loadingOrders,
  loadingOrdersFailed
} from "../actions/orderActions";
import config from "../../app.config.json";

function* getOrders() {
  try {
    yield put(loadingOrders());
    const response = yield call(axios.get, config.SERVER_URL);
    yield put(loadedOrders(response.data));
  } catch {
    yield put(loadingOrdersFailed());
  }
}

function* watchGetOrders() {
  yield takeEvery(OrdersActionTypes.LOAD_ORDERS, getOrders);
}

export default watchGetOrders;