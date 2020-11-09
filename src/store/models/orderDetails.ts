export interface IBrand {
  brand_name: string;
}

export interface ICategory {
  category_name: string;
  brands: IBrand[];
}

export interface IProduct {
  model_year: number;
  categories: ICategory[];
}

export interface IOrderedProduct {
  quantity: number;
  list_price: number;
  product_name: number;
  products: IProduct[];
}

export interface IOrderInfo {
  store_name: string;
  email: string;
  state: string;
  city: string;
  street: string;
  ordered_products: IOrderedProduct[];
}

export interface IOrderDetails {
  id: number;
  info: IOrderInfo[];
}