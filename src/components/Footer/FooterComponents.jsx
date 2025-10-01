"use client";

import { useState } from "react";
import Image from "next/image";
import { FaFacebookF, FaPinterestP, FaTwitter, FaInstagram } from "react-icons/fa";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FooterComponents() {
  const [open, setOpen] = useState(null);

  const toggleSection = (section) => {
    setOpen(open === section ? null : section);
  };

  return (
    <footer className="bg-[#fff9f0] text-gray-600 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo */}
        <div className="flex flex-col items-start">
          <Image
            src="/pizza.png" // le logo ici
            alt="Logo"
            width={80}
            height={80}
          />
        </div>

        {/* Information */}
        <div>
          <div
            className="flex justify-between items-center md:block cursor-pointer md:cursor-auto"
            onClick={() => toggleSection("info")}
          >
            <h4 className="font-semibold text-black mb-4">INFORMATION</h4>
            <span className="md:hidden">
              {open === "info" ? <ChevronUp /> : <ChevronDown />}
            </span>
          </div>
          <ul
            className={`space-y-2 md:block ${
              open === "info" ? "block" : "hidden md:block"
            }`}
          >
            <li>Home</li>
            <li>Blog</li>
            <li>About Us</li>
            <li>Menu</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Top Items */}
        <div>
          <div
            className="flex justify-between items-center md:block cursor-pointer md:cursor-auto"
            onClick={() => toggleSection("items")}
          >
            <h4 className="font-semibold text-black mb-4">TOP ITEMS</h4>
            <span className="md:hidden">
              {open === "items" ? <ChevronUp /> : <ChevronDown />}
            </span>
          </div>
          <ul
            className={`space-y-2 md:block ${
              open === "items" ? "block" : "hidden md:block"
            }`}
          >
            <li>Pepperoni</li>
            <li>Swiss Mushroom</li>
            <li>Barbeque Chicken</li>
            <li>Vegetarian</li>
            <li>Ham & Cheese</li>
          </ul>
        </div>

        {/* Others */}
        <div>
          <div
            className="flex justify-between items-center md:block cursor-pointer md:cursor-auto"
            onClick={() => toggleSection("others")}
          >
            <h4 className="font-semibold text-black mb-4">OTHERS</h4>
            <span className="md:hidden">
              {open === "others" ? <ChevronUp /> : <ChevronDown />}
            </span>
          </div>
          <ul
            className={`space-y-2 md:block ${
              open === "others" ? "block" : "hidden md:block"
            }`}
          >
            <li>Checkout</li>
            <li>Cart</li>
            <li>Product</li>
            <li>Locations</li>
            <li>Legal</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <div
            className="flex justify-between items-center md:block cursor-pointer md:cursor-auto"
            onClick={() => toggleSection("social")}
          >
            <h4 className="font-semibold text-black mb-4">SOCIAL MEDIA</h4>
            <span className="md:hidden">
              {open === "social" ? <ChevronUp /> : <ChevronDown />}
            </span>
          </div>
          <div
            className={`md:block ${
              open === "social" ? "block" : "hidden md:block"
            }`}
          >
            <div className="flex gap-3 mb-4">
              <a className="bg-[#3b5998] hover:bg-yellow-400 text-white p-2 rounded" href="#">
                <FaFacebookF />
              </a>
              <a className="bg-[#cb2027]  hover:bg-yellow-400 text-white p-2 rounded" href="#">
                <FaPinterestP />
              </a>
              <a className="bg-[#55acee] hover:bg-yellow-400  text-white p-2 rounded" href="#">
                <FaTwitter />
              </a>
              <a className="bg-[#e4405f] hover:bg-yellow-400   text-white p-2 rounded" href="#">
                <FaInstagram />
              </a>
            </div>

            <p className="text-sm mb-3">
              Signup and get exclusive offers and coupon codes
            </p>
            <button className="bg-yellow-400 hover:bg-red-500 text-white font-semibold px-6 py-2 rounded-full">
              SIGN UP
            </button>

            <div className="flex gap-3 mt-4">
              <Image
                src="/GooglePlay.png"
                alt="Google Play"
                width={120}
                height={40}
              />
              <Image
                src="/AppStore.png"
                alt="App Store"
                width={120}
                height={40}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 mt-10 pt-4 text-center text-sm text-gray-500">
        <div className="flex flex-wrap justify-center gap-4 mb-3">
          <span>Privacy Policy</span>
          <span>|</span>
          <span>Refund Policy</span>
          <span>|</span>
          <span>Cookie Policy</span>
          <span>|</span>
          <span>Terms & Conditions</span>
        </div>
        <p>
          © 2023 Pizzon. All Rights Reserved by{" "}
          <span className="text-red-500">Templatescoder</span>
        </p>
      </div>
    </footer>
  );
}
