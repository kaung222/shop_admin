"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import Link from "next/link";
import { Merchant, User } from "@/types/user";
import { ConfirmDialog } from "../commons/alert-dialog";
import { toast } from "sonner";
import { useDeleteMerchant } from "@/api/merchants/useDeleteMerchant";
import { useUpdateStatusMerchant } from "@/api/merchants/useUpdateStatus";

export default function MerchantTable({ users }: { users: Merchant[] }) {
  const deleteMerchant = useDeleteMerchant();
  const { mutate } = useUpdateStatusMerchant();
  const handleDeleteMerchant = (id: string) => {
    deleteMerchant.mutate(
      { id },
      {
        onSuccess() {
          toast.success("Delete merchant successfully.");
        },
        onError() {
          toast.error("Error deleting merchant!");
        },
      }
    );
  };
  const handleApproved = ({ id, data }: { id: string; data: string }) => {
    mutate(
      { id, status: data },
      {
        onSuccess() {
          toast.success("Approved successfully.");
        },
        onError(err) {
          //@ts-expect-error
          toast.error(err.response.data.message);
        },
      }
    );
  };
  return (
    <div className="h-[70vh] overflow-auto scroll-m-1 scroll-smooth">
      <Table>
        <TableCaption>Merchant List</TableCaption>
        <TableHeader className=" bg-slate-200">
          <TableRow>
            <TableHead className="">Name</TableHead>
            <TableHead className="">Phone No.</TableHead>
            <TableHead className="">Register Date</TableHead>
            <TableHead className="">Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users?.map((user) => (
            <TableRow key={user?.id}>
              <TableCell className="font-medium">
                <Link
                  prefetch
                  href={`merchants/${user.id}`}
                  className="hover:underline hover:text-blue-500"
                >
                  {user.email}
                </Link>
              </TableCell>

              <TableCell>Empty</TableCell>
              <TableCell>
                {user.createdAt.slice(0, user.createdAt.indexOf("T"))}
              </TableCell>
              <TableCell>{user.status}</TableCell>
              <TableCell className=" space-x-2">
                {user.status === "pending" ? (
                  <Button
                    onClick={() =>
                      handleApproved({ id: user.id, data: "approved" })
                    }
                  >
                    Approve
                  </Button>
                ) : (
                  <Button
                    onClick={() =>
                      handleApproved({ id: user.id, data: "pending" })
                    }
                  >
                    Unapprove
                  </Button>
                )}

                <ConfirmDialog
                  onConfirm={() => handleDeleteMerchant(user.id)}
                  title="Are you sure to delete this user?"
                  description="This action can't be undone after deleting"
                >
                  <Button className=" bg-red-500">Delete</Button>
                </ConfirmDialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
