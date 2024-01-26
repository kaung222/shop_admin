import { Product } from "./product";

export type ProductRes = {
  data: Product[];
  status: number;
  statusText: string;
};
export type CreateProductProps = {
  title: string;
  description: string;
  category: string;
  price: number;
  discount?: number | null | undefined;
  image: File | undefined;
};
