import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "../apiClient";

export const useDeleteMerchant = () => {
  const QueryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: { id: string }) => {
      return await apiClient
        .delete("merchants/" + payload.id)
        .then((res) => res.data);
    },
    onSuccess() {
      return QueryClient.invalidateQueries({
        queryKey: ["GetMerchants"],
        exact: false,
      });
    },
  });
};
