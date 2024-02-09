import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../apiClient";
import { Product } from "@/types/product";
import { Order } from "@/types/order";
type GetOrderProps = {
  page: string;
  limit: string;
  search: string;
  sort: string;
  status: string;
};
type Orders = {
  orders: Order[];
  page: number;
  limit: number;
  lastPage: number;
  total: number;
};

export const useGetOrders = (props: GetOrderProps) => {
  const { page, limit, search, sort, status } = props;
  return useQuery<Orders>({
    queryKey: ["GetOrders", page, limit, search, sort, status],
    queryFn: async () => {
      return await apiClient
        .get("/orders", {
          params: {
            status,
            query: search,
            limit,
            page,
            sort_by_date: sort,
          },
        })
        .then((res) => res.data);
    },
    staleTime: 60000,
    refetchOnWindowFocus: true,
  });
};
