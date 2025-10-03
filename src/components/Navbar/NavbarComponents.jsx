"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, Search, ShoppingCart } from "lucide-react";
import MenueComponents from "../Menue/MenueComponents";
import useCartStore from "@/store/cartStore";
import CartDrawer from "../CartDrawer";
import { ModeToggle } from "../ModeToggle/ModeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'


export const NavbarComponents = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cart = useCartStore((state) => state.cart);
  return (
    <nav className="bg-white border-b-2 border-b-gray-100 fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center px-6 md:px-12 py-4">
        {/* LOGO */}
        <Link href="/">
          <div className="flex items-center">
            <Image src="/login.png" alt="logo" width={60} height={50} />
          </div>
        </Link>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex gap-6 text-black items-center font-medium">
          <li>
            <Link href="/" className="underline underline-offset-8 text-red-600">
              HOME
            </Link>
          </li>
          <li>
            <Link href="/shop" className="hover:underline underline-offset-8">
              SHOP
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline underline-offset-8">
              ABOUT
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline underline-offset-8">
              CONTACT
            </Link>
          </li>
          <li>
            <div className="flex ml-6 gap-4 cursor-pointer">
              <Link href="ProductSearch">
              <Search className="text-black hover:text-red-600" />
                </Link>
            <div className="relative" onClick={() => setIsOpen(true)}>
              <ShoppingCart className="text-black hover:text-red-600"/>
              {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-1">
                {cart.length}
               </span>
               )}
            </div>
            </div>
          </li>
          <DropdownMenu>
              <DropdownMenuTrigger asChild>
              <Menu  color="black" size={30}/>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="start">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    {/*sign in  */}
                    <SignedOut>  <SignInButton/> </SignedOut>
                    {/*sign in user */}
                    <DropdownMenuShortcut></DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Billing
                    <DropdownMenuShortcut></DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Settings
                    <DropdownMenuShortcut></DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Keyboard shortcuts
                    <DropdownMenuShortcut></DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      Invite users
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem>Email</DropdownMenuItem>
                        <DropdownMenuItem>Message</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>More...</DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuItem>
                    New Team
                    <DropdownMenuShortcut></DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>GitHub</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuItem disabled>API</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Log out
                  <DropdownMenuShortcut></DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
             <ModeToggle />
        </ul>

        {/* MENU MOBILE */}
        <div className="md:hidden">
          <MenueComponents />
        </div>
      </div>
      {isOpen && <CartDrawer onClose={() => setIsOpen(false)} />}
        
    </nav>
  );
};

export default NavbarComponents;
