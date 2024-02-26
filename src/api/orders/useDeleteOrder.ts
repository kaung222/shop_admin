import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "../apiClient";

export const useDeleteOrder = () => {
  const QueryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: { id: string }) => {
      return await apiClient
        .delete("orders/" + payload.id)
        .then((res) => res.data);
    },
    onSuccess() {
      return QueryClient.invalidateQueries({
        queryKey: ["GetOrders"],
        exact: false,
      });
    },
  });
};
