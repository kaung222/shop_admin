"use client";
import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../apiClient";
import { User } from "@/types/user";
import useSetUrlQuery from "@/lib/useSetUrlQuery";
type UsersRes = {
  users: User[];
  page: number;
  limit: number;
  lastPage: number;
  total: number;
};

export const useGetUsers = () => {
  const { getQuery } = useSetUrlQuery();
  const page = getQuery("page") || 1;
  const sort = getQuery("sort") || "desc";
  const search = getQuery("search") || "";
  const limit = getQuery("limit") || 10;
  const status = getQuery("status") || "all";
  return useQuery<any, unknown, UsersRes>({
    queryKey: ["GetUsers", page, limit, search, sort, status],
    queryFn: async () => {
      return await apiClient
        .get("/users", {
          params: {
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
