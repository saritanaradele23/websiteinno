/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import NavBar from '../../layout/NavBar';
import Footer from '../../layout/Footer';

const images = [
  // Image paths will be added later
  'path/to/image1.png',
  'path/to/image2.png',
  'path/to/image3.png',
  'path/to/image4.png',
  'path/to/image5.png',
  'path/to/image6.png',
];

const EventDetail2 = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar />
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
          InnoSquares at World Summit AI 2024 - Amsterdam
        </h1>
        <p className="text-gray-600 mb-4">📍 Location: Amsterdam, Netherlands</p>
        <p className="text-gray-600 mb-4">📅 Date: October 9-10, 2024</p>

        <p className="text-gray-600 mb-4">
          InnoSquares had an incredible experience at World Summit AI 2024, where we engaged with global AI leaders,
          innovators, and partners. Our discussions revolved around AI, LLM Ops, datasets, and scalable AI solutions,
          highlighting our commitment to shaping the future of Generative AI.
        </p>

        <p className="text-gray-600 mb-4">
          A special thank you to Shibu Varghese, Harish Lakhotiya, Chirag, and Nebius for joining us and sharing
          valuable insights. Events like these strengthen our vision of delivering cutting-edge AI solutions
          to enterprises and early adopters.
        </p>

        <p className="text-gray-600 mb-4">
          Stay tuned for more updates as we continue to innovate and lead in AI transformation!
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mb-2">Team Visited:</h2>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Chirag Hathiari - Founder & Chief Technology Officer</li>
          <li>Kshitij Vashishat - Founder & Chief Strategy Officer</li>
          <li>Harish C. Lakhotia - Founder & Chief Growth Officer</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-700 mb-4">Event Highlights:</h2>
        <div className="relative w-full h-64 bg-gray-200 rounded-lg overflow-hidden mb-6">
          <img
            src={images[currentImage]}
            alt={`Event Highlight ${currentImage + 1}`}
            className="w-full h-full object-cover"
          />
          <button
            onClick={prevImage}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-900"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={nextImage}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-900"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventDetail2;
