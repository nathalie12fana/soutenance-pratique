"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FooterComponents from "@/components/Footer/FooterComponents";
import { ShoppingCart, ChevronRight } from "lucide-react";
import { motion } from "framer-motion"; // ✅ import Framer Motion


const products = [
  { id: 1, name: "Shrimp foods", price: 35, img: "/salade.png" },
  { id: 2, name: "French mayos", price: 65, img: "/pomme.png" },
  { id: 3, name: "Cheese pizza", price: 45, img: "/citron.png" },
  { id: 4, name: "Russian rolls", price: 25, img: "/burger.png" },
  { id: 5, name: "Seafood burgers", price: 45, img: "/burger2.png" },
  { id: 6, name: "Sandwich soup", price: 45, img: "/sandwicht.png" },
];


const ShopHeader = () => {
  const [clickedId, setClickedId] = useState(null);

  return (
    <>
    
      {/* --- HEADER --- */}
      <section className="relative bg-[#fff9f2] py-16 overflow-hidden">
        <Link href="/">
          <div className="absolute top-6 left-6 flex items-center space-x-2">
            <Image src="/pizza.png" alt="logo" width={50} height={50} />
          </div>
        </Link>
        {/* 🍅 Légumes décoratifs */} 
        <Image src="/header.png" 
        alt="tomato" width={200} height={80} 
        className="absolute top-0 left-1/2 -translate-x-1/2" /> 
        <Image src="/oignon.png" 
        alt="onion" width={60} height={60} 
        className="absolute top-10 right-[170px]" /> 
        <Image src="/basil.png" alt="basil" width={70} height={60} 
        className="absolute bottom-[270px] right-0" /> 
        <Image src="/img5.png" alt="basil" width={60} height={60} className="absolute bottom-10 right-20" /> 
        <Image src="/cerise.png" alt="olive" width={50} height={50} className="absolute top-40 left-0" />

        <div className="text-center max-w-2xl mx-auto mt-10">
          <h1 className="text-5xl font-bold text-gray-900">Shop List</h1>
          <p className="mt-4 text-gray-500 text-2xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        <div className="mt-8 text-end m-40 text-2xl">
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            Home
          </Link>
          <span className="mx-4 text-gray-400">/</span>
          <span className="text-red-500 font-medium">Shop List</span>
        </div>
      </section>

      {/* --- PRODUCTS --- */}
      <section className="py-12">
        <div className="flex justify-between items-center mb-8">
          <button className="bg-yellow-400 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-full flex items-center gap-2 shadow m-4">
            <span>⚙️</span> FILTER
          </button>
          <div className="flex justify-center items-center gap-4">
            <p className="text-black font-bold text-2xl">
              Showing all {products.length} results
            </p>
            <select className="border rounded-full px-4 py-2 text-gray-600">
              <option>Default Sorting</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* --- GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              onClick={() =>
                setClickedId(clickedId === product.id ? null : product.id)
              }
              className="rounded-2xl border border-gray-100 p-6 text-center shadow-sm cursor-pointer"
            >
              {/* IMAGE avec animation */}
              <motion.div
                animate={{
                  scale: clickedId === product.id ? 1.2 : 1,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="flex justify-center mb-4"
              >
                <Image
                  src={product.img}
                  alt={product.name}
                  width={250}
                  height={250}
                  className="rounded-lg object-cover"
                />
              </motion.div>

              {/* NOM + PRIX */}
              <div className="flex justify-between">
                <h3 className="text-lg hover:text-red-600 font-semibold">
                  {product.name}
                </h3>
                <p className="text-red-500 font-bold mb-4">${product.price}.00</p>
              </div>

              {/* Étoiles */}
              <div className="flex gap-1 my-2">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
              </div>

              {/* Description */}
              <p className="text-gray-500 text-2xl mb-2">
                All the Lorem Ipsum generators on the Internet tend to repeat
              </p>

              {/* BOUTON */}
              <button className="bg-yellow-400 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-full flex items-center gap-2 mx-auto transition">
                <ShoppingCart size={18} /> ORDER NOW
              </button>
            </motion.div>
          ))}
        </div>

        {/* --- PAGINATION --- */}
        <div className="flex justify-center items-center gap-3 py-8">
          <button className="w-10 h-10 rounded-full bg-yellow-400 text-white font-semibold flex items-center justify-center">
            1
          </button>
          <button className="w-10 h-10 rounded-full bg-black text-white font-semibold flex items-center justify-center hover:bg-yellow-500 transition">
            2
          </button>
          <button className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-yellow-500 transition">
            <ChevronRight size={18} />
          </button>
        </div>
      </section>

      <FooterComponents />
    </>
  );
};

export default ShopHeader;
