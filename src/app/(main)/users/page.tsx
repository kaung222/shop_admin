"use client";
import PaginationBar from "@/components/commons/Pagination";
import UserFilterBar from "@/components/users/UserFilterBar";
import UserTable from "@/components/users/UserTable";

const Page = () => {
  return (
    <div className="p-3">
      <UserFilterBar />
      <UserTable />
      <PaginationBar total={100} pageCount={20} />
    </div>
  );
};

export default Page;
