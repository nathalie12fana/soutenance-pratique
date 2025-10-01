"use client"
import FooterComponents from '@/components/Footer/FooterComponents';
import { Loader2Icon, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';


export const ContactPage = () => {
  const [isSending,setIsSending] = React.useState(false)
   const form = useRef();

  const sendEmail = (e) => {
    
    setIsSending (true);
    emailjs.
sendForm('service_2gcwfvb', 'template_7c0yef1', form.current, {
        publicKey: 'IOCIXn56nEQi48M1v',
      })
      .then(
        () => {
          setIsSending(false)
          form.current.reset()
          toast.success('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          toast.error('Faild to sent:', error.text);
        },
      );
  };
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
          <h1 className="text-5xl font-bold text-gray-900">Contact Us</h1>
          <p className="mt-4 text-gray-500 text-2xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        <div className="mt-8 text-end m-40 text-2xl">
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            Home
          </Link>
          <span className="mx-4 text-gray-400">/</span>
          <span className="text-red-500 font-medium">Contact Us</span>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Partie gauche (formulaire) */}
        <div>
          {/* Titre */}
          <span className="text-red-500 font-semibold relative">
            Consultation
            <span className="block w-12 h-[2px] bg-red-500 absolute left-28 top-1/2"></span>
          </span>
          < ToastContainer position="top-center" />
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-8">
            Send Us Message
          </h2>

          {/* Formulaire */}
          <form ref={form} action="#"  onSubmit={sendEmail} method="POST" className="space-y-5">
            {/* Ligne 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Name*"
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="email"
                placeholder="Email*"
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Ligne 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Phone*"
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="text"
                placeholder="Website"
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Message */}
            <textarea 
              placeholder="Write Message"
              rows="4"
              className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>

            {/* Bouton */}
            <div>
        {isSending ?   <Button size="lg" className="w-full" disabled>
                <Loader2Icon   className="animate-spin" />
                    Please wait
                </Button> : <Button type="button"
        onClick={()=>sendEmail()} className="bg-yellow-400 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-red-600 transition" > Send Mail </Button>
               }         
      </div>
          </form>
        </div>

        {/* Partie droite (image) */}
        <div className="rounded-3xl overflow-hidden">
          <Image
            src="/bonjour.png" // Mets ton image dans public
            alt="Tarte aux tomates"
            width={600}
            height={400}
            className="rounded-3xl object-cover"
          />
        </div>
      </div>
    </section>


    <section className="w-full">
      {/* --- GOOGLE MAP --- */}
      <div className="w-full h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094135!2d144.95373531590496!3d-37.81720974201412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577b1d7afdb7d0!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sau!4v1679461567261!5m2!1sen!2sau"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-none"
        ></iframe>
      </div>

      {/* --- CONTACT INFO --- */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 py-12 px-6 text-center">
        {/* Location */}
        <div className="flex flex-col items-center">
          <MapPin className="w-10 h-10 text-red-500 mb-4" />
          <h3 className="font-bold text-1xl">Location</h3>
          <p className="text-gray-600">155 Main Street, 2nd Floor</p>
          <p className="text-gray-600">New York City</p>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center">
          <Mail className="w-10 h-10 text-red-500 mb-4" />
          <h3 className="font-bold text-1xl">Email Address</h3>
          <p className="text-gray-600">Support@gmail.com</p>
          <p className="text-gray-600">Contact@gmail.com</p>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center">
          <Phone className="w-10 h-10 text-red-500 mb-4" />
          <h3 className="font-bold text-1xl">Contact Us</h3>
          <p className="text-gray-600">+49 123 456 789</p>
          <p className="text-gray-600">+49 123 456 789</p>
        </div>
      </div>
    </section>

    <FooterComponents/>

    </>
  )
}
export default ContactPage;
