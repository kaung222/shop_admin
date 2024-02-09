import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../apiClient";
import { User } from "@/types/user";
type GetUserProps = {
  page: string;
  limit: string;
  search: string;
  sort: string;
  status: string;
};
type Users = {
  users: User[];
  page: number;
  limit: number;
  lastPage: number;
  total: number;
};

export const useGetUsers = (props: GetUserProps) => {
  const { page, limit, search, sort, status } = props;
  return useQuery<Users[], unknown, any>({
    queryKey: ["GetUsers", page, limit, search, sort, status],
    queryFn: async () => {
      return await apiClient
        .get("/users", {
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
