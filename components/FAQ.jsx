'use client';

import React, { useEffect } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import Aos from 'aos';
  

const FAQ = () => {

  useEffect(() => {
    Aos.init(); // Optional: Add animation duration
    Aos.refresh();
  }, []);

  return (
    <>
    <section id='faq' className='w-full bg-secondary text-background py-15 px-[40px] lg:px-[90px]'>
      <h1 data-aos="fade-down" data-aos-duration="1500" data-aos-once="true" className="text-2xl md:text-3xl font-bold font-inter text-center mb-10">Frequently Asked Questions</h1>
      <div className='flex flex-col items-center'>
      {QA.map((q,index) => {
        return (
        <Accordion data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" key={index} className=' max-md:w-full w-2/3 bg-white text-text rounded-xl px-4 py-1 mb-3' type="single" collapsible>
        <AccordionItem value={index + 1}>
        <AccordionTrigger className='text-secondary text-md cursor-pointer'>{q.question}</AccordionTrigger>
            <AccordionContent>
               {q.answer}
            </AccordionContent>
        </AccordionItem>
       </Accordion>
      )})}
      </div>
    </section>
    </>
  )
}

const QA = [
    {
      question: "Who is MarketGen AI for?",
      answer: "Whether you’re a startup, e-commerce store, agency, or enterprise, MarketGen AI provides smart tools to enhance your marketing strategies.",
    },
    {
        question: "What can MarketGen AI automate?",
        answer: "MarketGen AI can automate content generation, ad targeting, email campaigns, analytics reporting, and more—saving you time while improving results.",
    },
    {
        question: "Can I customize the AI-generated content?",
        answer: "Yes! Our AI provides content suggestions, but you can edit, tweak, and personalize everything to match your brand voice.",
    },
    {
        question: "Does MarketGen AI integrate with other tools?",
        answer: "Absolutely! We support integrations with major platforms like HubSpot, Mailchimp, Google Ads, Shopify, and more.",
    },
    {
        question: "What happens if I cancel my subscription?",
        answer: "You’ll retain access until the end of your billing cycle, but you won’t be charged for the next period.",
    },
    
]
export default FAQ