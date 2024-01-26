"use client";
import Input from "@/components/commons/Input";
import Button from "@/components/commons/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterValidationSchema } from "@/validators/auth_validator";

import IconClose from "@/assets/icons/IconClose";
import IconButton from "../commons/IconButton";
import { redirect, useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const access_token =
    typeof window !== "undefined" ? localStorage.getItem("access_token") : null;
  if (access_token) return redirect("/dashboard");
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading, isSubmitting, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(RegisterValidationSchema),
  });
  const submitHandler = (data: { email: string }) => {
    console.log(data);
  };
  return (
    <div className="flex items-center  justify-center relative  ">
      <div className=" w-full min-h-[500px] md:w-[400px] mt-12 p-3 md:p-5">
        {/* <h2 className=" text-center text-3xl font-extrabold">Sepak Takraw</h2> */}
        <h1 className=" text-center font-bold text-3xl py-5">Login</h1>
        <form
          onSubmit={handleSubmit(submitHandler)}
          className=" mt-7 space-y-3"
        >
          <Input
            type="text"
            name="email"
            placeholder="Email"
            id="email"
            register={register}
            error={errors.email?.message}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            id="password"
            register={register}
            error={errors.password?.message}
          />
          <Button variant="contained" className=" mt-7">
            Login
          </Button>
        </form>
        {/* </div> */}
        <IconButton
          onClick={() => router.replace("profile")}
          className=" absolute top-0 right-0"
        >
          <IconClose />
        </IconButton>
      </div>
    </div>
  );
}
