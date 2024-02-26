import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "../apiClient";

export const useAddAdmin = () => {
  const QueryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: { email: string }) => {
      return await apiClient.post("admins", payload).then((res) => res.data);
    },
    onSuccess() {
      return QueryClient.invalidateQueries({
        queryKey: ["GetAdmins"],
        exact: false,
      });
    },
  });
};
