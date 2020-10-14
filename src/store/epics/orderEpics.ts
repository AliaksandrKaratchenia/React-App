import { Epic } from "redux-observable";
import { switchMap, map, startWith, catchError, filter } from "rxjs/operators";
import axios from "axios";
import {
  OrdersAction,
  OrdersActionTypes,
  loadedOrders,
  loadingOrders,
  loadingOrdersFailed,
} from "../actions/orderActions";
import { IState } from "../reducers";
import { from, of } from "rxjs";
import { isOfType } from "typesafe-actions";

const loadOrderEpic: Epic<OrdersAction, OrdersAction, IState> = (action$) =>
  action$.pipe(
    filter(isOfType(OrdersActionTypes.LOAD_ORDERS)),
    switchMap(() =>
      from(axios.get("http://localhost:5000/orders")).pipe(
        map((response) => {
            console.log(response.data, "Response");
            return loadedOrders(response.data);
        }),
        startWith(loadingOrders()),
        catchError(() => of(loadingOrdersFailed()))
      )
    )
  );

export default loadOrderEpic;
