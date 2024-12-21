import { getProduct, getProductByCategory } from "@/request/requests";
import { Product } from "@/types";

const ProductPage = async ({ params }: { params: Promise<{ id: number }> }) => {
  const id = (await params).id;
  const product: Product = await getProduct(id);
  const relatedProduct: Product[] = await getProductByCategory(
    product.category
  );

  const num = Math.round(product.rating.rate);
  const starArray = new Array(num).fill(0);

  return (
    <div className="mt-20">
      <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-7 items-center gap-4">
      </div>
    </div>
  );
};

export default ProductPage;
