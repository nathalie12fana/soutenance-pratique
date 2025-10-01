 import FooterComponents from "@/components/Footer/FooterComponents";
import HeroComponents from "@/components/Hero/HeroComponents";
import NavbarComponents from "@/components/Navbar/NavbarComponents";
import OfferComponents from "@/components/Offer/OfferComponents";
import PosterComponents from "@/components/Poster/PosterComponents";
import ProductCard from "@/components/ProductCard/ProductCard";
import ReservationComponents from "@/components/Reservation/ReservationComponents";
import StrengthSectionComponents from "@/components/StrengthSection/StrengthSectionComponents";
import TestimonialsComponents from "@/components/Testimonials/TestimonialsComponents";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div>
       <NavbarComponents/>
       <HeroComponents/>
       <ProductCard/>
       <OfferComponents/>
       <StrengthSectionComponents/>
       <TestimonialsComponents/>
       <ReservationComponents/>
       <PosterComponents/>
    </div>
    <FooterComponents/>
    </>
  );
}
