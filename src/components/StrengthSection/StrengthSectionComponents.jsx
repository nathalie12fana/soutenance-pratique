"use client";

import { Utensils, Flower2, Smile, MapPin } from "lucide-react"; // Icônes
import Image from "next/image";
import React from "react";

const StrengthSectionComponents = () => {
  const strengths = [
    {
      icon: <Utensils size={50} className="text-red-500" />,
      title: "All kinds of Foods",
      desc: "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
    },
    {
      icon: <Flower2 size={50} className="text-red-500" />,
      title: "Fresh Foods",
      desc: "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
    },
    {
      icon: <Smile size={50} className="text-red-500" />,
      title: "Best Taste",
      desc: "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
    },
    {
      icon: <MapPin size={50} className="text-red-500" />,
      title: "On Time Delivery",
      desc: "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
    },
  ];

  return (
    <section className="relative bg-[#fdf9f2] py-20 px-6 md:px-20 overflow-hidden">
      {/* Texte principal */}
      <div className="text-center mb-12">
        <h4 className="text-red-500 font-semibold flex items-center justify-center gap-2">
          Our Strength <span className="h-px w-12 bg-red-500 inline-block"></span>
        </h4>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
          Why We Are The Best?
        </h2>
      </div>

      {/* Grille des atouts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {strengths.map((item, index) => (
          <div key={index} className="space-y-4">
            <div className="flex justify-center">{item.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
            <p className="text-gray-600 text-2xl leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Image pizza décorative */}
      <div className="absolute top-0 right-0 hidden md:block">
        <Image
          src="/pizza8.png" // mets ton image dans /public
          alt="Pizza Slice"
          width={250}
          height={250}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default StrengthSectionComponents;
