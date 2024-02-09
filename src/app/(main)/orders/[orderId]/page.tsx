"use client";
import { useGetOrderDetail } from "@/api/orders/useGetOrderDetail";
import { useParams } from "next/navigation";

const page = () => {
  const { orderId } = useParams();
  const { data: order } = useGetOrderDetail(orderId as string);
  console.log(order);

  return <div>Detail page</div>;
};

export default page;
