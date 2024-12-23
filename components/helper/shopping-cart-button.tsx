"use client";

import { RootState } from "@/redux/store";
import { ShoppingBagIcon } from "lucide-react";
import { useSelector } from "react-redux";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";

const ShoppingCartButton = () => {
  const items = useSelector((state: RootState) => state.cart.items);

  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <Sheet>
      <SheetTrigger className="relative cursor-pointer">
        <span className="absolute -top-3 -right-2 w-6 h-6 bg-red-500 text-center flex items-center justify-center flex-col text-xs text-white rounded-full select-none">
          {totalQuantity}
        </span>
        <ShoppingBagIcon size={26} />
      </SheetTrigger>
      <SheetContent>
        <SheetTitle className="hidden">Cart</SheetTitle>
        <div className=""></div>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCartButton;
