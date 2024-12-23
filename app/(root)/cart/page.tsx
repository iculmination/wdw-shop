"use client";

import { Button } from "@/components/ui/button";
import { addItem, CartItem, removeItem } from "@/redux/cart.slice";
import { RootState } from "@/redux/store";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const CartPage = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const { user } = useUser();

  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = items
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);
  const vat = (+totalPrice * 0.15).toFixed(2);
  const total = (+totalPrice + +vat).toFixed(2);

  const addToCart = (item: CartItem) => {
    dispatch(addItem(item));
  };

  const removeFromCart = (id: number) => {
    dispatch(removeItem({ id }));
  };

  return (
    <div className="mt-8 min-h-[60vh]">
      {items.length < 1 && (
        <div className="flex items-center w-full h-[80vh] flex-col justify-center">
          <Image
            src="/images/cart.svg"
            alt="empty cart"
            width={400}
            height={400}
            className="object-cover mx-auto"
          />
          <h1 className="mt-8 text-2xl font-semibold mb-4">
            Your cart is empty
          </h1>
          <Link href="/">
            <Button>Shop now</Button>
          </Link>
        </div>
      )}
      {items.length > 0 && (
        <div className="md:w-4/5 w-[95%] mx-auto grid grid-cols-1 xl:grid-cols-6 gap-12">
          <div className="rounded-lg shadow-md overflow-hidden xl:col-span-4">
            <h1 className="p-4 text-xl sm:text-2xl md:text-3xl font-bold text-white bg-blue-700">
              Your Cart ({totalQuantity} items)
            </h1>
            {items.map((item) => {
              return (
                <div className="" key={item.id}>
                  <div className="flex pb-6 mt-2 p-5 border-b-[1.5px] border-opacity-25 border-color-gray-700 items-center space-x-10">
                    <div className="">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={180}
                        height={180}
                      />
                    </div>
                    <div className="">
                      <h2 className="md:text-xl text-base font-bold text-black">
                        {item.title}
                      </h2>
                      <p className="md:text-lg text-sm font-semibold">
                        Category: {item.category}
                      </p>
                      <p className="md:text-2xl text-lg font-bold text-blue-950">
                        ${item.price.toFixed(2)}
                      </p>
                      <p className="md:text-lg text-sm font-semibold">
                        Quantity: {item.quantity}
                      </p>
                      <div className="flex items-center mt-4 space-x-2">
                        <Button onClick={() => addToCart(item)}>
                          Add More
                        </Button>
                        <Button
                          variant="destructive"
                          onClick={() => removeFromCart(item.id)}
                        >
                          {item.quantity > 1 ? "Remove one" : "Remove"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="xl:col-span-2">
            <div className="bg-indigo-950 sticky top-[25vh] p-6 rounded-lg">
              <h3 className="text-center my-8 text-white text-3xl font-semibold">
                Summary
              </h3>
              <div className="w-full h-[1.2px] bg-white opacity-20"></div>
              <div className="flex mt-4 text-xl uppercase font-semibold text-white items-center justify-between">
                <span className="">Subtotal</span>
                <span className="">${totalPrice}</span>
              </div>
              <div className="flex my-10 text-xl uppercase font-semibold text-white items-center justify-between">
                <span className="">VAT</span>
                <span className="">${vat}</span>
              </div>
              <div className="flex mb-6 text-xl uppercase font-semibold text-white items-center justify-between">
                <span className="">Shipping</span>
                <span className="">Free</span>
              </div>
              <div className="w-full h-[1.2px] bg-white opacity-20"></div>
              <div className="flex my-6 text-xl uppercase font-semibold text-white items-center justify-between">
                <span className="">Total</span>
                <span className="">${total}</span>
              </div>
              {!user && (
                <Link href="/sign-in">
                  <Button className="bg-orange-500 hover:bg-orange-400 w-full">
                    Sign in to Checkout
                  </Button>
                </Link>
              )}
              {user && (
                <Button className="w-full bg-orange-500 hover:bg-orange-400">
                  PayPal
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
