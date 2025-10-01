"use client"; 
import { events } from "@/app/utils/data";
import { Star, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import useCartStore from "@/store/cartStore";

const ProductCard = () => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="flex flex-row gap-10 overflow-x-auto">
      {events.map((event) => (
        <div
          key={event.id}
          className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition flex flex-col"
        >
          {/* Image cliquable */}
          <Link href={`/product/${event.slug}`}>
            <div className="relative w-full h-48 hover:rotate-[60deg] transition-all duration-500">
              <Image
                src={event.img}
                alt={event.title}
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Contenu */}
          <div className="p-6 flex flex-col gap-4 flex-1">
            <div className="flex justify-between items-center">
              <Link href={`/product/${event.slug}`}>
                <h2 className="text-xl font-semibold text-black hover:text-red-600">
                  {event.title}
                </h2>
              </Link>
              <span className="text-red-600 font-bold">${event.price}</span>
            </div>

            {/* Étoiles */}
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} color="#ffe014" fill="#ffe014" size={18} />
              ))}
            </div>

            {/* Description */}
            <p className="mt-2 text-gray-500 text-1xl">{event.description}</p>

            {/* Bouton Ajouter au panier */}
            <button
              onClick={() =>
                addToCart({
                  id: event.id,
                  title: event.title,
                  price: event.price,
                  img: event.img,
                  quantity: 1,
                })
              }
              className="bg-[#fbb200] hover:bg-red-600 font-bold text-lg text-white flex items-center justify-center gap-3 px-6 py-3 rounded-3xl mt-auto transition"
            >
              <ShoppingCart />
              ORDER NOW
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
