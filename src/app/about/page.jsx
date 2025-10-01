"use client";
import StrengthSectionComponents from '@/components/StrengthSection/StrengthSectionComponents';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import TestimonialsComponents from "@/components/Testimonials/TestimonialsComponents";
import FooterComponents from '@/components/Footer/FooterComponents';

export const ProductPage = () => {
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
              <h1 className="text-5xl font-bold text-gray-900">About Us</h1>
              <p className="mt-4 text-gray-500 text-2xl">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
    
            <div className="mt-8 text-end m-40 text-2xl">
              <Link href="/" className="text-gray-500 hover:text-gray-700">
                Home
              </Link>
              <span className="mx-4 text-gray-400">/</span>
              <span className="text-red-500 font-medium">About us</span>
            </div>
          </section>

        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Texte à gauche */}
      <div>
        <h4 className="text-red-500 font-semibold mb-2 text-1xl flex items-center gap-2">
          Our Story <span className="flex-1  bg-red-400"></span>
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          The Story About Pizzon
        </h2>
        <p className="text-gray-600 mb-8 text-1xl">
          Lorem ipsum dolor sit amet, colur consectetur omni adipisicing elit,
          sed do eiusmod tempor incididunt labore et magna aliqua.
        </p>
        {/* Sous-sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-1xl mb-2">Our Family Name</h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur omni adipisicing elit, sed
              do eiusmod tempor sol incididunt ut labore et exercitation.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-1xl mb-2">Our Journey</h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur omni adipisicing elit, sed
              do eiusmod tempor sol incididunt ut labore et exercitation.
            </p>
          </div>
          {/* Image à gauche */}
          <div className="flex flex-col gap-3">
            <Image
              src="/img19.png"
              alt="Girl eating pizza"
              width={400}
              height={300}
              className="rounded-2xl"
            />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Food and Fun</h3>
            <p className="text-gray-600 text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur omni adipisicing elit, sed
              do eius exercitation.
            </p>
            <p className="text-red-500 font-bold italic text-xl">Original</p>
          </div>
        </div>
      </div>

      {/* Image à droite */}
      <div>
        <Image
          src="/img18.png"
          alt="Pizza board"
          width={500}
          height={700}
          className="rounded-3xl"
        />
      </div>
    </section>
    <StrengthSectionComponents/>
    <TestimonialsComponents/>

    <FooterComponents/>

    
    </>
  )
}
export default ProductPage;