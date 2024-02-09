import { Product } from "@/types/product";
import Link from "next/link";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/store/hooks";
import { ConfirmDialog } from "./alert-dialog";
import IconDelete from "@/assets/icons/IconDelete";
import { useDeleteProduct } from "@/api/product/useDeleteProduct";
import { toast } from "sonner";

type ProductCardProps = {
  product: Product;
};
const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useAppDispatch();
  const { mutate, error } = useDeleteProduct();
  const handleDelete = (id: string) => {
    mutate(
      { id },
      {
        onSuccess() {
          toast.success("Delete product successfully");
        },
        onError() {
          //@ts-expect-error
          toast.error(error.response.data.message);
        },
      }
    );
  };
  return (
    <div className=" h-auto w-full p-5 rounded-xl shadow-sm hover:shadow-xl shadow-slate-500">
      <img
        src={product.images[0]}
        alt=""
        className="w-full aspect-[5/6] object-contained"
      />
      <div className="flex items-center justify-between py-3">
        <p>{product.title.slice(0, 10)}...</p>
        <span>$ {product.price}</span>
      </div>
      {/* <div className="">{product.rating.rate}</div> */}
      <div className="flex items-center justify-between">
        <ConfirmDialog
          title="alert title"
          description="Are you sure to delete?"
          onConfirm={() => handleDelete(product.id)}
        >
          <Button className=" bg-red-500">Delete</Button>
        </ConfirmDialog>
        <Link href={`products/edit/${product.id}`}>
          <Button className=" bg-orange-500">Edit</Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
