"use client";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Johan Doe",
    text: "The service was exceptional! The food arrived hot and fresh, and the flavors were absolutely amazing. Highly recommended!",
    image: "/johan.png",
  },
  {
    id: 2,
    name: "Alex Saanu",
    text: "I’ve ordered several times and each experience is consistently great. Excellent delivery and friendly service every time.",
    image: "/alex.png",
  },
  {
    id: 3,
    name: "Jona Leoner",
    text: "Fresh, flavorful, and fast! Their meals never disappoint. You can really tell they care about quality.",
    image: "/jonas.png",
  },
  {
    id: 4,
    name: "Takar Bowa",
    text: "Delicious food with perfect taste and quick delivery. A go-to restaurant for any craving. Five stars from me!",
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
    <section className="relative bg-[#fff8f5] py-20 overflow-hidden">
      {/* En-tête */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between mb-16">
        {/* Image décorative */}
        <div className="hidden md:block">
          <Image
            src="/img20.png"
            alt="Decorative"
            width={90}
            height={90}
            className="rounded-full shadow-lg"
          />
        </div>

        {/* Texte d’introduction */}
        <div className="text-center md:text-left">
          <p className="text-red-500 font-semibold text-lg tracking-wide">
            Customer Feedback
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-2">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 mt-3 max-w-md">
            We take pride in delivering high-quality food and unforgettable
            experiences. Here’s what our customers think about us.
          </p>
        </div>

        {/* Boutons de navigation */}
        <div className="flex gap-4 mt-6 md:mt-0">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-red-100 text-red-500 hover:bg-red-500 hover:text-white transition duration-300 flex items-center justify-center"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-red-100 text-red-500 hover:bg-red-500 hover:text-white transition duration-300 flex items-center justify-center"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-500 ease-in-out">
          {testimonials.map((item, i) => (
            <div
              key={item.id}
              className={`bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl text-center p-8 transition-all duration-500 ${
                index === i ? "opacity-100 translate-y-0" : "opacity-70 scale-95"
              }`}
            >
              {/* Image */}
              <div className="flex justify-center mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-full shadow-md"
                />
              </div>

              
              <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
              <p className="text-gray-600 mt-3 leading-relaxed">{item.text}</p>

             
              <div className="flex justify-center mt-5 text-yellow-400">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image décorative flottante */}
      <div className="absolute bottom-0 left-0 opacity-30 hidden md:block">
        <Image
          src="/pizza8.png"
          alt="Pizza decorative"
          width={220}
          height={220}
          className="object-contain animate-bounce-slow"
        />
      </div>
    </section>
  );
}
