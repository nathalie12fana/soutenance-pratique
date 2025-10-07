"use client";

import { events } from "@/app/utils/data";
import { Star, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import useCartStore from "@/store/cartStore";

const ProductCard = () => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-8 sm:gap-10 overflow-x-auto px-4 py-10 bg-white dark:bg-gray-900 transition-colors duration-300">
      {events.map((event) => (
        <div
          key={event.id}
          className="w-full sm:w-[300px] md:w-[320px] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
        >
          {/* Image cliquable */}
          <Link href={`/product/${event.slug}`} className="relative w-full h-52 sm:h-48 md:h-56 overflow-hidden group">
            <Image
              src={event.img}
              alt={event.title}
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-500"
            />
          </Link>

          {/* Contenu */}
          <div className="p-6 flex flex-col gap-4 flex-1">
            {/* Titre et prix */}
            <div className="flex justify-between items-center">
              <Link href={`/product/${event.slug}`}>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 hover:text-red-600 dark:hover:text-yellow-400 transition-colors">
                  {event.title}
                </h2>
              </Link>
              <span className="text-red-600 dark:text-yellow-400 font-bold text-lg">
                ${event.price}
              </span>
            </div>

            {/* Étoiles */}
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} color="#facc15" fill="#facc15" size={18} />
              ))}
            </div>

            {/* Description */}
            <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
              {event.description}
            </p>

            {/* Bouton Ajouter au panier */}
            <button
              onClick={() =>
                addToCart({
                  id: event.id,
                  title: event.title,
                  price: event.price,
                  img: event.img,
                })
              }
              className="bg-[#fbb200] hover:bg-red-600 dark:bg-yellow-500 dark:hover:bg-yellow-400 font-bold text-base sm:text-lg text-white flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-6 py-2 sm:py-3 rounded-3xl mt-auto transition-colors duration-300"
            >
              <ShoppingCart size={20} />
              ORDER NOW
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
