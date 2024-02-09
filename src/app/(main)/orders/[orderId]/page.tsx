"use client";
import { useGetOrderDetail } from "@/api/orders/useGetOrderDetail";
import { useParams } from "next/navigation";

const Page = () => {
  const { orderId } = useParams();
  const { data: order } = useGetOrderDetail(orderId as string);
  console.log(order);

  return <div>Detail Page</div>;
};

export default Page;
