"use client";
import { useGetStatus } from "@/api/dashboard-data/useGetStatus";
import { useGetUsers } from "@/api/user/useGetUsers";
import { formatDate } from "@/lib/utils";
import Image from "next/image";

const Page = () => {
  const { data } = useGetStatus();
  const user = useGetUsers();
  if (user.data?.users) {
    console.log(formatDate(user?.data?.users[0].createdAt));
  }

  return (
    <div className="p-3">
      <p>Total icome ={data?.totalIncome}</p>
      <p>Total Products ={data?.totalProducts}</p>
      <p>Total Users ={data?.totalUsers}</p>
      <p>Total Merchants ={data?.totalMerchants}</p>
      <Image
        src={"/images/shoplogo.png"}
        alt="hello"
        width={200}
        height={200}
      />
    </div>
  );
};

export default Page;
