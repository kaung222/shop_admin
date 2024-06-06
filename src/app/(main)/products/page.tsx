"use client";

import { useGetProducts } from "@/api/product/useGetProducts";
import PaginationBar from "@/components/commons/Pagination";
import ProductFilterbar from "@/components/products/ProductFilterbar";
import ProductTable from "@/components/products/ProductTable";

const Page = () => {
  const { data, isLoading } = useGetProducts();
  if (data?.products?.length === 0) return "No products to display";
  return (
    <div className="p-3">
      <ProductFilterbar />
      <ProductTable products={data?.products} />
      <PaginationBar total={data?.total} pageCount={data?.lastPage || 0} />
    </div>
  );
};

export default Page;
