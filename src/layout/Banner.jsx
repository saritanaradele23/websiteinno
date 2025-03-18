/* eslint-disable no-unused-vars */
import React from "react";
// import Banner from "./Banner";
import { motion } from "framer-motion";
import { FaBuilding, FaChartLine, FaCheckCircle, FaCode, FaDatabase, FaFlask, FaMedal, FaRobot } from "react-icons/fa";
 
const features = [
  { icon: <FaCode />, title: "15+ Coding Languages", desc: "Build AI models using Python, Java, C++, and more." },
  { icon: <FaRobot />, title: "100+ AI-Powered Prompts", desc: "Unlock AI capabilities with high-quality prompts." },
  { icon: <FaCheckCircle />, title: "QA Review Tool", desc: "Ensure AI output accuracy with our advanced review system." },
  { icon: <FaBuilding />, title: "Agentic Real-Estate AI", desc: "Automate real estate management with AI-driven insights." },
  { icon: <FaFlask />, title: "STEM Experts", desc: "Collaborate with AI specialists in Science & Engineering." },
  { icon: <FaChartLine />, title: "AI for Healthcare, Retail & FinTech", desc: "AI-powered solutions for industry transformation." },
  { icon: <FaDatabase />, title: "Snowflake & Databricks Partners", desc: "Optimize cloud AI with our trusted data partnerships." },
  { icon: <FaMedal />, title: "60+ SnowPro Certified Engineers", desc: "Expert AI engineers with top industry certifications." },
];
 
const Banner = () => {
  return (
    <div className="bg-white text-gray-900 ">
        {/* Hero Section */}
        <h2 className="text-3xl font-bold text-center mb-10">Build High-Performance AI Models with </h2>
 
      {/* Features Grid */}
      <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-8 pb-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-100 rounded-2xl shadow-md flex flex-col items-center text-center border border-gray-200"
          >
            <div className="text-[#323232] text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.desc}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
};
 
export default Banner;