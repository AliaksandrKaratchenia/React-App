export interface IOrderItem {
    id: number;
    order_status: OrderStatus;
    order_date: Date;
    required_date: Date;
    shipped_date: Date;
    sales_manager: string;
    customer_name: string;
    email: string;
    address: string;
}

export enum OrderStatus {
    Pending = 1,
    Processing = 2,
    Rejected = 3,
    Completed = 4
}