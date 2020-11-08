import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import axios from "axios";
import config from "../../app.config.json";
import { loadedOrders, loadingOrders, loadingOrdersFailed, loadOrders, loadOrderDetails, loadedOrderDetails, loadingOrderDetailsFailed, loadingOrderDetails } from "../slices/ordersSlice";

function* getOrders() {
  try {
    yield put(loadingOrders());
    const response = yield call(axios.get, config.SERVER_URL);
    yield put(loadedOrders(response.data));
  } catch(error) {
    yield put(loadingOrdersFailed(error.message));
  }
}

function* getOrderDetails({ payload }: ReturnType<typeof loadOrderDetails>) {
  try {
    yield put(loadingOrderDetails());
    const response = yield call(axios.get, `${config.SERVER_URL}/${payload}`);
    yield put(loadedOrderDetails(response.data));
  } catch(error) {
    yield put(loadingOrderDetailsFailed(error.message));
  }
}

function* watchGetOrders() {
  yield takeEvery(loadOrders, getOrders);
  yield takeLatest(loadOrderDetails, getOrderDetails);
}

export default watchGetOrders;