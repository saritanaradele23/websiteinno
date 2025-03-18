/* eslint-disable no-unused-vars */
import React from 'react'
import TARA from '../../layout/Tara'
import Contact from '../../layout/Contact'
import Marquee from '../../layout/Marquee'
import Newsletter from '../../layout/NewsLetter'
import Footer from '../../layout/Footer'
import Navbar from '../../layout/NavBar'
import { FaSnowflake, FaDatabase, FaMicrosoft } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Data_DeepInsights = () => {

    const navigate = useNavigate();
  
  const approaches = [
    {
      title: "Data Architecture & Platform Modernization Strategy",
      subtitle: "Reimagine Your Data Infrastructure for the AI Era",
      description: "Powered by Snowflake, Databricks, and Microsoft Fabric for seamless modernization.",
      steps: [
        "Assess your current data architecture and identify bottlenecks",
        "Design a scalable, cloud-native data ecosystem",
        "Enable real-time data streaming and AI readiness"
      ],
      icon: "🏗️"
    },
    {
      title: "Data Platform & Pipeline Implementation",
      subtitle: "Seamless Data Flow. Maximum Efficiency.",
      description: "Designed for AI-driven applications, analytics, and enterprise scalability",
      steps: [
        "Build high-performance data pipelines for real-time & batch processing",
        "Automate ETL/ELT workflows to improve speed & reliability",
        "Implement data lakes & warehouses for unified data access"
      ],
      icon: "🔀"
    },
    {
      title: "AI/ML Business Analytics & Visualization",
      subtitle: "From Raw Data to Actionable Insights",
      description: "AI-powered insights at your fingertips with Power BI, Tableau, and custom solutions",
      steps: [
        "Deploy predictive & prescriptive analytics for better decision-making",
        "Build interactive dashboards for real-time business monitoring",
        "Use AI-powered insights to enhance customer experience & operational efficiency"
      ],
      icon: "📊"
    },
    {
      title: "Data Management & Governance",
      subtitle: "Secure, Compliant, and Reliable Data",
      description: "Compliance-ready solutions with GDPR, HIPAA, SOC 2, and industry best practices",
      steps: [
        "Implement data security, access controls, and compliance frameworks",
        "Ensure data accuracy, consistency, and lineage tracking",
        "Manage data lifecycle, retention, and privacy regulations"
      ],
      icon: "🔒"
    },
    {
      title: "DevOps & Cost Spend Optimization",
      subtitle: "Maximize Performance. Minimize Costs.",
      description: "Cost-efficient, AI-driven DevOps for more competent cloud management",
      steps: [
        "Optimize cloud costs with efficient storage and processing strategies",
        "Implement CI/CD pipelines for faster data deployment & model training",
        "Automate infrastructure scaling & performance tuning"
      ],
      icon: "💡"
    }
  ];

  return (
    <>
      <Navbar/>
      {/* Hero Section */}
      <section className="bg-white py-6 md:py-10 text-left relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-30 -z-10"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-neutral-900 font-future">
            Data DeepInsights
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-2">
              Unlock the Power of Enterprise Data
            </span>
          </h1>
          <br />
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-4 md:mt-6 max-w-4xl text-gray-700 leading-relaxed">
            Turn raw data into actionable intelligence with our AI-enabled data engineering and analytics solutions. Our offshore workforce of <strong>150+ brilliant brains</strong> with industry-leading expertise like <strong>Snowflake, Databricks, and Microsoft Fabric</strong> to build scalable, secure, and AI-ready data ecosystems for your business.
          </p>
          <div className="flex justify-start gap-4 md:gap-6 mt-6 md:mt-8">
            <button className="bg-black text-white px-6 sm:px-8 md:px-10 py-3 md:py-4 text-base md:text-xl rounded-md hover:bg-gray-800 transition-transform transform hover:scale-105 shadow-lg"  onClick={() => navigate("/Contact")}>
              Book Demo
            </button>
          </div>  
        </div>
      </section>

      {/* Why Data DeepInsights Section */}
      <section className="py-10 md:py-20 bg-gradient-to-r from-blue-50 via-white to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-8 md:mb-12">
            Why Data DeepInsights?
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-center text-gray-600 mb-10 md:mb-16 leading-relaxed">
            In today's data-driven world, businesses need real-time insights, scalable architectures, and AI-powered analytics to stay ahead. Our expertise in modern data platforms ensures that your data is not just stored but optimized, processed, and transformed into strategic value.
          </p>
        </div>
      </section>

      <section className="pb-10 md:pb-20 bg-gradient-to-r from-blue-50 via-white to-blue-100">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-8 md:mb-12">
            AI Enabled Approach to Data Excellence
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-center text-gray-600 mb-10 md:mb-16 leading-relaxed">
            AI Enabled approach empower your enterprise with end-to-end data engineering and analytics solutions designed to modernize infrastructure, optimize pipelines, and drive AI-powered insights. From strategy to execution, we ensure your data works more innovative, faster, and more efficiently.
          </p>
       
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
            {/* Left Content */}
            <div className="space-y-8 md:space-y-12">
              {approaches.map((approach, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 md:p-6 rounded-lg shadow-lg border-l-4 border-gray-600"
                >
                  <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-4">{approach.title}</h4>
                  <p className="text-base md:text-lg font-medium text-gray-700 mb-2 md:mb-4">{approach.subtitle}</p>
                  <ul className="list-decimal pl-5 md:pl-6 mb-3 md:mb-4 space-y-1 md:space-y-2">
                    {approach.steps.map((step, stepIdx) => (
                      <li key={stepIdx} className="text-base md:text-lg text-gray-600">{step}</li>
                    ))}
                  </ul>
                  <p className="text-base md:text-lg text-gray-600 italic">{approach.description}</p>
                </div>
              ))}
            </div>
       
            {/* Right Content - Only sticky on desktop */}
            <div className="flex items-start justify-start w-full md:sticky md:top-8 h-auto overflow-visible">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="w-full h-full"
              >
                <img
                  src="/src/assets/Data DeepInsights/Data DeepInsights - full page.gif"
                  className="w-full h-auto object-cover rounded-lg shadow-md md:min-h-[100px]"
                  alt="Data Engineering Process"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Impact Section */}
      <section className="py-10 md:py-16 bg-gradient-to-r from-blue-50 via-white to-blue-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="bg-blue-50 rounded-lg p-6 md:p-12 shadow-lg">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 md:mb-8 text-center">Business Impact</h3>
            <ul className="text-base md:text-lg space-y-4 md:space-y-6 text-gray-700 max-w-2xl mx-auto">
              <li className="text-center">
                Real-time decision-making powered by AI & analytics
              </li>
              <li className="text-center">
                Cost-efficient & scalable data architecture
              </li>
              <li className="text-center">
                Seamless data flows across all enterprise applications
              </li>
            </ul>
            <div className="mt-8 md:mt-12 text-center">
              <p className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">**Ready to Transform Your Data Strategy?**</p>
              <button className="px-6 py-3 md:px-10 md:py-4 bg-[#323232] text-white text-base md:text-xl font-semibold rounded-lg shadow-lg hover:bg-gray-700 transition duration-300" onClick={() => navigate("/Contact")}>
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies We Leverage Section */}
      <section className="py-10 md:py-20 bg-gradient-to-r from-blue-50 via-white to-blue-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 md:mb-6">
            Technologies We Leverage
          </h2>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {/* Snowflake Card */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-xl p-6 md:p-8 flex flex-col items-center text-center"
            >
              <div className="text-gray-600 mb-3 md:mb-4">
                <FaSnowflake size={36} className="md:text-5xl" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-3">
                Snowflake
              </h3>
              <p className="text-gray-600 text-base md:text-lg">
                Fast, scalable, and cost-efficient cloud data warehousing
              </p>
            </motion.div>

            {/* Databricks Card */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-xl p-6 md:p-8 flex flex-col items-center text-center"
            >
              <div className="text-gray-600 mb-3 md:mb-4">
                <FaDatabase size={36} className="md:text-5xl" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-3">
                Databricks
              </h3>
              <p className="text-gray-600 text-base md:text-lg">
                AI-powered analytics & collaborative data science
              </p>
            </motion.div>

            {/* Microsoft Fabric Card */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-xl p-6 md:p-8 flex flex-col items-center text-center sm:col-span-2 md:col-span-1"
            >
              <div className="text-gray-600 mb-3 md:mb-4">
                <FaMicrosoft size={36} className="md:text-5xl" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-3">
                Microsoft Fabric
              </h3>
              <p className="text-gray-600 text-base md:text-lg">
                Unified data management for modern enterprise
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <TARA/>
      <Contact/>
      <Marquee/>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default Data_DeepInsights