"use client"

import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";
import 'aos/dist/aos.css';

export default function Home() {
  return (
    <>
      <Navbar />
      <WhyUs/>
      <Services/>
      <Pricing/>
      <Testimonials/>
      <FAQ/>
      <Contact/>
      <Footer/>
    </>
  )
}
