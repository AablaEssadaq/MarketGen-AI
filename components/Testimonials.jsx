'use client';
import Aos from "aos";
import { Quote, User } from "lucide-react";
import { useEffect } from "react";


const Testimonials = () => {

  useEffect(() => {
          Aos.init(); // Optional: Add animation duration
        }, []);
  
  return (
  <section id="reviews" className="w-full px-[40px] lg:px-[90px] pt-18 pb-16 bg-gradient-to-b from-white to-sky-50">
    <div className="flex flex-col items-center text-center mb-12">
      <h2 data-aos="fade-up" data-aos-duration="2000" data-aos-once="true" className="text-3xl md:text-4xl font-inter font-bold text-text mb-4">Our Trusted Clients</h2>
      <p data-aos="fade-up" data-aos-duration="2000" data-aos-once="true" className="text-subText max-w-2xl">
      Leading brands trust MarketGen AI to power their marketing—join them today!
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mb-4">
      {testimonials.map((testimonial, index) => (
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="2000"
          key={index}
          className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-accent"></div>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-placeholder text-accent mr-4">
                <Quote className="rotate-180"/>
              </div>
            </div>
            <p className="text-subText mb-6 font-source italic">"{testimonial.comment}"</p>
            <hr className="text-placeholder mb-4"/>
            <div className="flex items-center">
               <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-placeholder mr-4">
                  <User/>
                </div>
               <div className="flex flex-col">
                 <p className="font-semibold text-text text-md">{testimonial.client}</p>
                 <p className="text-text text-sm">{testimonial.position}</p>
                </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="flex justify-center items-center mt-16">
        <button className="bg-primary px-12 py-2.5 text-md text-white rounded-full cursor-pointer hover:bg-primary/95 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 
            transition-all duration-300 ease-in-out transform">Read More</button>
    </div>
   </section>
  )
}

const testimonials = [
    {
      comment: "MarketGen AI completely transformed our marketing strategy! Increased engagement by 3x!",
      client: "Emma R.",
      position: "Digital Marketer @ XYZ",
    },
    {
        comment: "The AI-powered insights are a game-changer. We saw a 40% boost in conversions!",
        client: "Liam S.",
        position: "XYZ Founder",
    },
    {
        comment: "Finally, an automation tool that feels human! Our content now resonates more than ever.",
        client: "Sophia M.",
        position: "Content Strategist @ XYZ",
    },
    {
        comment: "MarketGen AI saves us hours of work every week. The automation is seamless!",
        client: "Nora K.",
        position: "Marketing Manager @ XYZ",
    },
    {
        comment: "We’ve tried multiple tools, but MarketGen AI delivers results. Worth every penny!",
        client: "Carlos J.",
        position: "Growth Hacker @ XYZ",
    },
    {
        comment: "Our team relies on MarketGen AI daily. It’s like having an extra marketer on staff!",
        client: "Mia T.",
        position: "Agency Owner @ XYZ",
    },
  ]
  
  

export default Testimonials