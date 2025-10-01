"use client";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Johan Doe",
    text: "Lorem Ipsum is simply dummy text of the print book. It has survived not only five centuries, but also the leap",
    image: "/johan.png", // 👉 mets tes vraies images dans public/images
  },
  {
    id: 2,
    name: "Alex Saanu",
    text: "Lorem Ipsum is simply dummy text of the print book. It has survived not only five centuries, but also the leap",
    image: "/alex.png",
  },
  {
    id: 3,
    name: "Jona Leoner",
    text: "Lorem Ipsum is simply dummy text of the print book. It has survived not only five centuries, but also the leap",
    image: "/jonas.png",
  },
  {
    id: 4,
    name: "Takar Bowa",
    text: "Lorem Ipsum is simply dummy text of the print book. It has survived not only five centuries, but also the leap",
    image: "/lucas.png",
  },
];

export default function TestimonialsComponents() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 relative bg-white">
      
      {/* Header avec titre + flèches */}
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 mb-12">
        {/*Image de gauche */}
        <div>
          <Image
                src="/img20.png"
                alt=""
                width={80}
                height={80}
                className="rounded-full"
              />
        </div>

        <div>
          <p className="text-red-500 font-medium relative inline-block text-1xl">
            Customer Feedback
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Client Testimonials
          </h2>
        </div>

        

        {/* Flèches navigation */}
        <div className="flex gap-3">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
      {/* Cartes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md border p-6 text-center transition hover:shadow-lg"
          >
            <div className="flex justify-center">
              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
            <h3 className="font-semibold text-lg mt-4">{item.name}</h3>
            <p className="text-gray-600 text-2xl mt-3">{item.text}</p>

            {/* Étoiles */}
            <div className="flex justify-center mt-4 text-yellow-500">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
            </div>
          </div>
        ))}
      </div>
   
    </section>
  );
}
