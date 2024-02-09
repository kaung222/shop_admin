"use client";
import { useGetOrders } from "@/api/orders/useGetOrders";
import PaginationBar from "@/components/commons/Pagination";
import OrderFilterbar from "@/components/order/OrderFilterbar";
import OrderTable from "@/components/order/OrderTable";
import useSetUrlQuery from "@/lib/useSetUrlQuery";

const page = () => {
  const { getQuery } = useSetUrlQuery();
  const page = getQuery("page");
  const sort = getQuery("sort");
  const limit = getQuery("limit");
  const status = getQuery("status");
  const search = getQuery("search");
  const { data } = useGetOrders({ limit, sort, page, status, search });

  return (
    <div className="p-3">
      <OrderFilterbar />
      <OrderTable
        //@ts-expect-error
        orders={data?.orders}
      />
      <PaginationBar total={data?.total} pageCount={data?.lastPage || 0} />
    </div>
  );
};

export default page;
