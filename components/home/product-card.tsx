"use client";

import { Product } from "@/types";
import { HeartIcon, ShoppingBagIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { addItem } from "@/redux/cart.slice";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const num = Math.round(product.rating.rate);
  const rating = new Array(num).fill(0);

  const dispatch = useDispatch();

  const addToCart = (product: Product) => {
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
          <Button size="icon" onClick={() => addToCart(product)}>
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
