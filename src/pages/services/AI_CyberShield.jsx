import Contact from "../../layout/Contact";
import Footer from "../../layout/Footer";
import NavBar from "../../layout/NavBar";
import NewsLetter from "../../layout/NewsLetter";
import Marquee from "../../layout/Marquee";
import { motion } from "framer-motion";
import TestimonialSlider from "../../layout/TestimonialSlider";
import TARA from "../../layout/Tara";
import { useNavigate } from "react-router-dom"; 
 
const AI_CyberShield = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
 
      {/* Hero Section - Improved Responsiveness */}
      <section className="bg-white py-6 md:py-10 text-left relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-30 -z-10"></div>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-16">
          {/* Text Content */}
          <div className="w-full space-y-4 md:space-y-6">
            <h1 className="font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl text-neutral-900 font-future">
              AI CyberShield            
            </h1>
            <h2 className="font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl text-neutral-900 font-future">
              Secure, Scalable, and AI-Optimized Infrastructure
            </h2>
 
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-6 md:mb-10">
              Empower your enterprise with next-gen AI cloud computing and cybersecurity solutions for high-performance workloads and real-time threat intelligence. Get secured with scalable AI infrastructure and advanced security solutions to ensure seamless AI model training, data security, and compliance.            
            </p>
 
            <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-6 md:gap-0">
              <button className="w-full sm:w-auto bg-black text-white px-6 md:px-10 py-3 md:py-4 text-lg md:text-xl rounded-md hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg"  onClick={() => navigate("/Contact")}>
                Book Demo
              </button>
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mt-6 sm:mt-0">
                <img
                  src="/src/assets/Nebius logo.svg"
                  alt="Nebius Logo"
                  className="h-10 sm:h-12 md:h-15 object-contain"
                />
                <img
                  src="/src/assets/Splunk Logo.svg"
                  alt="Splunk Logo"
                  className="h-12 sm:h-15 md:h-20 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* AI-Powered Performance & Security - Improved Responsiveness */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-50 via-white to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6 md:mb-12 leading-tight md:leading-[70px]">
            AI-Powered Performance & Security          
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-center text-gray-600 mb-10 md:mb-16 leading-relaxed">
            Modern enterprises need scalable AI computing power and robust cybersecurity frameworks to stay ahead. With Nebius AI Cloud & Splunk Cybersecurity Solutions, we deliver:
          </p>
 
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Unmatched AI computing performance with NVIDIA-powered clusters",
                description: ""
              },
              {
                title: "Enterprise-grade cybersecurity with real-time threat monitoring",
                description: ""
              },
              {
                title: "Seamless AI infrastructure & security integration",
                description: ""
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border-l-4 border-neutral-600 h-auto sm:h-40 md:h-48 flex flex-col justify-center"
              >
                <h4 className="text-xl sm:text-2xl font-bold text-gray-800">{item.title}</h4>
                <p className="text-base sm:text-lg text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* Nebius AI Cloud Section - Improved Responsiveness */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-50 via-white to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Added Nebius Logo */}
          <div className="flex justify-center mb-0">
            <img
              src="/src/assets/Nebius logo.svg"
              alt="Nebius Logo"
              className="h-8 md:h-10 object-contain"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6 md:mb-12 leading-tight md:leading-[70px]">
            Nebius AI Cloud – High-Performance Computing for AI Workloads    
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-center text-gray-600 mb-10 md:mb-16 leading-relaxed">
            The backbone of AI innovation lies in robust, scalable, and efficient infrastructure. Our Nebius AI Cloud solutions ensure lightning-fast AI model training, deep learning, and inference capabilities.
          </p>
 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">Our AI Cloud Solutions: </h3>
              {[
                {
                  title: "NVIDIA H100 & H200 Clusters (aaS) ",
                  description: "Unparalleled AI acceleration with cloud-hosted NVIDIA GPUs Scalable infrastructure for LLM training & deep learning  "
                },
                {
                  title: "NVIDIA GB200 (Blackwell) (aaS) ",
                  description: " Cutting-edge Blackwell architecture for next-gen AI workloads   Optimized for GenAI, RLHF, and high-performance computing "
                },
                {
                  title: "InfiniBand Network ",
                  description: "Ultra-low latency, high-bandwidth networking for AI model training Seamless GPU-to-GPU communication for distributed AI workloads "
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border-l-4 border-neutral-600"
                >
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4">{item.title}</h4>
                  <p className="text-base sm:text-lg text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
 
            {/* Right Content */}
            <div className="flex items-center justify-center w-full h-[650px] sm:h-[450px] md:h-[550px] lg:h-[650px] mt-6 md:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="w-full h-[650px]"
              >
                <img
                  src="/src/assets/AI CyberShield/AI CyberShield - Nebius.gif"
                  className="w-full h-[650px] object-contain rounded-lg shadow-md"
                  alt="AI Models Animation"
                />
              </motion.div>
            </div>
          </div>
         
          {/* Animated Heading Using Tailwind */}
          <div className="mt-12 md:mt-20 mb-6 md:mb-10">
            <div className="relative overflow-hidden max-w-full sm:max-w-2xl md:max-w-4xl mx-auto">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 uppercase tracking-widest border-b-2 border-gray-500 pb-2 relative">
                <div className="px-2">
                  <span className="bg-gradient-to-r from-gray-600 via-black-600 to-gray-600 bg-clip-text text-transparent">Ideal for:</span> <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">LLM training, AI-powered applications, generative AI, and deep learning.</span>
                </div>
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-black-400 via-purple-500 to-blue-400 w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* Splunk Cybersecurity Section - Improved Responsiveness */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-50 via-white to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Added Splunk Logo */}
          <div className="flex justify-center mb-2">
            <img
              src="/src/assets/Splunk Logo.svg"
              alt="Splunk Logo"
              className="h-20 sm:h-16 md:h-20 object-contain"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6 md:mb-12 leading-tight md:leading-[70px]">
            Splunk Cybersecurity – AI-Enabled Threat Intelligence & Compliance            
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-center text-gray-600 mb-10 md:mb-16 leading-relaxed">
            In the age of AI-driven cyber threats, enterprises need AI-enabled real-time security analytics to detect, prevent, and respond to attacks. Our Splunk Cybersecurity solutions provide:
          </p>
 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">Splunk SIEM (Security Information & Event Management) </h3>
              {[
                {
                  description: "AI-powered security monitoring to detect threats in real-time RAG-Based Models (Retrieval-Augmented Generation) Automated incident response for faster threat mitigation Regulatory compliance across industries (SOC 2, GDPR, HIPAA) Example: Enterprises using Splunk SIEM have reduced security breach detection time by 40%, improving overall cybersecurity resilience."
                   
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border-l-4 border-neutral-600"
                >
                  <p className="text-base sm:text-lg text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
 
            {/* Right Content */}
            <div className="flex items-center justify-center w-full h-[650px] sm:h-[450px] md:h-[550px] lg:h-[650px] mt-6 md:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="w-full h-[650px]"
              >
                <img
                 src="/src/assets/AI CyberShield/AI CyberShield - Splunk.gif"
                  className="w-full h-full object-contain rounded-lg shadow-md"
                  alt="AI Models Animation"
                />
              </motion.div>
            </div>
          </div>
 
          {/* Why Choose Us */}
          <div className="mt-12 md:mt-20 bg-blue-50 rounded-lg p-6 md:p-12 shadow-lg text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-8">Why Choose us?</h3>
            <ul className="text-base sm:text-lg space-y-4 md:space-y-6 text-gray-700">
              <li className="flex items-center justify-center">
                <span className="mr-3 text-blue-600 text-2xl md:text-3xl"></span>
                Dedicated Offshore Cyber-Security Center
              </li>
              <li className="flex items-center justify-center">
                <span className="mr-3 text-blue-600 text-2xl md:text-3xl"></span>
                AI-Optimized Cloud Infrastructure for GenAI, LLMs, and deep learning              
              </li>
              <li className="flex items-center justify-center">
                <span className="mr-3 text-blue-600 text-2xl md:text-3xl"></span>
                Enterprise-grade cybersecurity to protect mission-critical applications
              </li>
              <li className="flex items-center justify-center">
                <span className="mr-3 text-blue-600 text-2xl md:text-3xl"></span>
                Seamless Integration with existing AI & cloud eco-systems                              
              </li>
            </ul>
            <div className="mt-8 md:mt-12">
              <button className="px-6 sm:px-8 md:px-10 py-3 md:py-4 bg-gray-600 text-white text-lg md:text-xl font-semibold rounded-lg shadow-lg hover:bg-gray-700 transition duration-300"  onClick={() => navigate("/Contact")}>
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
     
      {/* Banner Section - Improved Responsiveness */}
      <div className="bg-black text-white py-10 md:py-16 px-4 sm:px-8 md:px-16 lg:px-32 text-center relative">
        <div className="absolute inset-0 bg-[#323232] from-#323232-900 to-#323232 opacity-75"></div>
       
        <div className="relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 md:mb-6 uppercase tracking-wide">
            The Ultimate NVIDIA-Powered Cloud for AI Explorers
          </h1>
          <div className="flex flex-col items-center gap-4">
            <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-200 border border-gray-600 px-4 md:px-6 py-2 md:py-3 inline-block rounded-lg shadow-lg max-w-md md:max-w-lg">
              Create, Optimize & Scale AI Training Model with H100, H200 GPU clusters
            </p>
            <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-200 border border-gray-600 px-4 md:px-6 py-2 md:py-3 inline-block rounded-lg shadow-lg max-w-md md:max-w-lg">
              Get Equipped with a fine-tuning eco-system with on-demand GPUs
            </p>
            <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-200 border border-gray-600 px-4 md:px-6 py-2 md:py-3 inline-block rounded-lg shadow-lg max-w-md md:max-w-lg">
              Cost-effective AI environment, especially for GenAI applications.
            </p>
          </div>
        </div>
       
        <div className="mt-10 md:mt-16 border-t border-gray-700 pt-6 md:pt-8 relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 md:mb-6 uppercase tracking-wide">
            Enhancing Organizational Resilience with Splunk-Powered Cybersecurity
          </h1>
          <div className="flex flex-col items-center gap-4">
            <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-200 border border-gray-600 px-4 md:px-6 py-2 md:py-3 inline-block rounded-lg shadow-lg max-w-md md:max-w-lg">
              Prevent Critical Issues Proactively before negative business impacts
            </p>
            <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-200 border border-gray-600 px-4 md:px-6 py-2 md:py-3 inline-block rounded-lg shadow-lg max-w-md md:max-w-lg">
              Bounce Back, quick & decisive, to keep customers happy.
            </p>
            <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-200 border border-gray-600 px-4 md:px-6 py-2 md:py-3 inline-block rounded-lg shadow-lg max-w-md md:max-w-lg">
              Adapt & Evolve quickly & continuously.
            </p>
          </div>
        </div>
      </div>
 
      <TARA />
      <Marquee/>
      <Contact />
      <TestimonialSlider/>
      <NewsLetter />
      <Footer />
    </div>
  );
};
 
export default AI_CyberShield;