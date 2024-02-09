"use client";
import { useGetMerchants } from "@/api/merchants/useGetMerchants";
import MerchantTable from "@/components/users/MerchantTable";
import UserFilterbar from "@/components/users/UserFilterBar";
import useSetUrlQuery from "@/lib/useSetUrlQuery";
import React from "react";

const page = () => {
  const { getQuery } = useSetUrlQuery();
  const page = getQuery("page");
  const sort = getQuery("sort");
  const search = getQuery("search");
  const limit = getQuery("limit");
  const status = getQuery("status");
  const { data } = useGetMerchants({ page, search, sort, limit, status });

  return (
    <div className=" p-5">
      <UserFilterbar />
      <MerchantTable users={data} />
    </div>
  );
};

export default page;
