"use client";

import { Product } from "@/types";
import { HeartIcon, ShoppingBagIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "@/redux/cart.slice";
import { useToast } from "@/hooks/use-toast";
import { RootState } from "@/redux/store";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const num = Math.round(product.rating.rate);
  const rating = new Array(num).fill(0);

  const { toast } = useToast();
  const dispatch = useDispatch();
  const numberInCart = useSelector((state: RootState) => {
    const item = state.cart.items.find((item) => item.id === product.id);
    return item?.quantity;
  });

  const addToCart = (product: Product) => {
    toast({ description: "Item added to cart", variant: "success" });
    dispatch(addItem(product));
  };

  return (
    <div className="p-4 mx-auto">
      <div className="w-[200px] h-[150px]">
        <Image
          src={product.image}
          alt={product.title}
          width={100}
          height={100}
          className="w-[80%] h-[80%] object-contain"
        />
        <p className="mt-5 text-xs capitalize text-gray-600">
          {product.category}
        </p>
        <Link
          href={`/product/${product.id}`}
          className="group transition duration-300"
        >
          <h3 className="text-lg cursor-pointer hover:text-blue-900 transition-all sm:w-full sm:truncate mt-2 text-black font-semibold">
            {product.title}
          </h3>
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] bg-blue-900"></span>
        </Link>
        <div className="flex items-center mt-2">
          {rating.map(() => (
            <StarIcon
              key={Math.random() * 1000}
              size={16}
              fill="yellow"
              className="text-yellow-500"
            />
          ))}
        </div>
        <div className="flex mt-2 items-center space-x-2">
          <p className="text-black text-base line-through font-semibold opacity-50">{`$${(
            product.price + 10
          ).toFixed(2)}`}</p>
          <p className="text-black text-lg font-bold opacity-80">
            ${product.price.toFixed(2)}
          </p>
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <Button
            size="icon"
            onClick={() => addToCart(product)}
            className="relative"
          >
            {numberInCart && (
              <span className="absolute -top-3 -right-2 w-6 h-6 bg-red-500 text-center flex items-center justify-center flex-col text-xs text-white rounded-full select-none">
                {numberInCart}
              </span>
            )}
            <ShoppingBagIcon size={18} />
          </Button>
          <Button size="icon" className="bg-red-500 hover:bg-red-400">
            <HeartIcon size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
