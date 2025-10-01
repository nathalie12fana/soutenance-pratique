"use client";

import useCartStore from "@/store/cartStore";
import Image from "next/image";
import { X, Trash } from "lucide-react";
import React from "react";

const CartDrawer = ({ onClose }) => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity,clearCart } = useCartStore();

  // Calcul du total
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="fixed top-0 right-0 w-96 h-full bg-white shadow-lg flex flex-col">
      {/* HEADER */}
      <div className="flex justify-between items-center px-4 py-3 border-b">
        <h2 className="text-lg font-bold">SHOPPING CART</h2>
        <button onClick={onClose}>
          <X />
        </button>
      </div>

      {/* CONTENU */}
      <div className="flex-1 overflow-y-auto">
        {cart.length === 0 ? (
          <p className="text-center text-gray-500 mt-6">Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between px-4 py-3 border-b"
            >
              {/* IMAGE + DETAILS */}
              <div className="flex items-center gap-3">
                <Image
                  src={item.img || "/placeholder.png"}  // ✅ utiliser "img" et fallback
                  alt={item.title || "Product"}
                  width={100}
                  height={50}
                  className="rounded"
                />
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-gray-500">${item.price}</p>
                </div>
              </div>

              {/* QUANTITY + DELETE */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="px-2 py-1 border rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="px-2 py-1 border rounded"
                >
                  +
                </button>
                <button onClick={() => removeFromCart(item.id)}>
                  <Trash className="text-red-500" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* FOOTER */}
      <div className="border-t p-4">
        <div className="flex justify-between mb-2">
          <span className="font-semibold">Subtotal:</span>
          <span className="font-bold">${subtotal.toFixed(2)}</span>
        </div>    
              
        <p className="text-xs text-gray-500 mb-4">
          Taxes and shipping calculated at checkout
        </p>
        <div className="flex gap-2">
          <button className="flex-1 bg-yellow-400 hover:bg-red-600 text-black font-bold py-2 rounded-3xl"
          onClick={clearCart}>
             Clear Cart
          </button>
          <button className="flex-1 bg-red-600 hover:bg-yellow-400 text-white font-bold py-2 rounded-3xl">
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
