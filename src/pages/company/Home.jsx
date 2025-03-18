/* eslint-disable no-unused-vars */
import React from "react";
import Contact from "../../layout/Contact";
import Footer from "../../layout/Footer";
import NavBar from "../../layout/NavBar";
import NewsLetter from "../../layout/NewsLetter";
import TestimonialSlider from "../../layout/TestimonialSlider";
import { motion } from "framer-motion";
 
import Banner from "../../layout/Banner";
import Marquee from "../../layout/Marquee";
import TARA from "../../layout/Tara";
// import Marquee from "../../layout/marquee";
import { useNavigate } from "react-router-dom";
 

function Home() {

  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
     
      <NavBar />
 
      {/* Hero Section */}
      <section className="bg-white py-6 md:py-10 text-left relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-30 -z-10"></div>
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h1 className="font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl text-neutral-900 font-future">
            Powering the Data with AI-Driven Intelligence
          </h1>
          <br />
          <p className="text-xl sm:text-2xl md:text-3xl mb-8 md:mb-12 [&>a]:text-blue-500">
            A cutting-edge suite of AI solutions that empower businesses with innovation, data-driven decisions, and security.
          </p>
          <div className="flex justify-start gap-4 md:gap-6">
            <button className="bg-black text-white px-6 py-3 md:px-10 md:py-4 text-lg md:text-xl rounded-md hover:bg-gray-800 transition-transform transform hover:scale-105 shadow-lg" onClick={() => navigate("/Contact")}>
              Book Demo
            </button>
          </div>
        </div>
      </section>
 
      { /* How We Do It Section */ }
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-50 via-white to-blue-100">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">
            AI GenWorks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
            <div className="space-y-6 md:space-y-8 order-2 md:order-1">
              {[
                {
                  title: "LLM Training Services",
                  description: "Build a strong AI model with our LLM Fine-Tuning & Prompt Engineering services. Our offshore AI experts are supported by AI-enabled Task Analysis & Review Application - TARA.",
                },
                {
                  title: "Domain Datasets Creation",
                  description: "Get high-quality datasets for leading AI models. With our platform, flexible offshore services, and technical expertise, we deliver diverse domain datasets essential for building strong AI solutions.",
                },
                {
                  title: "Enterprise AI Application",
                  description: "Our offshore AI Experts are ready to support you whether you are building a foundational AI model or a custom enterprise solution.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 md:p-6 lg:p-8 rounded-lg shadow-lg border-l-4 border-gray-600"
                >
                  <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-4">{item.title}</h4>
                  <p className="text-base md:text-lg text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center w-full h-full order-1 md:order-2 mb-8 md:mb-0">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px]"
              >
                <img
                  src="/src/assets/Home/Homepage - AI Genworx.gif"
                  className="w-full h-full object-contain rounded-lg shadow-md"
                  alt="AI GenWorks Visuals"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6 md:mb-10">
            Data DeepInsight
          </h2>
          <h3 className="text-xl md:text-3xl text-center text-gray-900 mb-8 md:mb-16">
            Snowflake | Databricks | Microsoft Fabric
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
            <div className="space-y-6 md:space-y-8 order-2 md:order-1">
              {[
                {
                  title: "Snowflake",
                  description: "Get business insights at scale with AI-enabled data foundation, modernization, and platform management. Our offshore Snowflake experts and solution architects help your decision-making process to be AI-enabled.",
                },
                {
                  title: "Databricks",
                  description: "We have come up with a wide range of solutions designed to help organizations with data analytics and management, machine learning, and AI-driven automation.",
                },
                {
                  title: "Microsoft Fabric",
                  description: "Comprehensive analytics solution for enterprises, combining data integration, warehousing, and intelligence in a unified platform.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 md:p-6 lg:p-8 rounded-lg shadow-lg border-l-4 border-gray-600"
                >
                  <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-4">{item.title}</h4>
                  <p className="text-base md:text-lg text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center w-full h-full order-1 md:order-2 mb-8 md:mb-0">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px]"
              >
                <img
                  src="/src/assets/Home/Homepage - Data DeepInsights.gif"
                  className="w-full h-full object-contain rounded-lg shadow-md"
                  alt="Data DeepInsights Visuals"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
 
      {/* Ai CyberSheild */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-50 via-white to-blue-100">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-10">
            AI CyberShield - Fortifying the Future with Intelligent Security
          </h2>
          <h2 className="text-xl md:text-2xl text-center mb-10 md:mb-20">
            Empower your enterprise with next-gen AI-driven security and cloud resilience.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <div className="space-y-6 md:space-y-8 order-2 md:order-1">
              {[
                {
                  title: "Nebius AI Cloud Solutions",
                  description: "Scalable, high-performance AI infrastructure to build, tune, and run AI models on top-notch NVIDIA GPUs.",
                },
                {
                  title: "Splunk Cybersecurity",
                  description: "Advanced threat detection & real-time monitoring to safeguard your digital assets.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 md:p-6 lg:p-8 rounded-lg shadow-lg border-l-4 border-gray-600"
                >
                  <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-4">{item.title}</h4>
                  <p className="text-base md:text-lg text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
 
            <div className="flex items-center justify-center w-full h-full order-1 md:order-2 mb-8 md:mb-0">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px]"
              >
                <img
                  src="/src/assets/Home/Homepage - AI CyberShield.gif"
                  className="w-full h-full object-contain rounded-lg shadow-md"
                  alt="AI CyberShield Visuals"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
 
      {/* TARA Section */}
      <TARA />
 
      {/* Banner */}
      <Banner />
 
      {/* Sliding Logo Marquee Section */}
      <Marquee />
 
      <TestimonialSlider />
 
      <div className="w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"></div>
 
      <Contact />
 
      <div className="w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"></div>
 
      <NewsLetter />
      <Footer />
    </div>
  );
}
 
export default Home;