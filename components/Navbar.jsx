"use client"

import Aos from "aos"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import Animation from "./Animation"

const Navbar = () => {


  useEffect(() => {
      Aos.init(); // Optional: Add animation duration
    }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { href: "#", label: "Home" },
    { href: "#why", label: "Why Us" },
    { href: "#services", label: "Services" },
    { href: "#pricing", label: "Pricing" },
    { href: "#reviews", label: "Reviews" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <>
      <header className="px-4 sm:px-6 md:px-[40px] lg:px-[90px] py-4 sticky top-0 z-40 w-full bg-background shadow-sm flex justify-between items-center">
        <a href="#">
        <div className="flex items-center gap-2">
          <img
            src="/Capture_d_écran_2025-03-12_021011-removebg-preview.png"
            alt="MarketGen AI Logo"
            width={32}
            height={32}
          />
          <span className="text-lg md:text-base lg:text-lg font-semibold text-secondary">MarketGen AI</span>
        </div>
        </a>
       

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:gap-4 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-normal text-secondary hover:text-accent transition-colors lg:text-sm"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Free Trial Button - Visible on all screens */}
        <div className="hidden md:block">
          <button
            className="bg-accent cursor-pointer text-white text-sm py-1.5 md:px-4 lg:px-6 rounded-3xl 
            hover:bg-accent/95 hover:scale-105 hover:shadow-lg hover:shadow-accent/20 
            transition-all duration-300 ease-in-out transform"
          >
            Free trial
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center sm:gap-4 gap-2">
          <button
            className="md:hidden bg-accent text-white text-sm py-1.5 px-4 rounded-3xl 
            hover:bg-accent/95 hover:scale-105 hover:shadow-lg hover:shadow-accent/20 
            transition-all duration-300 ease-in-out transform cursor-pointer"
          >
            Free trial
          </button>
          <button onClick={toggleMenu} className="cursor-pointer text-secondary p-2 focus:outline-none" aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-30 bg-background pt-16 px-4">
          <nav className="flex flex-col items-center gap-6 py-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-lg font-normal text-secondary hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      <section className="lg:h-[calc(100vh-4rem)] px-4 sm:px-6 md:px-[40px] lg:px-[90px] bg-background flex flex-col md:flex-row justify-between items-center">
        <div className="space-y-4 w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 data-aos="fade-up" data-aos-duration="2000" className="text-2xl md:text-2xl lg:text-3xl text-secondary font-semibold font-libre max-sm:mt-8">
            AI-Powered Marketing. <span className="text-accent">Simplified!</span>
          </h1>
          <p data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300" className="text-subText md:text-sm lg:text-base">
            Boost your marketing strategy with AI-driven insights and automation. Simplify your workflow and scale your
            business effortlessly.
          </p>
          <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500">
          <button 
            className="bg-primary cursor-pointer text-sm lg:text-base mt-4 mx-auto lg:mx-0 lg:ml-28 px-7 py-2 text-white rounded-full 
            hover:bg-primary/95 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 
            transition-all duration-300 ease-in-out transform"
          >
            Get started for free
          </button>
          </div >
        </div>

        {/* Container for the animation and the blob */}
        <div data-aos="fade-up" data-aos-duration="2000" className="flex justify-center items-center relative w-full md:w-[450px] h-[350px] md:h-[500px] mt-2 md:mt-0">
          {/* Blue Blob as background */}
          <div className="absolute inset-0 z-0 flex justify-center items-center">
            <img src="/blob-blue.svg" alt="Blue blob background" className="w-full h-full" />
          </div>

          {/* Lottie animation on top - adjusted for better centering */}
          <div className="relative z-10 transform translate-x-8 md:translate-x-10 translate-y-3">
            <Animation />
          </div>
        </div>
      </section>
    </>
  )
}

export default Navbar

