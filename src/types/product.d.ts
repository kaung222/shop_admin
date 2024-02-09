export type Product = {
  id: string;
  category: string;
  images: string[];
  price: number;
  title: string;
  rating?: {
    rate: number;
    count: number;
  };
  description: string;
  // quantity?: number;
  discountPercentage: number;
};

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
  discountPercentage: number;
  images: any[];
};
