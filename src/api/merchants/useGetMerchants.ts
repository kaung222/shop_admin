import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../apiClient";
import useSetUrlQuery from "@/lib/useSetUrlQuery";

export type MerchantRes = {
  users: { name: string; id: string; email: string }[];
  page: number;
  limit: number;
  lastPage: number;
  total: number;
};

export const useGetMerchants = () => {
  const { getQuery } = useSetUrlQuery();
  const page = getQuery("page");
  const sort = getQuery("sort");
  const search = getQuery("search");
  const limit = getQuery("limit");
  const status = getQuery("status");
  return useQuery<MerchantRes, unknown, any>({
    queryKey: ["GetMerchants", page, limit, search, sort, status],
    queryFn: async () => {
      return await apiClient
        .get("/merchants", {
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
