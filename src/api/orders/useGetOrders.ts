import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../apiClient";
import { Order } from "@/types/order";
import { getItemFromLocalStorage } from "@/lib/utils";
import useSetUrlQuery from "@/lib/useSetUrlQuery";

type Orders = {
  orders: Order[];
  page: number;
  limit: number;
  lastPage: number;
  total: number;
};

export const useGetOrders = () => {
  const { getQuery } = useSetUrlQuery();
  const page = getQuery("page");
  const sort = getQuery("sort");
  const limit = getQuery("limit");
  const status = getQuery("status");
  const search = getQuery("search");

  const user = getItemFromLocalStorage("user");
  return useQuery<Orders>({
    queryKey: ["GetOrders", page, limit, search, sort, status],
    queryFn: async () => {
      return await apiClient
        .get(`/orders`, {
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
