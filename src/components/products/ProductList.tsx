import { useGetProducts } from "@/api/product/useGetProducts";
import ProductCard from "../commons/ProductCard";
import useSetUrlQuery from "@/lib/useSetUrlQuery";
import { Product } from "@/types/product";

const ProductList = ({ products }: { products: Product[] | undefined }) => {
  const { getQuery } = useSetUrlQuery();
  const page = getQuery("page");
  const sort = getQuery("sort");
  const search = getQuery("search");
  const limit = getQuery("limit");
  const category = getQuery("category");
  const { data } = useGetProducts({ page, search, sort, limit, category });
  return (
    <div className=" h-[60vh] overflow-auto flex flex-wrap gap-5 items-center justify-between">
      {products?.map((product) => {
        return (
          <div className="w-[230px]" key={product.id}>
            <ProductCard product={product} />;
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
