/* eslint-disable no-unused-vars */
import React from 'react';
import { Phone, Mail } from 'lucide-react';
import NavBar from '../../layout/NavBar';
import Contact from '../../layout/Contact';
import NewsLetter from '../../layout/NewsLetter';
import Footer from '../../layout/Footer';
import TestimonialSlider from '../../layout/TestimonialSlider';
import Ai from '../../assets/whitepaper/Ai.png';
import brain from '../../assets/whitepaper/brain.png';
import chatbot from '../../assets/whitepaper/chatbot.png';
import diff from '../../assets/whitepaper/diff.png';
import doctorAi from '../../assets/whitepaper/doctorAi.png';
import humanai from '../../assets/whitepaper/humanai.png';
import snowflake from '../../assets/whitepaper/snowflake.png';
import GenAi from '../../assets/whitepaper/GenAi.png';
 
const White_papers = () => {
  // Sample data for guides/white papers
  const guides = [
    { id: 1, title: 'Guide1', image: Ai, description: 'Explore AI advancements and their impact on industries.' },
    { id: 2, title: 'Guide2', image: brain, description: 'Understanding neural networks and deep learning concepts.' },
    { id: 3, title: 'Guide3', image: chatbot, description: 'How chatbots revolutionize customer service in various sectors.' },
    { id: 4, title: 'Guide4', image: diff, description: 'Exploring AI’s impact on different industries and its future potential.' },
    { id: 5, title: 'Guide5', image: doctorAi, description: 'AI in healthcare: Transforming patient care and diagnostics.' },
    { id: 6, title: 'Guide6', image: humanai, description: 'The evolving relationship between humans and artificial intelligence.' }
  ];
 
  // Sample data for top picks section
  const topPicks = [
    { title: 'Snowflake', image: snowflake, description: 'Data warehousing and AI integration with Snowflake technology.' },
    { title: 'Gen AI', image: GenAi, description: 'The future of Generative AI and its transformative potential.' }
  ];
 
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
     
      {/* Main Content */}
      <main className="flex-grow bg-white">
        {/* White Papers Section */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">White Papers</h1>
          <div className="h-1 bg-gradient-to-r from-purple-300 via-blue-300 to-teal-300 mb-12"></div>
         
          <h2 className="text-2xl font-semibold mb-8">Read Our Guides</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <div key={guide.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{guide.title}</h3>
                  <p className="text-gray-600 text-sm">{guide.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div className="w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"></div>
 
        {/* Top Picks Section */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Top Picks</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {topPicks.map((pick) => (
              <div key={pick.title} className="flex flex-col md:flex-row border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-gray-200 h-48 md:w-1/2">
                  <img
                    src={pick.image}
                    alt={pick.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 md:w-1/2 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{pick.title}</h3>
                    <p className="text-gray-600 text-sm">{pick.description}</p>
                  </div>
                  <button className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition">
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <div className="w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"></div>
 
      {/* Additional Sections */}
      <TestimonialSlider />
      <div className="w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"></div>
 
      <Contact />
      <div className="w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"></div>
 
      <NewsLetter />
      <Footer />
    </div>
  );
};
 
export default White_papers;