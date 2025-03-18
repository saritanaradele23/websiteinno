/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import NavBar from '../../layout/NavBar';
import Footer from '../../layout/Footer';

const images = [
  // Image paths will be added later
  'path/to/image1.png',
  'path/to/image2.png',
];

const EventDetail1 = () => {
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
          InnoSquares at AI4 Las Vegas 2024 – Shaping the Future of AI!
        </h1>
        <p className="text-gray-600 mb-4">
          We are excited to announce that InnoSquares participated in AI4 Las Vegas 2024, one of the most
          influential AI conferences, happening from August 12th to 14th at the MGM Grand, Las Vegas.
        </p>
        <p className="text-gray-600 mb-4">
          At AI4, our management team will engage with AI industry leaders, explore cutting-edge innovations,
          and showcase how InnoSquares' Generative AI and LLM solutions are transforming businesses worldwide.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mb-2">Key Takeaways:</h2>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>✅ Thought-provoking discussions on the latest AI trends</li>
          <li>✅ Discussions with top AI professionals and enterprises</li>
          <li>✅ Insights into real-world AI applications</li>
          <li>✅ Explored partnerships for AI-driven innovation</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-700 mb-2">Team Visited:</h2>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Chirag Hathiari - Founder & Chief Technology Officer</li>
          <li>Harish C. Lakhotia - Founder & Chief Growth Officer</li>
        </ul>

        <p className="text-gray-600 mb-4">
          We look forward to connecting with AI pioneers, exchanging insights, and collaborating to drive
          the future of AI & Generative AI solutions.
        </p>

        <p className="text-gray-600 mb-4">
          If you're attending AI4 Las Vegas, let's connect! Reach out to us to schedule a meeting.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mb-4">Event Highlights:</h2>
        <div className="relative w-full h-64 bg-gray-200 rounded-lg overflow-hidden mb-6">
          <img
            src={images[currentImage]}
            alt="Event Highlight"
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

        <h2 className="text-xl font-semibold text-gray-700 mb-2">Event Details:</h2>
        <p className="text-gray-600 mb-2">🗓 Date: August 12-14, 2024</p>
        <p className="text-gray-600">📍 Venue: MGM Grand, Las Vegas</p>
      </div>
      <Footer />
    </div>
  );
};

export default EventDetail1;
