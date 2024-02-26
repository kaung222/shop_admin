"use client";
import { useGetMerchants } from "@/api/merchants/useGetMerchants";
import MerchantTable from "@/components/users/MerchantTable";
import UserFilterbar from "@/components/users/UserFilterBar";
import React from "react";

const Page = () => {
  const { data } = useGetMerchants();

  return (
    <div className=" p-5">
      <UserFilterbar />
      <MerchantTable users={data} />
    </div>
  );
};

export default Page;
