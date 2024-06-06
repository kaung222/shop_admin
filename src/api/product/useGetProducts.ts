import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../apiClient";
import { Product } from "@/types/product";
import useSetUrlQuery from "@/lib/useSetUrlQuery";
type ProductsResponse = {
  products: Product[];
  page: number;
  limit: number;
  lastPage: number;
  total: number;
};

export const useGetProducts = () => {
  const { getQuery } = useSetUrlQuery();
  const page = getQuery("page");
  const sort = getQuery("sort");
  const search = getQuery("search");
  const limit = getQuery("limit");
  const category = getQuery("category");
  return useQuery<ProductsResponse>({
    queryKey: ["GetProducts", page, limit, search, sort, category],
    queryFn: async () => {
      return await apiClient
        .get("/products", {
          params: {
            category,
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
