import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../apiClient";

type GetMerchantProps = {
  page: string;
  limit: string;
  search: string;
  sort: string;
  status: string;
};
export type MerchantRes = {
  users: { name: string; id: string; email: string }[];
  page: number;
  limit: number;
  lastPage: number;
  total: number;
};

export const useGetMerchants = (props: GetMerchantProps) => {
  const { page, limit, search, sort, status } = props;
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
