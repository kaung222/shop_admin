"use client";

import { useGetStatus } from "@/api/dashboard-data/useGetStatus";

const Page = () => {
  const { data } = useGetStatus();
  console.log(new Date().toISOString());

  return (
    <div className="p-3">
      <p>Total icome ={data?.totalIncome}</p>
      <p>Total Products ={data?.totalProducts}</p>
      <p>Total Users ={data?.totalUsers}</p>
      <p>Total Merchants ={data?.totalMerchants}</p>
    </div>
  );
};

export default Page;
