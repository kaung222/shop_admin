"use client";

import { useGetUsers } from "@/api/user/useGetUsers";
import PaginationBar from "@/components/commons/Pagination";

import UserFilterBar from "@/components/users/UserFilterBar";
import UserTable from "@/components/users/UserTable";

const Page = () => {
  const { data } = useGetUsers();

  return (
    <div className="p-3">
      <UserFilterBar />
      <UserTable users={data?.users} />
      <PaginationBar total={data?.total || 0} pageCount={data?.lastPage || 0} />
    </div>
  );
};

export default Page;
