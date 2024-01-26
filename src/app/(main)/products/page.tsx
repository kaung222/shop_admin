"use client";

import PaginationBar from "@/components/commons/Pagination";
import ProductFilterbar from "@/components/products/ProductFilterbar";
import ProductList from "@/components/products/ProductList";
import ProductTable from "@/components/products/ProductTable";
import useSetUrlQuery from "@/lib/useSetUrlQuery";

const page = () => {
  const { getQuery } = useSetUrlQuery();
  const currentView = getQuery("view");
  return (
    <div className="p-3">
      <ProductFilterbar />
      {currentView === "table" ? <ProductTable /> : <ProductList />}
      <PaginationBar total={20000} pageCount={6} />
    </div>
  );
};

export default page;
