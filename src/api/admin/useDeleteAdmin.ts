import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "../apiClient";

export const useDeleteAdmin = () => {
  const QueryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: { id: string }) => {
      return await apiClient
        .delete("admins/" + payload.id)
        .then((res) => res.data);
    },
    onSuccess() {
      return QueryClient.invalidateQueries({
        queryKey: ["GetAdmins"],
        exact: false,
      });
    },
  });
};
