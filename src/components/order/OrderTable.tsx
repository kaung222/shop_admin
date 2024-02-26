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
import { useDeleteOrder } from "@/api/orders/useDeleteOrder";
import { toast } from "sonner";
import { ConfirmDialog } from "../commons/alert-dialog";

const OrderTable = ({ orders }: { orders: Order[] }) => {
  const { mutate } = useUpdateOrderStatus();
  const deleteOrder = useDeleteOrder();
  const handleAcceptOrder = (id: string, status: string) => {
    mutate({ id, data: { status } });
  };
  const handleDeleteOrder = (id: string) => {
    deleteOrder.mutate(
      { id },
      {
        onSuccess() {
          toast.success("Delete order successfully");
        },
      }
    );
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
            <TableHead>Total</TableHead>
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
                <TableCell>{order.total}</TableCell>
                <TableCell className=" space-x-2">
                  <div className=" space-x-2">
                    <Button
                      className=" bg-orange-500"
                      onClick={() => handleAcceptOrder(order.id, "pending")}
                    >
                      Message
                    </Button>
                    <ConfirmDialog
                      title="Are you sure to delete the order?"
                      description="This action can't be undone"
                      onConfirm={() => handleDeleteOrder(order.id)}
                    >
                      <Button className=" bg-red-500">Delete</Button>
                    </ConfirmDialog>
                    <Link href={`orders/${order.id}`}>
                      <Button className=" bg-gray-500">Details</Button>
                    </Link>
                  </div>
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
