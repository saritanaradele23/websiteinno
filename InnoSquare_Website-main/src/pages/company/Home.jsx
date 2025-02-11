/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Twitter, Youtube, Linkedin } from 'lucide-react';
import NavBar from '../../layout/NavBar';
import Contact from '../../layout/Contact';
import NewsLetter from '../../layout/NewsLetter';
import Footer from '../../layout/Footer';

// Rotating Text Component
const RotatingText = () => {
  const texts = [
    "AI Knowledge Solutions",
    "Next-Gen Conversation and RAG Solutions",
    "AI | ML Engineering and Deployment"
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout;

    if (isTyping) {
      if (displayText.length < texts[currentTextIndex].length) {
        timeout = setTimeout(() => {
          setDisplayText(texts[currentTextIndex].slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1500);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentTextIndex, texts]);

  return (
    <div className="h-12 bg-white flex items-center justify-center overflow-hidden">
      <h3 className="text-3xl font-['Comota'] min-h-[48px]">
        {displayText}
      </h3>
    </div>
  );
};

function Home() {
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
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-8">Empowering Businesses with Cutting-Edge</h1>

          {/* Marquee Container */}
          <RotatingText />

          <p className="text-lg mb-12 text-gray-600">
            Accelerate innovation, streamline operations, and unlock unparalleled insights with our state-of-the-art Generative AI and LLM solutions tailored to your business needs.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-black text-white px-8 py-3 rounded-md">Book Now</button>
            <button className="bg-black text-white px-8 py-3 rounded-md">Explore Solution</button>
          </div>
        </div>
      </section>


  {/* Description Section */}
  <section className="bg-[#323232] text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-lg">
            We are redefining the possibilities of Generative AI and LLMs for businesses worldwide. We aim to empower industries with tailored AI solutions that drive innovation, efficiency, and growth. From intelligent business applications to domain-specific datasets and scalable AI operations, we combine cutting-edge technology with a customer-centric approach to deliver measurable impact. Together, lets shape the future of AI-powered success.
          </p>
        </div>
        </section>
      
        {/* How We Do It Section */}
        <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">How We Do It</h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="mb-8">
                <h3 className="font-bold mb-2">Multi-Modal Input Integration</h3>
                <p className="text-gray-600">Process diverse data inputs like audio, video, images, and text for comprehensive understanding and generating across modalities</p>
              </div>
              <div className="mb-8">
                <h3 className="font-bold mb-2">Pre-Training</h3>
                <p className="text-gray-600">As a foundational step, the model learns general patterns, relationships, and context from large-scale datasets.</p>
              </div>
              <div className="mb-8">
                <h3 className="font-bold mb-2">Supervised Fine-Tuning (SFT)</h3>
                <p className="text-gray-600">Model training with human-labeled data for task-specific accuracy and reliability.</p>
              </div>
              <div className="mb-8">
                <h3 className="font-bold mb-2">Reinforcement Learning (RLHF / DPO)</h3>
                <p className="text-gray-600">Aligns model behavior with desired outcomes using human feedback or preference optimization.</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img src="src\assets\Homepage animations .gif" alt="AI Brain" className="w-100 h-100 object-cover rectangles" />
            </div>
          </div>
        </div>
      </section>


      <Contact />
      <NewsLetter />

      <Footer />
    </div>
  );
}

export default Home;