/* eslint-disable no-unused-vars */
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import AiGen from "../../assets/AiGen.png";
import AiGenHero from "../../components/AiGenHero";
import DataCreate from "../../components/DataCreate";
import Banner from "../../layout/Banner";
import Contact from "../../layout/Contact";
import Footer from "../../layout/Footer";
import Marquee from "../../layout/Marquee";
import NavBar from "../../layout/NavBar";
import NewsLetter from "../../layout/NewsLetter";
import TARA from "../../layout/Tara";
import { useNavigate } from "react-router-dom";
const AI_GenWorks = () => {
  const navigate = useNavigate();

  const cardData = [
    {
      title: "Up-Scale Your AI Models",
      items: [
        "🔹 Reinforcement Learning from Human Feedback [RLFH]",
        "🔹 Synchronized Fine Tuning [SFT]",
        "🔹 Adversarial Training & Red Teaming",
        "🔹 Few-shot, Chain-of-Thoughts, Iterative, Hybrid Prompting"
      ]
    },
    {
      title: "Domain Dataset Creation",
      items: [
        "🔹 STEM [Science, Technology, Engineering, Mathematics]",
        "🔹 Software Coding [15+ Coding Languages]",
        "🔹 Other Domains [Civil, Finance, Medical]"
      ]
    },
    {
      title: "Enterprise AI Application Development",
      items: [
        "🔹 Full-Stack GenAI Development",
        "🔹 RAG-Based Models",
        "🔹 Agentic AI"
      ]
    }
  ];
 
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex((prevIndex) =>
        (prevIndex + 1) % cardData.length
      );
    }, 5000);
 
    return () => clearInterval(interval);
  }, [cardData.length]);
 
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
 
      {/* Hero Section */}
      <section className="bg-white py-12 md:py-20 lg:py-32 text-left relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-30 -z-10"></div>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-16 gap-8">
          {/* Text Content */}
          <div className="md:w-1/2 space-y-4 md:space-y-6">
            <h1 className="font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-neutral-900 font-future">
              From AI Training to Scalable Success Via Performance
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-6 md:mb-12">
              Turn AI-driven creativity into real-world business impact with LLM Fine-tuning, Domain Dataset Creation & AI Application Development.
            </p>
            <div className="flex justify-start space-x-4 md:space-x-6">
              <button className="bg-black text-white px-6 py-3 md:px-8 lg:px-10 text-base md:text-lg lg:text-xl rounded-md hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg"  onClick={() => navigate("/Contact")}>
                Book Demo
              </button>
            </div>
          </div>
 
          {/* Animated Cards Section */}
          <div className="md:w-1/2 relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] w-full mt-8 md:mt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCardIndex}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.9 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
                className="absolute w-full bg-white shadow-lg rounded-lg p-4 sm:p-6 md:p-8 border border-gray-100">
             
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-4 text-gray-800">
                  {cardData[currentCardIndex].title}
                </h2>
                <ul className="space-y-1 sm:space-y-2 text-base md:text-lg text-gray-700">
                  {cardData[currentCardIndex].items.map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
 
            {/* Pagination Dots */}
            <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 flex space-x-2">
              {cardData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCardIndex(index)}
                  className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-colors duration-300 ${
                    currentCardIndex === index
                      ? 'bg-black'
                      : 'bg-gray-300 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
 
      {/* Up-Scale Your AI Models with LLM Fine-Tuning & Prompt Engineering */}
      <section className="py-10 md:py-16 bg-gradient-to-r from-blue-50 via-white to-blue-100 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6 md:mb-12">
            Up-Scale Your AI Models with LLM Fine-Tuning & Prompt Engineering
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-center text-gray-600 mb-8 md:mb-16 leading-relaxed">
            Enhance your AI's intelligence. Our brilliant minds offer more accuracy
            and adaptability with our advanced LLM services.
          </p>
 
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-4 md:mb-8 text-center lg:text-left">
            Our LLM Optimization Expertise:
          </h3>
 
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-12 order-2 lg:order-1">
              {[
                {
                  title: "Reinforcement Learning from Human Feedback (RLHF)",
                  description:
                    "Improve model alignment through human-guided reinforcement learning for ethical and accurate AI responses.",
                },
                {
                  title: "Synchronized Fine-Tuning (SFT)",
                  description:
                    "Optimize AI models with domain-specific training to enhance contextual understanding and performance.",
                },
                {
                  title: "Adversarial Training & Red Teaming",
                  description:
                    "Strengthen AI defenses by identifying vulnerabilities, mitigating biases, and improving security against adversarial attacks.",
                },
                {
                  title: "Advanced Prompt Engineering",
                  description:
                    "Leverage Few-shot, Chain-of-Thoughts (CoT), Iterative, and Hybrid Prompting to refine AI reasoning and adaptability.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg border-l-4 border-gray-600"
                >
                  <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-4">{item.title}</h4>
                  <p className="text-base md:text-lg text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
 
            {/* Right Content - Ensuring AiGenHero fits within screen */}
            <div className="relative flex justify-center items-center w-full h-auto mb-8 lg:mb-0 order-1 lg:order-2">
              <AiGenHero className="w-full max-w-lg" />
            </div>
          </div>
 
          {/* Why Choose Us */}
          <div className="mt-12 md:mt-20 bg-blue-50 rounded-lg p-6 md:p-12 shadow-lg text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-8">Why Choose Us?</h3>
            <ul className="text-base md:text-lg space-y-3 md:space-y-6 text-gray-700">
              <li className="flex items-center justify-center">
                <span className="mr-3 text-blue-600 text-xl md:text-3xl"></span>
                AI models tailored for enterprise-grade applications
              </li>
              <li className="flex items-center justify-center">
                <span className="mr-3 text-blue-600 text-xl md:text-3xl"></span>
                Secure, efficient, and scalable fine-tuning solutions
              </li>
              <li className="flex items-center justify-center">
                <span className="mr-3 text-blue-600 text-xl md:text-3xl"></span>
                Cutting-edge methodologies for next-gen AI performance
              </li>
            </ul>
            <div className="mt-6 md:mt-12">
              <button className="px-6 py-3 md:px-10 md:py-4 bg-gray-600 text-white text-base md:text-xl font-semibold rounded-lg shadow-lg hover:bg-gray-700 transition duration-300"  onClick={() => navigate("/Contact")}>
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
 
      {/* Domain-Specific Dataset Creation – Powering AI with Precision Data */}
      <section className="py-10 md:py-20 bg-gradient-to-r from-blue-50 via-white to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6 md:mb-12">
            Domain-Specific Dataset Creation – Powering AI with Precision Data
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-center text-gray-600 mb-8 md:mb-16 leading-relaxed">
            Fuel your AI models with high-quality, domain-specific datasets tailored for maximum accuracy and performance. Our curated datasets ensure better model training, contextual understanding, and real-world adaptability across industries.
          </p>
 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-12 order-2 md:order-1">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">Our Expertise in Domain Dataset Creation:</h3>
              {[
                {
                  title: "STEM (Science, Technology, Engineering, Mathematics)",
                  description:
                    "Build AI models with structured data in core scientific and technical fields for advanced problem-solving.",
                },
                {
                  title: "Software Coding (15+ Programming Languages)",
                  description:
                    "Train AI for code generation, debugging, and software development with datasets covering Python, Java, C++, Rust, and more.",
                },
                {
                  title: "Other Specialized Domains (Civil, Finance, Medical, and Beyond)",
                  description:
                    "Custom-built datasets for AI applications in finance, healthcare, civil engineering, and other critical sectors.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border-l-4 border-gray-600"
                >
                  <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-4">{item.title}</h4>
                  <p className="text-base md:text-lg text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
 
            {/* Right Content */}
            <div className="relative flex justify-center items-center w-full h-auto mb-8 md:mb-0 order-1 md:order-2">
              <DataCreate className="w-full max-w-lg" />
            </div>
          </div>
 
          {/* Why Choose Us */}
          <div className="mt-12 md:mt-20 bg-blue-50 rounded-lg p-6 md:p-12 shadow-lg text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-8">Why Choose Our Data Solutions?</h3>
            <ul className="text-base md:text-lg space-y-3 md:space-y-6 text-gray-700">
              <li className="flex items-center justify-center">
                <span className="mr-3 text-blue-600 text-xl md:text-3xl"></span>
                High-quality, curated & structured domain datasets
              </li>
              <li className="flex items-center justify-center">
                <span className="mr-3 text-blue-600 text-xl md:text-3xl"></span>
                Multi-industry expertise for customized AI training
              </li>
              <li className="flex items-center justify-center">
                <span className="mr-3 text-blue-600 text-xl md:text-3xl"></span>
                Scalable, secure, and bias-mitigated data pipelines
              </li>
            </ul>
            <div className="mt-6 md:mt-12">
              <button className="px-6 py-3 md:px-10 md:py-4 bg-gray-600 text-white text-base md:text-xl font-semibold rounded-lg shadow-lg hover:bg-gray-700 transition duration-300"  onClick={() => navigate("/Contact")}>
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
 
      {/* Enterprise AI Application Development – Build, Innovate & Scale with AI */}
      <section className="py-10 md:py-20 bg-gradient-to-r from-blue-50 via-white to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6 md:mb-12">
            Enterprise AI Application Development – Build, Innovate & Scale with AI
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-center text-gray-600 mb-8 md:mb-16 leading-relaxed">
            Transform your business with cutting-edge AI applications designed for scalability, intelligence, and real-world impact. From full-stack GenAI solutions to autonomous AI agents, we develop enterprise-ready AI applications tailored to your needs.
          </p>
 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-12 order-2 md:order-1">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">Our AI Development Expertise:</h3>
              {[
                {
                  title: "Full-Stack GenAI Development",
                  description:
                    "Build end-to-end AI-powered applications with seamless integration, intuitive interfaces, and enterprise-grade performance.",
                },
                {
                  title: "RAG-Based Models (Retrieval-Augmented Generation)",
                  description:
                    "Enhance AI responses with real-time, knowledge-backed insights, improving accuracy and relevance in enterprise applications.",
                },
                {
                  title: "Agentic AI (Autonomous AI Agents)",
                  description:
                    "Develop AI systems that can reason, plan, and execute tasks independently, optimizing workflows and business processes.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border-l-4 border-gray-600"
                >
                  <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-4">{item.title}</h4>
                  <p className="text-base md:text-lg text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
 
            {/* Right Content */}
            <div className="relative mb-8 md:mb-0 order-1 md:order-2">
              <img
                src={AiGen}
                alt="Enterprise AI Application Development"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>
 
          {/* Why Choose Us */}
          <div className="mt-12 md:mt-20 bg-blue-50 rounded-lg p-6 md:p-12 shadow-lg text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-8">Why Choose Our AI Development?</h3>
            <ul className="text-base md:text-lg space-y-3 md:space-y-6 text-gray-700">
              <li className="flex items-center justify-center">
                <span className="mr-3 text-blue-600 text-xl md:text-3xl"></span>
                Custom-built AI applications for industry-specific needs
              </li>
              <li className="flex items-center justify-center">
                <span className="mr-3 text-blue-600 text-xl md:text-3xl"></span>
                Seamless integration with existing enterprise systems
              </li>
              <li className="flex items-center justify-center">
                <span className="mr-3 text-blue-600 text-xl md:text-3xl"></span>
                Scalable, secure, and bias-mitigated data pipelines
              </li>
            </ul>
            <div className="mt-6 md:mt-12">
              <button className="px-6 py-3 md:px-10 md:py-4 bg-gray-600 text-white text-base md:text-xl font-semibold rounded-lg shadow-lg hover:bg-gray-700 transition duration-300"  onClick={() => navigate("/Contact")}>
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
 
      <TARA />
      <Banner />
      <Marquee />
      <Contact />
      <NewsLetter />
      <Footer />
    </div>
  );
};
 
export default AI_GenWorks;