export interface IOrderItem {
  id: number;
  order_status: number;
  order_date: Date;
  shipped_date: Date;
  sales_manager: string;
  customer_name: string;
  email: string;
  address: string;
}

export enum ApiStatus {
  LOADING = "loading",
  LOADED = "loaded",
  FAILED = "failed",
}
