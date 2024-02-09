"use client";
import IconEdit from "@/assets/icons/IconEdit";
import IconButton from "../commons/IconButton";
import IconInfo from "@/assets/icons/IconInfo";
import Link from "next/link";
import IconDelete from "@/assets/icons/IconDelete";
import { toast } from "sonner";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { DropdownMenuDemo } from "../commons/DropDownMenu";
import { useGetProducts } from "@/api/product/useGetProducts";
import { SkeletonLoading } from "../commons/skeleton-loading";
import useSetUrlQuery from "@/lib/useSetUrlQuery";
import { Product } from "@/types/product";

const ProductTable = ({ products }: { products: Product[] | undefined }) => {
  return (
    <div className=" h-[60vh] overflow-auto scroll-m-1 scroll-smooth">
      <Table className="">
        <TableHeader className=" bg-slate-200">
          <TableRow>
            <TableHead className="font-medium">Title</TableHead>
            <TableHead className=" text-end">Price</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products?.map((product) => {
            return (
              <TableRow key={product.id}>
                <TableCell>{product.title.slice(0, 20)}...</TableCell>
                <TableCell className=" text-end">{product?.price}</TableCell>
                <TableCell>{product?.category}</TableCell>
                <TableCell>
                  <DropdownMenuDemo id={product.id.toString()} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductTable;

// <Link href={"/products/edit/4444"}>
//                 <IconButton>
//                   <IconEdit className=" text-orange-500 hover:text-white" />
//                 </IconButton>
//               </Link>
//               <Link href={"/products/73833"}>
//                 <IconButton>
//                   <IconInfo className=" text-green-500 hover:text-white" />
//                 </IconButton>
//               </Link>
//               <IconButton onClick={() => toast.error("Deleted successfully")}>
//                 <IconDelete className=" text-red-500 hover:text-white" />
//               </IconButton>
