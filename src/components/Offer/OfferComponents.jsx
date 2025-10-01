"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { ChevronRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="relative bg-white py-16 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Image de gauche */}
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
              className="rounded-full object-contain"
            />
          </motion.div>

          {/* cerise animée */}
          <motion.div
            className="absolute top-10 left-0"
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <Image src="/cerise.png" alt="Olive" width={50} height={50} />
          </motion.div>

          {/* Oignon animé */}
          <motion.div
            className="absolute bottom-10 left-6"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <Image src="/oignon.png" alt="Onion" width={60} height={60} />
          </motion.div>
        </div>

        {/* Texte de droite */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h4 className="text-red-500 font-semibold flex items-center gap-2">
            Our Story <span className="h-px w-12 bg-red-500 inline-block"></span>
          </h4>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
            The Pizzon Has Excellent Of <br /> Quality Foods
          </h2>
          <p className="text-gray-600 leading-relaxed text-2xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-500 hover:bg-red-500 flex text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300"
          >
            READ MORE <ChevronRight/>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
