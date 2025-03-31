'use client';


import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useEffect } from "react";
import Aos from "aos";


const Contact = () => {

  useEffect(() => {
          Aos.init(); // Optional: Add animation duration
          Aos.refresh()
        }, []);

    const formSchema = z.object({
        fullname: z.string().min(5, {
          message: "Full name must be at least 5 characters.",
        }),
        email: z.string().email({ message: "Invalid email address" }),
        phone: z
          .string()
          .min(10, { message: "Phone number must be at least 10 digits" })
          .max(15, { message: "Phone number must be at most 15 digits" })
          .regex(/^\+?[0-9\s\-()]*$/, { message: "Invalid phone number format" }),
          subject: z.string(),
          message:z.string(),
      })

      const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          fullname: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        },
      })

      function onSubmit(values) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
        form.reset();
      }
    

  return (
    <>
    <section id="contact" className=' text-center w-full bg-gradient-to-b from-white to-sky-50 text-text py-15 px-[40px] lg:px-[90px] flex flex-col items-center'>
        <h2 data-aos="fade-up" data-aos-duration="2000" data-aos-once="true" className=" text-3xl md:text-4xl font-inter font-bold text-text mb-4">Contact Us</h2>
        <p data-aos="fade-up" data-aos-duration="2000" data-aos-once="true" className="text-subText">We're here to help! Send us a message and we'll get back to you as soon as possible.</p>
        <br/>
        <div data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="300" data-aos-once="true" className="max-md:w-full w-2/3 bg-white rounded-3xl border border-placeholder/20 px-4 py-6 mt-5 ">
        <Form {...form} >
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className='grid max-sm:grid-cols-1 grid-cols-2 gap-3 max-sm:gap-6'>
        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="+1 (555) 000-0000" {...field}  />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="john@example.com" {...field}  />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />
            <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input placeholder="How can we help?" {...field}  />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />
            <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea  placeholder="Your message here..." {...field}  />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />
        <button type="submit" className="bg-accent px-8 py-2 font-medium text-white rounded-full cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-accent/20 
            transition-all duration-300 ease-in-out transform">Send</button>
        </form>
        </Form>
        </div>
    </section>
    </>
  )
}

export default Contact