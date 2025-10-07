"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, Search, ShoppingCart } from "lucide-react";
import MenueComponents from "../Menue/MenueComponents";
import useCartStore from "@/store/cartStore";
import CartDrawer from "../CartDrawer";
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
  SignedOut,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";
import { ModeToggle } from "../ModeToggle/ModeToggle";

export const NavbarComponents = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cart = useCartStore((state) => state.cart);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="flex justify-between items-center px-6 md:px-12 py-4">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/login.png" alt="logo" width={55} height={50} />
          
        </Link>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex items-center gap-6 font-medium text-gray-800 dark:text-gray-100">
          <li>
            <Link
              href="/"
              className="text-red-600 underline underline-offset-8 decoration-2 font-semibold"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              href="/shop"
              className="hover:text-red-600 transition-colors duration-200"
            >
              SHOP
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-red-600 transition-colors duration-200"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-red-600 transition-colors duration-200"
            >
              CONTACT
            </Link>
          </li>

          {/* ACTION ICONS */}
          <li className="flex items-center gap-5 ml-6">
            {/* Recherche */}
            <Link href="/ProductSearch">
              <Search className="w-5 h-5 hover:text-red-600 transition-colors duration-200 cursor-pointer" />
            </Link>

            {/* Panier */}
            <div className="relative cursor-pointer" onClick={() => setIsOpen(true)}>
              <ShoppingCart className="w-5 h-5 hover:text-red-600 transition-colors duration-200" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-[6px] py-[1px]">
                  {cart.length}
                </span>
              )}
            </div>

            {/* Menu utilisateur */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Menu
                  className="w-6 h-6 cursor-pointer hover:text-red-600 transition-colors duration-200"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <DropdownMenuLabel className="text-gray-700 dark:text-gray-100">
                  My Account
                </DropdownMenuLabel>
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <SignedOut>
                      <SignInButton />
                    </SignedOut>
                    <SignedIn>
                      <UserButton afterSignOutUrl="/" />
                    </SignedIn>
                  </DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Support</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>GitHub</DropdownMenuItem>
                <DropdownMenuItem disabled>API</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Bouton thème */}
            <ModeToggle />
          </li>
        </ul>

        {/* MENU MOBILE */}
        <div className="md:hidden flex items-center gap-4">
          <ModeToggle />
          <MenueComponents />
        </div>
      </div>

      {/* Drawer du panier */}
      {isOpen && <CartDrawer onClose={() => setIsOpen(false)} />}
    </nav>
  );
};

export default NavbarComponents;
