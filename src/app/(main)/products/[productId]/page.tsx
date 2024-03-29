"use client";
import { useGetSingleProduct } from "@/api/product/useGetSingleProduct";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const { productId } = useParams();
  const { data: product } = useGetSingleProduct(productId as string);
  console.log(product);

  return (
    <div>
      <div className=" flex items-start space-x-5">
        <div className="">
          {product?.images.map((image) => {
            return (
              <Image
                src={image}
                alt=""
                className=" w-[200px]"
                width={200}
                height={200}
                key={image}
              />
            );
          })}
        </div>
        <div className="">
          <p>{product?.title}</p>
          <p>{product?.description}</p>
          <p>{product?.price}</p>
          <p>{product?.category}</p>
          <p>{product?.discountPercentage}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
