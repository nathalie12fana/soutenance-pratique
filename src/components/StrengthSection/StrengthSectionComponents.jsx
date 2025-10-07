"use client";

import { Utensils, Flower2, Smile, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";

const StrengthSectionComponents = () => {
  const strengths = [
    {
      icon: <Utensils size={50} className="text-red-500" />,
      title: "All kinds of Foods",
      desc: "We offer a wide range of delicious dishes from around the world, crafted with passion and authenticity.",
    },
    {
      icon: <Flower2 size={50} className="text-red-500" />,
      title: "Fresh Foods",
      desc: "Only the freshest ingredients make it to your plate — ensuring quality, taste, and health.",
    },
    {
      icon: <Smile size={50} className="text-red-500" />,
      title: "Best Taste",
      desc: "Our chefs blend tradition and innovation to create a flavor experience you’ll never forget.",
    },
    {
      icon: <MapPin size={50} className="text-red-500" />,
      title: "On Time Delivery",
      desc: "We value your time — our delivery team ensures your order arrives hot and fast, right on schedule.",
    },
  ];

  return (
    <section className="relative bg-[#fff8f5] py-20 px-6 md:px-20 overflow-hidden">
      {/* En-tête */}
      <div className="text-center mb-16">
        <h4 className="text-red-500 font-semibold flex items-center justify-center gap-3 mb-2">
          <span className="h-[2px] w-12 bg-red-500 inline-block"></span>
          Our Strength
          <span className="h-[2px] w-12 bg-red-500 inline-block"></span>
        </h4>
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
          Why We Are The Best?
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Discover what makes our restaurant stand out — from fresh ingredients to exceptional service.
        </p>
      </div>

      {/* Grille des atouts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {strengths.map((item, index) => (
          <div
            key={index}
            className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-red-100 p-4 rounded-full group-hover:bg-red-500 transition-colors duration-300">
                <div className="text-red-500 group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Image décorative */}
      <div className="absolute top-0 right-0 opacity-30 md:opacity-100 hidden md:block">
        <Image
          src="/pizza8.png"
          alt="Decorative Pizza"
          width={250}
          height={250}
          className="object-contain animate-bounce-slow"
        />
      </div>
    </section>
  );
};

export default StrengthSectionComponents;
