import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import config from "../../app.config.json";
import { loadedOrders, loadingOrders, loadingOrdersFailed, loadOrders } from "../slices/ordersSlice";

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
  yield takeEvery(loadOrders, getOrders);
}

export default watchGetOrders;