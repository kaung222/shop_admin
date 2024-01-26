export type Product = {
  id: number;
  category: string;
  image: string;
  price: number;
  title: string;
  rating: {
    rate: number;
    count: number;
  };
  description: string;
  // quantity?: number;
};
