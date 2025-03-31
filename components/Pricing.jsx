"use client"

import Aos from 'aos';
import { Check, X } from 'lucide-react'
import React, { useEffect } from 'react'


const Pricing = () => {

     useEffect(() => {
          Aos.init(); // Optional: Add animation duration
          Aos.refresh();  // <-- force AOS to recalculate positions
        }, []);

  return (
    <>
      <section id='pricing' className="w-full h-auto py-17 px-[30px] md:px-[20px] lg:px-[90px] bg-secondary flex flex-col items-center gap-3">
        <h1 data-aos="fade-down" data-aos-duration="2000" data-aos-once="true" className="md:text-4xl text-3xl font-inter font-bold text-background capitalize text-center">Choose your plan</h1>
        <p data-aos="fade-down" data-aos-duration="2000" data-aos-once="true" className="mt-1 text-base md:text-lg font-source font-normal text-background text-center">
          Select the perfect plan for your business needs
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:w-3/4 lg:w-full items-start px-4 py-5 max-w-7xl">
        <div data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true" className="mt-8">
          <div className=" bg-white rounded-3xl border border-placeholder flex flex-col px-4 py-6 hover:scale-102 transition-all duration-300">
            <div className="flex justify-between items-center">
              <p className="text-md font-source text-subText capitalize">Chosen by 150k customers</p>
              <button className="disabled border border-placeholder rounded-3xl bg-white px-6 py-1.5 text-subText font-medium">
                Free
              </button>
            </div>
            <p className='mt-3 mb-4 text-black text-sm font-normal'><span className='text-5xl font-medium text-black'>$0</span> /month</p>
            <p className='text-subText mb-5 capitalize'>Best for small businesses</p>
            <hr />
            <div className='py-3'>
              {freeFeatures.map((feature, index) => (
                <div key={index} className='flex gap-2 py-2 '>{feature.icon} <p className='text-text font-sm font-source'>{feature.title}</p></div>
              ))}
            </div>
            <div className='flex justify-center items-center'>
              <button className="bg-primary text-white rounded-3xl px-6 py-2 mt-1 mb-3 capitalize hover:bg-primary/95 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 
            transition-all duration-300 ease-in-out transform cursor-pointer">Get started for free</button>
            </div>
           </div>
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true" className="mt-2">
          <div data-aos-delay="300" className=" bg-white rounded-3xl border border-placeholder flex flex-col px-4 py-6 shadow-[0_0_40px_-4px_rgba(85,200,222,0.6)] hover:scale-103 hover:shadow-[0_0_40px_-4px_rgba(85,200,222,0.7)] transition-all duration-300">
            <div className="flex justify-between items-center">
              <p className="text-md font-source text-subText capitalize">Chosen by 82k customers</p>
              <button className="disabled border border-accent rounded-3xl bg-accent px-6 py-1.5 text-background font-medium">
                Pro
              </button>
            </div>
            <p className='mt-3 mb-4 text-black text-sm font-normal'><span className='text-5xl font-medium text-black'>$29.99</span> /month</p>
            <p className='text-subText mb-11 capitalize'>Best for growing businesses</p>
            <hr />
            <div className='py-3 mb-2'>
              {proFeatures.map((feature, index) => (
                <div key={index} className='flex gap-2 py-2 '>{feature.icon} <p className='text-text font-sm font-source'>{feature.title}</p></div>
              ))}
            </div>
            <div className='flex justify-center items-center py-4 my-4'>
              <button className="bg-accent text-white rounded-3xl px-6 py-2 mt-1 mb-3 capitalize hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/20 
            transition-all duration-300 ease-in-out transform cursor-pointer">upgrade to pro</button>
            </div>
          </div>
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true" className="mt-8">
          <div data-aos-delay="500" className=" bg-white rounded-3xl border border-placeholder flex flex-col px-4 py-6 hover:scale-102 transition-all duration-300">
            <div className="flex justify-between items-center">
              <p className="text-md font-source text-subText capitalize">Chosen by 10k entreprises</p>
              <button className="disabled border border-placeholder rounded-3xl bg-white px-6 py-1.5 text-subText font-medium">
                Entreprise
              </button>
            </div>
            <p className='mt-3 mb-4 text-black text-sm font-normal'><span className='text-5xl font-medium text-black'>$79.99</span> /month</p>
            <p className='text-subText mb-5 capitalize'>Best for large teams</p>
            <hr />
            <div className='py-3'>
              {entrepriseFeatures.map((feature, index) => (
                <div key={index} className='flex gap-2 py-2 '>{feature.icon} <p className='text-text font-sm font-source'>{feature.title}</p></div>
              ))}
            </div>
            <div className='flex justify-center items-center mt-10 mb-2'>
              <button className="bg-primary text-white rounded-3xl px-6 py-2 mt-1 mb-3 capitalize hover:bg-primary/95 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 
            transition-all duration-300 ease-in-out transform cursor-pointer">Get Entreprise</button>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  )
}

const freeFeatures = [
  {
    title: "Basic AI automation",
    icon: <Check className="h-6 w-6 text-primary" />,

  },
  {
    title: "SEO recommendations",
    icon: <Check className="h-6 w-6 text-primary" />,

  },
  {
    title: "Social media scheduling",
    icon: <Check className="h-6 w-6 text-primary" />,

  },
  {
    title: "Advanced analytics",
    icon: <X className="h-6 w-6 text-accent" />,

  },
  {
    title: "Premium AI insights",
    icon: <X className="h-6 w-6 text-accent" />,

  },
  {
    title: "24/7 support",
    icon: <X className="h-6 w-6 text-accent" />,

  }
]

const proFeatures = [
  {
    title: "All Free Plan features",
    icon: <Check className="h-6 w-6 text-primary" />,

  },
  {
    title: "AI-powered content generation",
    icon: <Check className="h-6 w-6 text-primary" />,

  },
  {
    title: "Performance analytics",
    icon: <Check className="h-6 w-6 text-primary" />,

  },
  {
    title: "Audience targeting",
    icon: <X className="h-6 w-6 text-accent" />,

  },
  {
    title: "Priority support",
    icon: <X className="h-6 w-6 text-accent" />,

  },
]

const entrepriseFeatures = [
    {
      title: "All Pro Plan features",
      icon: <Check className="h-6 w-6 text-primary" />,
  
    },
    {
      title: "Dedicated account manager",
      icon: <Check className="h-6 w-6 text-primary" />,
  
    },
    {
      title: "Custom AI models",
      icon: <Check className="h-6 w-6 text-primary" />,
  
    },
    {
      title: "API access",
      icon: <Check className="h-6 w-6 text-primary" />,
  
    },
    {
      title: "24/7 premium support",
      icon: <Check className="h-6 w-6 text-primary" />,
  
    },
]


export default Pricing