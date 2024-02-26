"use client";

import { useGetAdmins } from "@/api/admin/useGetAdmins";
import AdminFilterbar from "@/components/users/AdminFilterBar";
import AdminTable from "@/components/users/AdminTable";
import UserFilterbar from "@/components/users/UserFilterBar";
import useSetUrlQuery from "@/lib/useSetUrlQuery";

const Page = () => {
  const { getQuery } = useSetUrlQuery();
  const page = getQuery("page");
  const sort = getQuery("sort");
  const search = getQuery("search");
  const limit = getQuery("limit");
  const status = getQuery("status");
  const { data } = useGetAdmins({ page, search, sort, limit, status });
  return (
    <div className="p-5">
      <AdminFilterbar />
      <AdminTable
        //@ts-expect-error
        users={data}
      />
    </div>
  );
};

export default Page;
