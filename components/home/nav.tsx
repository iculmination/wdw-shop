import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchBox from "../helper/search-box";
import { HeartIcon, UserIcon } from "lucide-react";
import ShoppingCartButton from "../helper/shopping-cart-button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Nav = () => {
  return (
    <header className="h-[12vh] sticky top-0 z-[1] bg-white shadow-md">
      <nav className="flex items-center justify-between w-[95%] md:w-4/5 mx-auto h-full">
        {/* logo */}
        <Link href="/">
          <Image src="/images/logo.png" alt="logo" width={140} height={140} />
        </Link>
        {/* icons */}
        <div className="flex items-center space-x-6">
          {/* SearchBox */}
          <SearchBox />
          <HeartIcon size={26} cursor="pointer" />
          <ShoppingCartButton />
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <UserIcon size={26} cursor="pointer" />
            </SignInButton>
          </SignedOut>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
