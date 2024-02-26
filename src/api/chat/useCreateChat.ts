import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../apiClient";

export const useCreateChat = () => {
  return useMutation({
    mutationFn: async (payload: { participants: string[] }) => {
      return await apiClient.post("chat", payload).then((res) => res.data);
    },
  });
};
