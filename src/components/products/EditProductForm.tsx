"use client";
import { EditProductSchema } from "@/validators/prodcut-validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "../ui/form";
import { Button } from "../ui/button";
import FormInput from "../commons/FormInput";
import FormSelect from "../commons/FormSelect";
import { categories } from "@/data/category.data";
import { Product } from "@/types/product";
import { useUpdateProduct } from "@/api/product/useUpdateProduct";
import { toast } from "sonner";
import Link from "next/link";

export default function EditProduct({ product }: { product: Product }) {
  const form = useForm<z.infer<typeof EditProductSchema>>({
    resolver: zodResolver(EditProductSchema),
    defaultValues: {
      title: product?.title,
      description: product?.description,
      category: product?.category,
      price: product?.price.toString(),
      discountPercentage: product?.discountPercentage.toString(),
      images: undefined,
    },
  });
  const { mutate, error } = useUpdateProduct();
  function onSubmit(values: z.infer<typeof EditProductSchema>) {
    mutate(
      { id: product.id, data: values },
      {
        onSuccess() {
          toast.success("Update product successfully");
        },
        onError() {
          //@ts-expect-error
          toast.error(error.response.data.message);
        },
      }
    );
  }
  return (
    <div className="">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" grid grid-cols-2 gap-5 p-5"
        >
          <FormInput
            placeholder="Title"
            form={form}
            type="text"
            name="title"
            label="Title"
            defaultValue={product?.title}
          />
          <FormInput
            type="text"
            placeholder="Description"
            form={form}
            name="description"
            label="Description (optional)"
            defaultValue={product?.description}
          />
          <FormSelect
            form={form}
            name="category"
            options={categories}
            label="Category"
            placeholder="All Categories"
            defaultValue={product?.category}
          />
          <FormInput
            form={form}
            type="number"
            placeholder="Price"
            name="price"
            label="Price"
            defaultValue={product?.price}
          />
          <FormInput
            form={form}
            type="number"
            name="discountPercentage"
            label="Discount Percentage (optional)"
            defaultValue={product?.discountPercentage}
          />
          <FormInput
            type="file"
            form={form}
            name="images"
            label="Product Image"
          />
          <Link href="/products?page=1&limit=10&category=all&sort=asc">
            <Button type="reset" className=" bg-red-500">
              Cancel
            </Button>
          </Link>
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
