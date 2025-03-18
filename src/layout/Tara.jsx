import React from 'react';
import { useNavigate } from "react-router-dom"; 

const TARA = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100">
      {/* TARA Section */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-white border border-gray-200 p-6 sm:p-8 md:p-12 rounded-xl shadow-xl">
            <div className="flex flex-col gap-6 sm:gap-8">
              {/* Header with accent */}
              <div className="relative">
                <div className="absolute left-0 top-0 h-8 sm:h-10 md:h-12 w-1 sm:w-2 bg-black rounded-full"></div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold pl-4 sm:pl-6 text-gray-900 leading-tight">Tune Up the Process with TARA</h2>
              </div>
             
              {/* Content with improved layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div className="bg-gray-50 p-4 sm:p-6 rounded-lg border-l-4 border-gray-800">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800">TARA</h3>
                  <p className="text-sm sm:text-base text-gray-700">
                    Task Assignment & Review Application is a highly adaptable and customizable solution developed for almost any LLM Fine-tuning & Prompt Engineering project. It helps streamline project workflows, enhance team productivity, and provide data-driven insights.
                  </p>
                </div>
               
                <div className="bg-gray-900 p-4 sm:p-6 rounded-lg text-white">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">AI Integration</h3>
                  <p className="text-sm sm:text-base">
                    AI-powered performance prediction helps AI engineers forecast future progress and future obstacles, if any, and optimize decision-making accordingly. TARA ensures efficiency, transparency, and accountability, making it an essential tool for our offshore team of AI engineers.
                  </p>
                </div>
              </div>
             
              {/* CTA Button */}
              <div className="mt-4 sm:mt-6">
                <button 
                  className="w-full sm:w-auto bg-black hover:bg-gray-800 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-medium transition duration-300 flex items-center justify-center sm:justify-start gap-2"  
                  onClick={() => navigate("/Contact")}
                >
                  Get Started with TARA
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
 
export default TARA;