"use client";
import PaginationBar from "@/components/commons/Pagination";
import OrderFilterbar from "@/components/order/OrderFilterbar";
import OrderTable from "@/components/order/OrderTable";

const page = () => {
  return (
    <div className="p-3">
      <OrderFilterbar />
      <OrderTable />
      <PaginationBar total={300} pageCount={30} />
    </div>
  );
};

export default page;
