import { useGetUserById } from "@/api/user/useGetUserById";
import { useParams } from "next/navigation";

const UserDetail = () => {
  const { userId } = useParams();
  console.log(userId);
  const { data } = useGetUserById(userId as string);
  console.log(data);

  return (
    <div className=" p-5">
      <p>id:{data?.id}</p>
      <p>email: {data?.email}</p>
      <p>Register at{data?.createdAt}</p>
      <div>
        Recent orders
        {data?.orders?.map((order: any) => {
          return (
            <div className="" key={order.id}>
              {order.id}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserDetail;
