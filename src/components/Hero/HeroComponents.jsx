"use client";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import React from "react";

export const HeroComponents = () => {
  return (
    <>
      {/* HERO SECTION */}
      <div className="flex flex-col justify-center h-screen pt-5 md:h-[calc(100vh-5rem)] lg:flex-row relative overflow-hidden ">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 flex items-center justify-center flex-col gap-4 text-black lg:h-full lg:w-1/2 px-6 md:px-16">
          <Image
            src="/cerise.png"
            alt="cerise"
            width={100}
            height={100}
            className="absolute top-[30%] left-[20px]"
          />
          <h1 className="text-5xl text-center uppercase font-bold md:text-6xl xl:text-7xl">
            Handmade, With <br/> an Extra Pinch of{" "}
            <span className="text-red-600">Love</span>
          </h1>
          <p className="text-gray-500 text-center max-w-md">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <button className="bg-[#fbb200] hover:bg-red-600 font-bold text-lg text-white flex items-center justify-center gap-3 px-6 py-3 rounded-3xl mt-6 transition">
            <ShoppingCart />
            ORDER NOW
          </button>
        </div>

        {/* IMAGE CONTAINER */}
        <div className="relative flex items-center justify-center lg:w-1/2">
          <Image
            src="/img1.png"
            alt="plat principal"
            width={500}
            height={500}
            className="relative z-10"
          />
          {/* Cercle décoratif */}
          <div className="w-[750px] h-[850px] rounded-full bg-[#feb900] absolute right-[-300px] top-[10%] z-0"/>
          <Image
            src="/img2.png"
            alt="décor"
            width={150}
            height={150}
            className="absolute left-[80%] top-[60%] z-10"
          />
          <Image
            src="/img3.png"
            alt="décor bas"
            width={150}
            height={150}
            className="absolute top-[84%] left-[480px] z-10"
          />
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="flex flex-col lg:flex-row items-center gap-20 px-6 py-20">
        <Image src="/img4.png" alt="plat secondaire" width={400} height={200} />
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="text-5xl font-semibold text-center lg:text-left uppercase">
            Daily fresh and <br /> always tasty
          </h1>
          <p className="text-gray-400 mt-4 text-center lg:text-left">
            There are many variations <br/> of passages of Lorem <br/> Ipsum available, but
            the majority have <br/> suffered alteration in some form.
          </p>
        </div>
      </div>

      {/* SECTION 3 */}
      <div className="flex items-center justify-between px-6 py-12">
        <div className="m-[80px]">
          <h1 className="text-2xl font-bold text-red-600">
            Popular Dishes <span className="h-px w-12 bg-red-500 inline-block"></span>
          </h1>
          <br/>
          <p className="text-black font-bold uppercase text-4xl">Browse Our Menu</p>
        </div>
        <div className="absolute right-[199px]">
          <Image src="/img5.png" alt="menu" width={100} height={50} />
        </div>
      </div>

     
    </>
  );
};

export default HeroComponents;
