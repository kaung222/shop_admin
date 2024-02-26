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
import { User } from "@/types/user";
import { ConfirmDialog } from "../commons/alert-dialog";
import { useDeleteuser } from "@/api/user/useDeleteUser";
import { toast } from "sonner";
import { apiClient } from "@/api/apiClient";

export default function UserTable({ users }: { users: User[] | undefined }) {
  const { mutate, error } = useDeleteuser();
  const handleDeleteUser = (id: string) => {
    mutate(
      { id },
      {
        onSuccess() {
          toast.success("User created successfully");
        },
        onError() {
          toast.error("Error deleting user!");
        },
      }
    );
  };
  const handleRestrictUser = async (id: string) => {
    const { data } = await apiClient.post("users/restrict/" + id);
    console.log(data);
  };
  return (
    <div className="h-[70vh] overflow-auto scroll-m-1 scroll-smooth">
      <Table>
        <TableCaption>A list of recent registered users.</TableCaption>
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
                {" "}
                <Link
                  href={`users/detail/${user.id}`}
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
                <Button onClick={() => handleRestrictUser(user.id)}>
                  {user.status === "restricted" ? "Unrestrict" : "Restrict"}
                </Button>
                <ConfirmDialog
                  onConfirm={() => handleDeleteUser(user.id)}
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
