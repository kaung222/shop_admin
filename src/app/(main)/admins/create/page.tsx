"use client";

import { useAddAdmin } from "@/api/admin/useAddAdmin";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function Page() {
  const { register, handleSubmit } = useForm();
  const { mutate } = useAddAdmin();
  const HandleAddAdmin = (data: any) => {
    mutate(data, {
      onSuccess() {
        toast.success("Added admin successfully");
      },
      onError(err) {
        // console.log(err?.response.data.message);
        //@ts-expect-error
        toast.error(err?.response.data.message);
      },
    });
  };
  return (
    <div className="p-5">
      <form
        action=""
        onSubmit={handleSubmit(HandleAddAdmin)}
        className="space-y-2"
      >
        <Input placeholder="Email" {...register("email")} />
        <Button>Add Admin</Button>
      </form>
    </div>
  );
}
