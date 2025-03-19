"use client"

import Aos from "aos";
import { ArrowRight, BotMessageSquare, Brain, CalendarSync, ChartNoAxesCombined, Radio, SearchCode } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react";

export default function Services() {

    useEffect(() => {
        Aos.init(); // Optional: Add animation duration
        Aos.refresh()
      }, []);

  return (
    <section id="services" className="w-full px-[40px] lg:px-[90px] pt-18 pb-24 bg-gradient-to-b from-white to-sky-50">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 data-aos="fade-up" data-aos-duration="2000" data-aos-once="true" className="text-3xl md:text-4xl font-inter font-bold text-text mb-4">Our Services</h2>
          <div data-aos="fade-up" data-aos-duration="2000" data-aos-once="true" className="w-30 h-1.5 bg-gradient-to-r from-[#55c8de] to-[#ff7846] rounded-full mb-6"></div>
          <p data-aos="fade-up" data-aos-duration="2000" data-aos-once="true" data-aos-delay="200" className="text-subText max-w-2xl">
            Leverage our AI-powered tools to transform your marketing strategy and drive measurable results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
          {services.map((service, index) => (
            <div data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="2000"
              key={index}
              className="group cursor-pointer relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-accent"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-iconContainer text-primary mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-text">{service.title}</h3>
                </div>
                <p className="text-subText mb-6">{service.description}</p>
                <Link
                  href={service.link}
                  className="inline-flex items-center text-accent font-medium hover:text-[#ff5a1f] transition-colors"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </div>
          ))}
        </div>
    </section>
  )
}

const services = [
  {
    title: "AI-Powered Content Generation",
    description:
      "Create high-quality, SEO-optimized content at scale with our advanced AI content generation tools.",
    icon: <Brain className="h-6 w-6" />,
    link: "/services/insights",
  },
  {
    title: "AI-Based SEO Suggestions",
    description: "Keyword research, meta descriptions, ranking insights.",
    icon: <SearchCode className="h-6 w-6" />,
    link: "/services/automation",
  },
  {
    title: "Social Media Automation",
    description:
      "AI-generated posts, auto-scheduling, hashtag optimization.",
    icon: <CalendarSync className="h-6 w-6" />,
    link: "/services/engagement",
  },
  {
    title: "Ad Copy Optimization",
    description: "AI-driven Google/Facebook ad recommendations.",
    icon: <Radio className="h-6 w-6" />,
    link: "/services/content",
  },
  {
    title: "Audience Targeting & Analytics",
    description: "Smart recommendations on best-performing content.",
    icon: <ChartNoAxesCombined className="h-6 w-6" />,
    link: "/services/analytics",
  },
  {
    title: "AI Chatbot for Engagement",
    description: "Automated replies to customer queries.",
    icon: <BotMessageSquare className="h-6 w-6" />,
    link: "/services/trends",
  },
]

