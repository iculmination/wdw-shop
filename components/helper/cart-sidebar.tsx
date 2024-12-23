import { addItem, CartItem, removeItem } from "@/redux/cart.slice";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { SheetClose } from "../ui/sheet";
import { useDispatch } from "react-redux";

const CartSdebar = ({ items }: { items: CartItem[] }) => {
  const dispatch = useDispatch();

  const addToCart = (item: CartItem) => {
    dispatch(addItem(item));
  };

  const removeFromCart = (id: number) => {
    dispatch(removeItem({ id }));
  };

  return (
    <div className="mt-6 h-full mb-6">
      <h2 className="text-center font-bold text-lg mb-6">Your cart</h2>
      {items.length === 0 && (
        <div className="flex flex-col justify-center items-center w-full h-[80vh]">
          <Image
            src="/images/cart.svg"
            alt="empty cart"
            width={200}
            height={200}
            className="object-cover mx-auto"
          />
          <h3 className="mt-8 text-2xl font-semibold">Your cart is empty</h3>
        </div>
      )}
      {items.length > 0 && (
        <div className="">
          {items.map((item) => (
            <div
              className="pb-4 border-b-2 border-gray-300 border-opacity-60 p-4"
              key={item.id}
            >
              <div className="">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={60}
                  height={60}
                  className="object-cover mb-4"
                />
              </div>
              <div className="">
                <h4 className="text-sm w-4/5 font-semibold truncate">
                  {item.title}
                </h4>
                <h5 className="text-base text-blue-950 font-bold ">
                  ${(item.price * item.quantity).toFixed(2)}
                </h5>
                <h5 className="text-base font-bold mb-2">
                  Quantity: {item.quantity}
                </h5>
                <div className="flex items-center space-x-4">
                  <Button
                    onClick={() => removeFromCart(item.id)}
                    size="sm"
                    variant="destructive"
                  >
                    {item.quantity > 1 ? "Remove one" : "Remove"}
                  </Button>
                  <Button onClick={() => addToCart(item)} size="sm">
                    Add
                  </Button>
                </div>
              </div>
            </div>
          ))}

          <Link href="/cart">
            <SheetClose className="w-full" asChild>
              <Button className="w-full my-6">View Cart</Button>
            </SheetClose>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartSdebar;
