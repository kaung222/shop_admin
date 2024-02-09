"use client";
import { useGetSingleProduct } from "@/api/product/useGetSingleProduct";
import EditProductForm from "@/components/products/EditProductForm";
import { Skeleton } from "@/components/ui/skeleton";
import { useParams } from "next/navigation";
const Page = () => {
  const { productId } = useParams();
  const { data, isLoading } = useGetSingleProduct(productId.toString());
  console.log(data);
  if (isLoading)
    return (
      <div className="p-5 grid grid-cols-2 gap-5">
        <Skeleton className="h-16 " />
        <Skeleton className="h-16 " />
        <Skeleton className="h-16 " />
        <Skeleton className="h-16 " />
        <Skeleton className="h-16 " />
        <Skeleton className="h-16 " />
        <Skeleton className="h-16 " />
        <Skeleton className="h-16 " />
      </div>
    );
  return (
    <div className="">
      <EditProductForm
        //@ts-expect-error
        product={data}
      />
    </div>
  );
};

export default Page;
