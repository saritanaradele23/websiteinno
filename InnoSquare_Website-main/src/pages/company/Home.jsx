/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Twitter, Youtube, Linkedin } from "lucide-react";
import NavBar from "../../layout/NavBar";
import Contact from "../../layout/Contact";
import NewsLetter from "../../layout/NewsLetter";
import Footer from "../../layout/Footer";
import RotatingText from "../../layout/RotatingText";
import TestimonialSlider from "../../layout/TestimonialSlider";



   
   

  

 
// Main Home Component
function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Add Comota font import in your head section or CSS file */}
      <style>
        {`
          @import url('https://fonts.cdnfonts.com/css/comota');
        `}
      </style>
      <NavBar />

      {/* Hero Section */}
      <section className="bg-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-6xl font-bold mb-8">
            Empowering Businesses with Cutting-Edge
          </h1>
          <RotatingText />
          <p className="text-lg mb-13 text-gray-600">
            Accelerate innovation, streamline operations, and unlock unparalleled insights with our state-of-the-art Generative AI and LLM solutions tailored to your business needs.
          </p>
          <div className="flex justify-center gap-10">
  <button className="bg-black text-white px-8 py-3 rounded-md transition-transform transform hover:scale-105 hover:bg-gray-800 focus:ring-2 focus:ring-gray-500">
    Book Now
  </button>
  <button className="bg-black text-white px-8 py-3 rounded-md transition-transform transform hover:scale-105 hover:bg-gray-800 focus:ring-2 focus:ring-gray-500">
    Explore Solution
  </button>
</div>

        </div>
      </section>

      {/* Description Section */}
      <section className="bg-[#323232] text-white py-12">
        <div className="max-w-10zxl mx-auto px-8">
          <p className="text-lg">
          we are redefining the possibilities of Generative AI and LLMs for businesses worldwide. We aim to empower industries with tailored AI solutions that drive innovation, efficiency, and growth. From intelligent business applications to domain-specific datasets and scalable AI operations, we combine cutting-edge technology with a customer-centric approach to deliver measurable impact. Together, let's shape the future of AI-powered success.          </p>
        </div>
      </section>
      
      <section className="py-20"></section>
      <div class="absolute w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"></div>

      <div class="absolute w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"></div>

      {/* How We Do It Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            How We Do It
          </h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-6">
              {/* Feature Points */}
              {[
                {
                  title: "Multi-Modal Input Integration",
                  description:
                    "Process diverse data inputs like audio, video, images, and text for comprehensive understanding.",
                },
                {
                  title: "Pre-Training",
                  description:
                    "The model learns general patterns, relationships, and context from large-scale datasets.",
                },
                {
                  title: "Supervised Fine-Tuning",
                  description:
                    "Model training with human-labeled data for task-specific accuracy and reliability.",
                },
                {
                  title: "Reinforcement Learning",
                  description:
                    "Aligns model behavior with desired outcomes using human feedback or preference optimization.",
                },
              ].map((item, idx) => (
                <div key={idx}>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center">
              <img
                src="\src\assets\Homepage animations .gif"
               
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <div class="absolute w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"></div>
       <TestimonialSlider />
      <div class="absolute w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"></div>
      <Contact />
      <div class="absolute w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"></div>
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Home;
