/* eslint-disable no-unused-vars */
import React from 'react';
import AIKRotate from '../../layout/AIKRotate';
import Contact from '../../layout/Contact';
import Footer from '../../layout/Footer';
import Navbar from '../../layout/NavBar';
import Newsletter from '../../layout/NewsLetter';
import TestimonialSlider from '../../layout/TestimonialSlider';
 
const AI_Knowledge = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Add Comota font import in your head section or CSS file */}
      <style>
        {`
          @import url('https://fonts.cdnfonts.com/css/comota');
        `}
      </style>
     
          <Navbar/>
      {/* Hero Section */}
      <section className="bg-white py-20 text-center">
        <div className="max-w-10zxl mx-auto px-8">
          <h1 className="text-6xl font-bold mb-8">
          AI Knowledge Solution
                    </h1>
              <AIKRotate/>
          <p className="text-lg mb-13 text-gray-600">
          Harness the power of Prompt Engineering and LLM Apps like AI Tutors, annotation, dialog generation, and code evaluation to transform your business. </p>
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
          <p className="text-lg text-justify">
          Harness the power of Generative AI and LLMs to deliver tailored solutions for modern businesses. From precise Prompt Engineering to scalable LLM Business Applications, our expertise transforms data into actionable insights, driving efficiency, innovation, and growth. Explore how we can redefine your AI journey.  </p>
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
                  title: "Streamlined CI/CD Pipelines for Rapid Deployment",
                  description:
                  "Automating and integrating workflows to ensure faster, reliable, and consistent AI/ML model deployments.     "           },
                {
                  title: "Comprehensive Testing & QA for Excellence",
                  description:
                 " Rigorous quality assurance practices to validate model accuracy, reliability, and performance across real-world scenarios"                },
                {
                  title: "Advanced Feature Engineering for Better Insights",
                  description:
                    "Transforming raw data into valuable features to enhance model predictions and performance.",
                },
                {
                  title: "Precision Tuning for Optimal Model Efficacy",
                  description:
                    "Fine-tuning AI models to maximize efficiency, scalability, and real-world impact.",
                },
              ].map((item, idx) => (
                <div key={idx}>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-justify">{item.description}</p>
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
      <br />
 
      <div class="absolute w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"></div>
      <br />
      {/* TARA Section */}
      <section className="bg-[#323232] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">TARA - Task Assignment and Reviewing Application</h2>
          <p className="text-lg text-white text-justify">
            TARA (Task Assignment and Reviewing Application) is an advanced task management solution designed to streamline project workflows, enhance team productivity, and provide data-driven insights. It offers key features such as project management with Kanban boards, backlog tracking, and timeline management, a leaderboard to identify top performers, and technology-wise reporting with approval and rejection analysis. Additionally, its AI-powered performance prediction helps organizations forecast future trends and optimize decision-making. TARA ensures efficiency, transparency, and accountability, making it an essential tool for modern teams.
          </p>
        </div>
      </section>
      <br />
      <div class="absolute w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"></div>
    <br />
    <Contact />
    <br />
    <div class="absolute w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"></div>
<br />
      <TestimonialSlider />
      <div class="absolute w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"></div>
      <Newsletter />
      <Footer />
    </div>
  );
}
 
export default AI_Knowledge;