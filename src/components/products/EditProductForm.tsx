"use client";
import { CreateProductProps } from "@/types/productRes";
import { createProductValidator } from "@/validators/create_product.validator";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const EditProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createProductValidator),
  });
  const createProduct = (data: CreateProductProps) => {
    console.log(data);
  };
  return (
    <div className="p-3 md:p-5">
      <div className="">
        <h3 className=" font-bold text-xl my-5">Create Product Page </h3>
        <form
          //@ts-expect-error
          onSubmit={handleSubmit(createProduct)}
          className=" grid grid-cols-2 gap-5"
        >
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <label htmlFor="email">Email</label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <label htmlFor="email">Email</label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <label htmlFor="email">Email</label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <label htmlFor="email">Email</label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
          {/* <Input
            name="description"
            id="description"
            register={register}
            type="text"
            placeholder="Product description"
            error={errors.description?.message}
          />
          <Input
            name="category"
            id="category"
            register={register}
            type="text"
            placeholder="Product category"
            error={errors.category?.message}
          />
          <Input
            name="price"
            id="price"
            register={register}
            type="text"
            placeholder="Product price"
            error={errors.price?.message}
          />
          <Input
            name="discountPercentage"
            id="discount"
            register={register}
            type="number"
            placeholder="Discount percentage eg:10"
            error={errors.discount?.message}
          />
          <Input
            name="images"
            id="images"
            register={register}
            type="file"
            placeholder="Product images"
            error={errors.images?.message}
          /> */}
          <Link href="/products">
            <Button className=" bg-red-500">Cancel</Button>
          </Link>
          <div className="">
            <Button>Update Product</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProductForm;
