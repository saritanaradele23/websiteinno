/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Twitter, Youtube, Linkedin } from "lucide-react";
import NavBar from "../../layout/NavBar";
import Contact from "../../layout/Contact";
import NewsLetter from "../../layout/NewsLetter";
import Footer from "../../layout/Footer";
import TestimonialSlider from "../../layout/TestimonialSlider";
import NextGenRotate from "../../layout/NextGenRotate";


// Main Home Component
const Next_Gen = () => {
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
        <div className="max-w-10zxl mx-auto px-8">
          <h1 className="text-6xl font-bold mb-8">
          Next-Gen Conversation & RAG Solutions
                    </h1>
              <NextGenRotate/>
          <p className="text-lg mb-13 text-gray-600">
          Transform interactions with advanced Chatbots, Email Generation, LangChain Development, and Vector & Graph RAG models for smarter engagement.          </p>
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
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-lg">
Harness the power of Generative AI and LLMs to deliver tailored solutions for modern businesses. From precise Prompt Engineering to scalable LLM Business Applications, our expertise transforms data into actionable insights, driving efficiency, innovation, and growth. Explore how we can redefine your AI journey. </p>
        </div>
      </section>

      <section className="py-5">

      <div class="absolute w-full h--30 bg-gradient-to-r from-purple-100 via-blue-100 to-cyan-100"></div>

      </section>
      <div class="absolute w-full h--30 bg-gradient-to-r from-purple-100 via-blue-100 to-cyan-100"></div>
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
                  title: "Intelligent Chatbots",
                  description:
                  "Revolutionizing customer interactions with AI-driven, conversational chatbots designed for seamless communication and engagement.     "           },
                {
                  title: "Automated Email Generation",
                  description:
                 " Crafting personalized, impactful email campaigns with AI-powered automation for effective customer outreach."                },
                {
                  title: "LangChain Development",
                  description:
                    "Building robust, custom AI solutions with LangChain to power advanced workflows and data-driven insights.",
                },
                {
                  title: "Vector and Graph RAG Models",
                  description:
                    "Enhancing knowledge retrieval with advanced vector and graph-based Retrieval-Augmented Generation (RAG) systems for smarter, context-aware responses.",
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
                  src="/src/assets/Next-Gen.gif"
               
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <div class="absolute w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"></div>
      <Contact />
  <div class="absolute w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"></div>
      <TestimonialSlider /> 
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Next_Gen;