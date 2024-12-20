"use client";

import { getAllProducts } from "@/request/requests";
import { Product } from "@/types";
import { LoaderIcon } from "lucide-react";
import { useEffect, useState } from "react";
import ProductCard from "./product-card";

const AllProducts = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  console.log(products);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const products: Product[] = await getAllProducts();
        setProducts(products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <div className="pt-16 pb-12">
      <h2 className="text-center font-bold text-2xl ">All products</h2>
      {loading ? (
        <div className="flex justify-center items-center mt-16">
          <LoaderIcon size={32} className="animate-spin" />
        </div>
      ) : (
        <div className="w-4/5 mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products!.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      )}
    </div>
  );
};

export default AllProducts;
