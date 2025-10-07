"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { ChevronRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="relative bg-white dark:bg-gray-900 py-16 px-6 md:px-20 transition-colors duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 lg:gap-16">
        
        {/* IMAGE GAUCHE */}
        <div className="flex justify-center relative">
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/pizza7.png"
              alt="Pizza"
              width={500}
              height={500}
              className="rounded-full object-contain w-[250px] sm:w-[350px] md:w-[450px] lg:w-[500px]"
            />
          </motion.div>

          
          <motion.div
            className="absolute top-5 sm:top-10 left-[10%]"
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <Image
              src="/cerise.png"
              alt="Cerise"
              width={40}
              height={40}
              className="w-[30px] sm:w-[40px]"
            />
          </motion.div>

          
          <motion.div
            className="absolute bottom-5 left-[15%]"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <Image
              src="/oignon.png"
              alt="Oignon"
              width={60}
              height={60}
              className="w-[40px] sm:w-[50px] md:w-[60px]"
            />
          </motion.div>
        </div>

        {/* TEXTE DROITE */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center md:text-left"
        >
          
          <h4 className="text-red-500 dark:text-yellow-400 font-semibold flex items-center justify-center md:justify-start gap-2">
            Our Story
            <span className="h-px w-12 bg-red-500 dark:bg-yellow-400 inline-block"></span>
          </h4>

          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-gray-100 leading-snug">
            The Pizzon Has Excellent <br className="hidden sm:block" /> Of Quality Foods
          </h2>

          
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base sm:text-lg md:text-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. It has been the industry's standard since the 1500s,
            surviving centuries and adapting to modern technology while
            remaining timeless and delicious — just like our pizza!
          </p>

          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-500 hover:bg-red-500 dark:bg-yellow-600 dark:hover:bg-yellow-500 flex items-center justify-center gap-2 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300 mx-auto md:mx-0"
          >
            READ MORE
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
