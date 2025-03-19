"use client"
import { faFacebook, faFacebookSquare, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"

const Footer = () => {
  return (
    <>
      <section className="bg-secondary text-background px-[40px] lg:px-[90px] py-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-17 mb-7">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center">
                <Image
                  src="/Capture_d_écran_2025-03-12_021011-removebg-preview.png"
                  alt="MarketGen AI Logo"
                  width={45}
                  height={45}
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-semibold text-background">MarketGen AI</span>
            </div>
            <p className="text-sm text-background font-light">AI-powered marketing automation to scale your business effortlessly.</p>
            <div className="flex gap-5 my-4">
            <a href="#"><FontAwesomeIcon icon={faLinkedin} className="text-background text-2xl" /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} className="text-background text-2xl" /></a>
            <a href="#"><FontAwesomeIcon icon={faFacebookSquare} className="text-background text-2xl" /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} className="text-background text-2xl" /></a>
            </div>
          </div>
          <div className="pt-2">
            <h3 className="font-medium text-lg mb-2">Product </h3>
            <ul className="list-none text-sm text-background font-light">
                <li className="py-1 font-normal mb-1"><a href="#" className="hover:underline hover:underline-offset-3">Services</a></li>
                <li className="py-1 font-normal mb-1"><a href="#" className="hover:underline hover:underline-offset-3">Pricings</a></li>
                <li className="py-1 font-normal mb-1"><a href="#" className="hover:underline hover:underline-offset-3">Testimonials</a></li>
                <li className="py-1 font-normal mb-1"><a href="#" className="hover:underline hover:underline-offset-3">FAQ</a></li>
            </ul>
          </div>
          <div className="pt-2">
            <h3 className="font-medium text-lg mb-2">Company</h3>
            <ul className="list-none text-sm text-background font-light">
                <li className="py-1 font-normal mb-1"><a href="#" className="hover:underline hover:underline-offset-3">About Us</a></li>
                <li className="py-1 font-normal mb-1"><a href="#" className="hover:underline hover:underline-offset-3">Blog</a></li>
                <li className="py-1 font-normal mb-1"><a href="#" className="hover:underline hover:underline-offset-3">Careers</a></li>
                <li className="py-1 font-normal mb-1"><a href="#" className="hover:underline hover:underline-offset-3">Contact</a></li>
            </ul>
          </div>
          <div className="pt-2">
            <h3 className="font-medium text-lg mb-2">Support</h3>
            <ul className="list-none text-sm text-background font-light">
                <li className="py-1 font-normal mb-1"><a href="#" className="hover:underline hover:underline-offset-3">Help Center</a></li>
                <li className="py-1 font-normal mb-1"><a href="#" className="hover:underline hover:underline-offset-3">Live Chat</a></li>
                <li className="py-1 font-normal mb-1"><a href="#" className="hover:underline hover:underline-offset-3">Privacy Policy & Terms</a></li>
            </ul>
          </div>
        </div>
        <hr className="text-background"/>
        <div className="flex justify-center items-center mt-7">
            <p className="text-sm text-background font-normal">© 2025 MarketGen AI. All rights reserved.</p>
        </div>
      </section>
    </>
  )
}

export default Footer

