"use client";

import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import React from "react";

export const HeroComponents = () => {
  return (
    <>
      {/* SECTION HERO*/}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen px-6 md:px-12 lg:px-20 py-12 dark:bg-gray-900 transition-colors duration-300">
        
        {/* TEXTE */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 lg:w-1/2">
          <Image
            src="/cerise.png"
            alt="cerise"
            width={80}
            height={80}
            className="w-12 md:w-20 opacity-70 dark:opacity-50 self-start lg:self-auto"
          />

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold uppercase leading-tight text-gray-900 dark:text-gray-100">
            Handmade, With <br /> an Extra Pinch of{" "}
            <span className="text-red-600 dark:text-yellow-400">Love</span>
          </h1>

          <p className="text-gray-500 dark:text-gray-400 max-w-md leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>

          <button className="bg-[#fbb200] hover:bg-red-600 font-bold text-lg text-white flex items-center justify-center gap-3 px-6 py-3 rounded-3xl transition-all duration-300 dark:bg-yellow-500 dark:hover:bg-yellow-400">
            <ShoppingCart className="w-5 h-5" />
            ORDER NOW
          </button>
        </div>

        {/* IMAGE PRINCIPALE */}
        <div className="relative flex items-center justify-center mb-10 lg:mb-0 lg:w-1/2">
          {/* Cercle lumineux */}
          <div className="absolute w-[350px] h-[350px] sm:w-[550px] sm:h-[550px] lg:w-[700px] lg:h-[700px] rounded-full bg-[#feb900] dark:bg-yellow-600 blur-3xl opacity-50 right-[-100px] top-[10%] z-0" />

          {/* Image principale */}
          <Image
            src="/img1.png"
            alt="plat principal"
            width={500}
            height={500}
            className="relative z-10 w-[250px] sm:w-[350px] md:w-[400px] lg:w-[480px] object-contain"
          />

          {/* Éléments décoratifs */}
          <Image
            src="/img2.png"
            alt="décor"
            width={100}
            height={100}
            className="absolute left-[65%] top-[60%] z-10 w-[80px] sm:w-[100px]"
          />

          <Image
            src="/img3.png"
            alt="décor bas"
            width={100}
            height={100}
            className="absolute top-[85%] left-[55%] z-10 w-[70px] sm:w-[100px]"
          />
        </div>
      </section>

      {/*SECTION 2 */}
      <section className="flex flex-col lg:flex-row items-center justify-center gap-12 px-6 md:px-12 lg:px-20 py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="flex justify-center lg:justify-start lg:w-1/2">
          <Image
            src="/img4.png"
            alt="plat secondaire"
            width={400}
            height={400}
            className="w-[250px] sm:w-[350px] lg:w-[400px] object-contain"
          />
        </div>

        <div className="flex flex-col items-center lg:items-start lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-5xl font-semibold uppercase text-gray-900 dark:text-gray-100 leading-tight">
            Daily fresh and <br /> always tasty
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-5 leading-relaxed max-w-lg">
            There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form.
          </p>
        </div>
      </section>

      {/* SECTION 3  */}
      <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="text-center md:text-left md:w-2/3">
          <h3 className="text-2xl font-bold text-red-600 dark:text-yellow-400 flex items-center justify-center md:justify-start gap-3">
            Popular Dishes
            <span className="h-px w-12 bg-red-500 dark:bg-yellow-400"></span>
          </h3>
          <p className="mt-4 text-gray-900 dark:text-gray-100 font-bold uppercase text-3xl md:text-4xl">
            Browse Our Menu
          </p>
        </div>

        <div className="mt-8 md:mt-0 md:absolute md:right-[150px]">
          <Image
            src="/img5.png"
            alt="menu"
            width={120}
            height={60}
            className="w-[70px] sm:w-[100px] object-contain"
          />
        </div>
      </section>
    </>
  );
};

export default HeroComponents;
