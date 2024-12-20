import { Product } from "@/types";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const num = Math.round(product.rating.rate);

  return <div>ProductCard</div>;
};

export default ProductCard;
