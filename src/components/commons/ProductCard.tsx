import { Product } from "@/types/product";
import Link from "next/link";
import { Button } from "../ui/button";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addToCart, removeFromCart } from "@/store/slices/cartSlice";
type ProductCardProps = {
  product: Product;
};
const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.productsInCart);

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart({ product, quantity: 1 }));
  };
  const isExistInCart = products.find((prod) => prod.product.id === product.id);
  const handleRemoveFromCart = (product: Product) => {
    dispatch(removeFromCart(product));
  };
  return (
    <Link href={`shop/product/${product.id}`} className="w-full">
      <div className=" h-auto w-full p-5 rounded-xl shadow-sm hover:shadow-xl shadow-slate-500">
        <img
          src={product.image}
          alt=""
          className="w-full aspect-[5/6] object-contained"
        />
        <div className="flex items-center justify-between py-3">
          <p>{product.title.slice(0, 10)}...</p>
          <span>$ {product.price}</span>
        </div>
        <div className="">{product.rating.rate}</div>
        <div className="">
          <Button>remove</Button>
          <Button>Edit</Button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
