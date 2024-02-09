import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../apiClient";

export const useGetUserById = (id: string) => {
  return useQuery<any, unknown, any>({
    queryKey: ["GetUserById"],
    queryFn: async () => {
      return await apiClient.get("users/" + id).then((res) => res.data);
    },
    staleTime: 20000,
  });
};
