"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ReservationComponents() {
  return (
    <section className="relative bg-[#fff8f5] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* En-tête */}
          <div>
            <p className="text-red-500 font-semibold text-lg tracking-wide">
              Reservation
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-2 leading-snug">
              Book Your Table <br /> in Just a Few Clicks
            </h2>
            <p className="text-gray-600 mt-4 max-w-md">
              Planning a meal with friends, family, or colleagues? Reserve your
              table now and enjoy our signature dishes in a warm, welcoming
              atmosphere.
            </p>
          </div>

          {/* Formulaire */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="Full Name*"
              className="border border-gray-300 rounded-lg px-4 py-3 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-300"
            />
            <input
              type="email"
              placeholder="Email Address*"
              className="border border-gray-300 rounded-lg px-4 py-3 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-300"
            />
            <input
              type="tel"
              placeholder="Phone Number*"
              className="border border-gray-300 rounded-lg px-4 py-3 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-300"
            />
            <input
              type="time"
              placeholder="Time*"
              className="border border-gray-300 rounded-lg px-4 py-3 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-300"
            />
            <input
              type="date"
              placeholder="Date*"
              className="border border-gray-300 rounded-lg px-4 py-3 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-300"
            />
            <input
              type="number"
              placeholder="Number of Guests*"
              min={1}
              className="border border-gray-300 rounded-lg px-4 py-3 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-300"
            />
          </form>

          {/* Bouton */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 px-10 py-3 bg-red-500 hover:bg-yellow-400 text-white hover:text-gray-900 font-semibold rounded-full shadow-lg transition-all duration-300"
          >
            BOOK NOW
          </motion.button>
        </motion.div>

        

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center relative"
        >
          <div className="relative">
            <Image
              src="/pizza7.png"
              alt="Delicious pizza"
              width={550}
              height={500}
              className="rounded-full object-contain drop-shadow-xl"
            />

            
            <motion.div
              className="absolute -top-6 -right-6"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <Image
                src="/cerise.png"
                alt="Cherry decoration"
                width={60}
                height={60}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Décoration bas de section */}
      <div className="absolute bottom-0 left-0 opacity-20 hidden md:block">
        <Image
          src="/pizza8.png"
          alt="Decorative pizza"
          width={220}
          height={220}
          className="object-contain"
        />
      </div>
    </section>
  );
}
