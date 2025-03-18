import React, { useEffect, useState } from 'react';
import { Phone, Mail, MapPin, Twitter, Youtube, Linkedin } from 'lucide-react';
import NavBar from '../../layout/NavBar';
import Contact from '../../layout/Contact';
import NewsLetter from '../../layout/NewsLetter';
import Footer from '../../layout/Footer';
import TestimonialSlider from '../../layout/TestimonialSlider';

const TypewriterText = ({ text, speed = 100, delayBetweenLoops = 2000 }) => {
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    
    if (!isDeleting && index < text.length) {
      timer = setTimeout(() => setIndex(index + 1), speed);
    } else if (isDeleting && index > 0) {
      timer = setTimeout(() => setIndex(index - 1), speed / 2);
    } else {
      timer = setTimeout(() => setIsDeleting(!isDeleting), delayBetweenLoops);
    }

    return () => clearTimeout(timer);
  }, [index, isDeleting, text, speed, delayBetweenLoops]);

  return (
    <span className="text-white font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl">
      {text.slice(0, index)}
    </span>
  );
};

const AboutUs = () => {
  return (
    <div className="relative">
      {/* NavBar with higher z-index to appear in front */}
      <div className="fixed top-0 left-0 w-full z-50">
        <NavBar />
      </div>
      <br/>
      <br/>
      {/* Main content container pushed down and behind */}
      <div className="relative z-0 w-full px-2 sm:px-4 pt-16 sm:pt-20">
        <div className="bg-gray-200 rounded-t-xl">
          
          {/* Typewriter Text Effect - Responsive height */}
          <div className="bg-gray-800 p-4 sm:p-8 flex justify-center items-center min-h-16 sm:h-24">
            <TypewriterText text="INNOSQUARES | INTELLIGENCE REDEFINED" speed={50} />
          </div>

          {/* About Us Content */}
          <div className="bg-white text-black p-4 sm:p-6 md:p-10 max-w-full">
            {/* Who We Are Section */}
            <section className="mb-8 sm:mb-12">
              <div className="flex justify-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 sm:mb-3 text-center">Who We Are</h2>
              </div>
              <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6">
                We are InnoSquares: a team of passionate innovators blending cutting-edge Generative AI 
                and LLM expertise with industry-specific insights. Our mission? To help businesses harness the 
                power of AI to solve real-world challenges, scale operations, and deliver exceptional 
                experiences.
              </p>
              
              <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6">
                We believe that AI isn't just a tool—it's the key to unlocking human potential and driving meaningful 
                change. Our solutions are built with precision, creativity, and a relentless commitment to innovation, 
                ensuring they adapt to your needs and grow with your vision.
              </p>
            </section>

            <section className="mb-2">
              <div className="w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"></div>
            </section>
            
            {/* What We Do Best Section */}
            <section className="mb-8 sm:mb-12">
              <div className="flex justify-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 sm:mb-3 text-center">What We Do Best</h2>
              </div>
              <p className="text-base sm:text-lg md:text-xl">We specialize in:</p>
              <ul className="list-disc pl-5 mt-2 sm:mt-3 text-base sm:text-lg md:text-xl">
                <li>AI-Powered Automation</li>
                <li>Custom Large Language Model (LLM) Solutions</li>
                <li>Data Analytics & Insights</li>
                <li>AI Strategy Consulting</li>
                <li>Real-Time AI Implementation</li>
              </ul>
            </section>

            <section className="mb-2">
              <div className="w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"></div>
            </section>

            {/* Our Impact Section */}
            <section className="mb-8 sm:mb-12">
              <div className="flex justify-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 sm:mb-3 text-center">Our Impact</h2>
              </div>
              <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-8">We've collaborated with clients across industries to deliver:</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                <div className="flex flex-col items-center border p-4 sm:p-6 rounded-lg shadow-md w-full">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">150K+</h3>
                  <p className="text-center text-base sm:text-lg md:text-xl">Prompts Successfully Delivered</p>
                </div>
                
                <div className="flex flex-col items-center border p-4 sm:p-6 rounded-lg shadow-md w-full">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">20+</h3>
                  <p className="text-center text-base sm:text-lg md:text-xl">Global Businesses Empowered With Tailored AI Solutions</p>
                </div>
                
                <div className="flex flex-col items-center border p-4 sm:p-6 rounded-lg shadow-md w-full">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">98%</h3>
                  <p className="text-center text-base sm:text-lg md:text-xl">Client Satisfaction Rate</p>
                </div>
              </div>
            </section>
            
            {/* Why Choose InnoSquares Section */}
            <section className="mb-6 sm:mb-8">
              <div className="flex justify-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 sm:mb-3 text-center">Why Choose InnoSquares?</h2>
              </div>
              <p className="text-base sm:text-lg md:text-xl">
                Our approach is simple: we listen, we innovate, we deliver, and we accelerate. Partnering with us
                means accessing a dedicated team that prioritizes your goals and works tirelessly to turn them into
                reality.
              </p>
            </section>
          </div>
        </div>
      </div>

      <div className="w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"></div>
      
      <TestimonialSlider />
      
      <div className="w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"></div>
      
      <Contact />
      
      <div className="w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"></div>
      
      <NewsLetter />
      
      <Footer />
    </div>
  );
};

export default AboutUs;