/* eslint-disable no-unused-vars */
import React from "react";
import AIMLtext from "../../layout/AIMLtext";
import Contact from "../../layout/Contact";
import Footer from "../../layout/Footer";
import NavBar from "../../layout/NavBar";
import NewsLetter from "../../layout/NewsLetter";
import TestimonialSlider from "../../layout/TestimonialSlider";
const AI_ML = () => {
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
          Accelerate AI & ML Development with Expert Engineering and Deployment
                    </h1>
          <AIMLtext />
          <p className="text-lg mb-13 text-gray-600">
          We deliver seamless AI & ML solutions with CI/CD pipelines, Testing & QA, Feature Engineering, and Model Tuning to ensure scalability, efficiency, and real-world impact.
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
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-lg">
          Harness the power of Generative AI and LLMs to deliver tailored solutions for modern businesses. From precise Prompt Engineering to scalable LLM Business Applications, our expertise transforms data into actionable insights, driving efficiency, innovation, and growth. Explore how we can redefine your AI journey. </p>
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
                  title: "AI Tutors",
               
                  description:"Delivering intelligent and adaptive AI-driven tutoring solutions for personalized learning experiences."
          },
                {
                  title: "Multilanguage Text, Image & Video Annotation",
                  description:
                    "Enabling precise multilingual annotation for diverse datasets across text, images, and videos.",
                },
                {
                  title: "Dialog Generation",
                  description:
                  "Crafting natural, context-aware conversational AI for seamless interactions.",
                 },
                {
                  title: "Dialog Verification",
                  description:
                  "Ensuring accuracy and consistency in AI-driven conversations through robust validation.",        
                       },
                          {
                        title: "Multi-turn LLM Code Evaluation",
                        description:
                        "Streamlining iterative coding tasks with advanced multi-turn code assessment.",        
                             },
                             {
                              title: "Answer Verification",
                              description:
                              "Providing reliable answer validation to enhance AI accuracy and user trust.",        
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
                src="\src\assets\AIML.gif"
               
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
 
 
 
    {/* <div class="absolute w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"></div> */}
      <Contact />
 
 
      <div class="absolute w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"></div>
       <TestimonialSlider />
     
     
      <div class="absolute w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"></div>
      <NewsLetter />
      <Footer />
    </div>
  );
}
 
 
 
 
export default AI_ML;