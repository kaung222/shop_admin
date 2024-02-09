"use client";
import FormInput from "../commons/FormInput";
import Button from "@/components/commons/Button";
import { useForm } from "react-hook-form";

import { useGetOtp } from "@/api/auth/useGetOtp";
import { toast } from "sonner";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginValidationSchema } from "@/validators/auth_validator";
import { useAppDispatch } from "@/store/hooks";
import { storeEmail } from "@/store/slices/emailSlice";
import { useRouter } from "next/navigation";
import { Form } from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export default function Login() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const form = useForm<z.infer<typeof LoginValidationSchema>>({
    resolver: zodResolver(LoginValidationSchema),
    defaultValues: {
      email: "thirdgodiswinning@gmail.com",
    },
  });
  const { mutate, error } = useGetOtp();
  const submitHandler = (otpProps: { email: string }) => {
    //@ts-expect-error
    mutate(otpProps, {
      onSuccess() {
        toast.success(`OTP send to ${otpProps.email}`);
        dispatch(storeEmail(otpProps.email));
        router.replace("confirm-otp");
      },
      onError() {
        toast.error(error?.message);
      },
    });
  };

  return (
    <div className="flex items-center  justify-center relative h-screen">
      <div className=" w-full min-h-[500px] md:w-[400px] mt-12 p-3 md:p-5">
        <h1 className=" text-center font-bold text-3xl py-5">Login</h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(submitHandler)}
            className=" mt-7 space-y-3"
          >
            <FormInput
              type="text"
              name="email"
              placeholder="Email"
              form={form}
              defaultValue="thirdgodiswinning@gmail.com"
            />
            <Button variant="contained" className=" mt-7">
              Get OTP
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
