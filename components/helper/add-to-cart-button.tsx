"use client";

import { useDispatch } from "react-redux";
import { Button } from "../ui/button";
import { addItem } from "@/redux/cart.slice";
import { Product } from "@/types";
import { useToast } from "@/hooks/use-toast";

const AddToCartButton = ({ item }: { item: Product }) => {
  const dispatch = useDispatch();
  const { toast } = useToast();

  const addToCart = () => {
    toast({ description: "Item added to cart", variant: "success" });
    dispatch(addItem(item));
  };

  return (
    <Button className="mt-6" onClick={() => addToCart()}>
      Add to Cart
    </Button>
  );
};

export default AddToCartButton;
