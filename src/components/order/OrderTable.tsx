import React from "react";
import IconButton from "../commons/IconButton";
import IconEdit from "@/assets/icons/IconEdit";
import IconInfo from "@/assets/icons/IconInfo";
import Link from "next/link";
import IconDelete from "@/assets/icons/IconDelete";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button } from "../ui/button";
import { Order } from "@/types/order";
import { useUpdateOrderStatus } from "@/api/orders/useUpdateOrderStatus";

const OrderTable = ({ orders }: { orders: Order[] }) => {
  const { mutate } = useUpdateOrderStatus();
  const handleAcceptOrder = (id: string, status: string) => {
    mutate({ id, data: { status } });
  };
  return (
    <div className="h-[70vh] overflow-auto scroll-m-1 scroll-smooth">
      <Table>
        <TableHeader className=" bg-slate-200">
          <TableRow>
            <TableHead>OrderId</TableHead>
            <TableHead>Customer Email</TableHead>
            <TableHead>Order Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders?.map((order) => {
            return (
              <TableRow key={order.id}>
                <TableCell>22</TableCell>
                <TableCell>{order.user?.email ?? "Email is empty"} </TableCell>
                <TableCell>
                  {order.createdAt.slice(0, order.createdAt.indexOf("T"))}
                </TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell className=" space-x-2">
                  {order.status === "pending" ? (
                    <div className=" space-x-2">
                      <Button
                        className=" bg-green-500"
                        onClick={() => handleAcceptOrder(order.id, "accepted")}
                      >
                        Accept
                      </Button>
                      <Button
                        className=" bg-orange-500"
                        onClick={() => handleAcceptOrder(order.id, "pending")}
                      >
                        Message
                      </Button>
                      <Link href={`orders/${order.id}`}>
                        <Button className=" bg-gray-500">Details</Button>
                      </Link>
                    </div>
                  ) : (
                    <div className=" space-x-2">
                      <Button
                        className=" bg-red-500"
                        onClick={() => handleAcceptOrder(order.id, "pending")}
                      >
                        Reject
                      </Button>
                      <Button
                        className=" bg-orange-500"
                        onClick={() => handleAcceptOrder(order.id, "pending")}
                      >
                        Message
                      </Button>
                    </div>
                  )}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default OrderTable;
