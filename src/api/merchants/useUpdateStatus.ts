import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "../apiClient";

export const useUpdateStatusMerchant = () => {
  const QueryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: { id: string; status: string }) => {
      return await apiClient
        .post("merchants/" + payload.id, payload)
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
