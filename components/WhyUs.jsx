import Aos from "aos";
import { BrainCircuit, Rocket, Watch } from "lucide-react"
import { useEffect } from "react";

const WhyUs = () => {

   useEffect(() => {
        Aos.init(); // Optional: Add animation duration
        Aos.refresh();  // <-- force AOS to recalculate positions
      }, []);

  return (
    <>
    {/* Why Choose Us Section */}
    <section id="why" className="bg-secondary text-background px-[40px] lg:px-[90px] pt-15 pb-10">
          <div className="container space-y-8">
            <h2 data-aos="fade-down" data-aos-duration="2000" data-aos-once="true" className="text-2xl md:text-3xl font-bold font-inter text-center">Why Choose MarketGen AI?</h2>
            <div className="mt-18 grid gap-8 md:grid-cols-3">
              <div data-aos="flip-left" data-aos-duration="2000" className="flex flex-col items-center text-center space-y-3 p-6 border border-primary rounded-xl">
                <div className="flex justify-center items-center gap-3">
                  <BrainCircuit className="w-16 h-16 text-primary" />
                  <h3 className="text-lg font-medium font-source text-left">AI-driven insights for better decision-making</h3>
                </div>
                <p className="text-background text-left">
                  Leverage machine learning algorithms that analyze your data and provide insights that improve
                  efficiency and performance.
                </p>
              </div>
              <div data-aos="flip-left" data-aos-duration="2000" data-aos-delay="500" className="flex flex-col items-center text-center space-y-3 p-6 border border-primary rounded-xl">
                <div className="flex justify-center items-center gap-3">
                  <Watch className="w-16 h-16 text-primary" />
                  <h3 className="text-lg font-medium font-source text-left">Saves hours of manual marketing work.</h3>
                </div>
                <p className="text-background text-left">
                Automate repetitive tasks and focus on strategy. Our AI tools help you work smarter, not harder, and
                save valuable time.
                </p>
              </div>
              <div data-aos="flip-left" data-aos-duration="2000" data-aos-delay="700" className="flex flex-col items-center text-center space-y-3 p-6 border border-primary rounded-xl">
                <div className="flex justify-center items-center gap-3">
                  <Rocket className="w-16 h-16 text-primary" />
                  <h3 className="text-lg font-medium font-source text-left">Boosts engagement and conversions</h3>
                </div>
                <p className="text-background text-left">
                Create personalized campaigns that resonate with your target audience, driving higher open rates,
                click-throughs, and increased conversions.
                </p>
              </div>
            </div>
            <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="2000" data-aos-offset="0" className="flex justify-center items-center mt-8">
            <button className="bg-primary cursor-pointer mt-4 px-7 py-2 text-white rounded-full hover:bg-primary/95 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 
            transition-all duration-300 ease-in-out transform">Learn More</button>
            </div>
          </div>
        </section>

    </>
  )
}

export default WhyUs