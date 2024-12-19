import { ShoppingBagIcon } from "lucide-react";

const ShoppingCartButton = () => {
  return (
    <div className="relative cursor-pointer">
      <span className="absolute -top-3 -right-2 w-6 h-6 bg-red-500 text-center flex items-center justify-center flex-col text-xs text-white rounded-full select-none">
        6
      </span>
      <ShoppingBagIcon size={26} />
    </div>
  );
};

export default ShoppingCartButton;
