"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useAppSelector } from "../hooks";

const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();
  const { mode } = useAppSelector((state) => state.mode);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className={mode}>{children}</div>
      </QueryClientProvider>
    </>
  );
};

export default ReactQueryProvider;
