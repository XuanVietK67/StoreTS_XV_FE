export type GetStoresParams = {
  page: number;
  limit: number;
  search?: string;
  sort?: string;
};

export type Product = {
  _id: string;
  name: string;
  price: number;
  toppings: string[];
};

export type ProductInStore = {
  product: Product;
  _id: string;
};

export type DatagetProductsByStore = {
  data: ProductInStore[];
  total: number;
};

export type DatagetProductsByStoreWrap = DatagetProductsByStore[];
