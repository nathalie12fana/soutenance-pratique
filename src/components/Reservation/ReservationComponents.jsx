"use client";

import Image from "next/image";

export default function ReservationComponents() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Formulaire */}
        <div>
          {/* Titre */}
          <p className="text-red-500 font-medium relative  inline-block text-2xl">
            Reservation
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-8">
            Book A Table Now!
          </h2>

          {/* Champs */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Name*"
              className="border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              placeholder="Email*"
              className="border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="tel"
              placeholder="Phone*"
              className="border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="text"
              placeholder="Time*"
              className="border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="date"
              placeholder="Date*"
              className="border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="number"
              placeholder="Guest*"
              className="border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </form>

          {/* Bouton */}
          <button className="mt-8 px-10 py-3 bg-yellow-400 text-white font-semibold rounded-full shadow-md hover:bg-red-600 transition">
            BOOK NOW
          </button>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <Image
            src="/pizza7.png" //image que je vais utiliser
            alt="Pizza"
            width={600}
            height={500}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
