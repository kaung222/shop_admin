import { useQueries, useQuery } from "@tanstack/react-query";
import { apiClient } from "../apiClient";

// export const useGetStauts = () => {
//   return useQueries({
//     queries: [
//       {
//         queryKey: ["GetIcome"],
//         queryFn: async () =>
//           await apiClient.get("status/income").then((res) => res.data),
//       },
//       {
//         queryKey: ["GetProductCount"],
//         queryFn: async () =>
//           await apiClient.get("status/product-count").then((res) => res.data),
//       },
//     ],
//   });
// };

export const useGetStatus = () => {
  return useQuery({
    queryKey: ["GetStatus"],
    queryFn: async () => await apiClient.get("status").then((res) => res.data),
  });
};
