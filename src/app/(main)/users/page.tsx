"use client";

import { useGetUsers } from "@/api/user/useGetUsers";
import PaginationBar from "@/components/commons/Pagination";

import UserFilterBar from "@/components/users/UserFilterBar";
import UserTable from "@/components/users/UserTable";
import useSetUrlQuery from "@/lib/useSetUrlQuery";

const Page = () => {
  const { getQuery } = useSetUrlQuery();
  const page = getQuery("page");
  const sort = getQuery("sort");
  const search = getQuery("search");
  const limit = getQuery("limit");
  const status = getQuery("status");
  const { data } = useGetUsers({ page, search, sort, limit, status });

  return (
    <div className="p-3">
      <UserFilterBar />
      <UserTable users={data?.users} />
      <PaginationBar total={data?.total || 0} pageCount={data?.lastPage || 0} />
    </div>
  );
};

export default Page;
