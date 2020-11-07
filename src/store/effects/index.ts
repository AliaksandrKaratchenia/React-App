import watchGetOrders from "./ordersSaga";
import { all, fork } from 'redux-saga/effects'

function* rootSaga() {
    yield all([fork(watchGetOrders)])
}

export default rootSaga;
