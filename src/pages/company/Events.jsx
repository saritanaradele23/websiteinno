/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Mail, MapPin, Twitter, Youtube, Linkedin } from 'lucide-react';
import NavBar from '../../layout/NavBar';
import Contact from '../../layout/Contact';
import NewsLetter from '../../layout/NewsLetter';
import Footer from '../../layout/Footer';
import TestimonialSlider from '../../layout/TestimonialSlider';
import dots from '../../assets/event/dots.png';
import manrobot from '../../assets/event/manrobot.png';
import robotic from '../../assets/event/robotic.png';
import brain from '../../assets/whitepaper/brain.png';
import diff from '../../assets/whitepaper/diff.png';
import solution from '../../assets/event/solution.png';

const allEvents = [
  { id: 1, date: "Apr 14", title: "InnoSquares at AI4 Las Vegas 2024", content: "Shaping the Future of AI!", image: dots, path: "/event1" },
  { id: 2, date: "Aug 20", title: "Event 2", content: "Directly seated and inside for you to enjoy the show.", image: manrobot, path: "/event2" },
  { id: 3, date: "Sep 18", title: "Event 3", content: "Directly seated and inside for you to enjoy the show.", image: diff, path: "/event3" },
  { id: 4, date: "Apr 14", title: "Event 4", content: "We'll get you directly seated and inside for you to enjoy the show.", image: robotic, path: "/event4" },
  { id: 5, date: "Aug 20", title: "Event 5", content: "Directly seated and inside for you to enjoy the show.", image: brain, path: "/event5" },
  { id: 6, date: "Sep 18", title: "Event 6", content: "Directly seated and inside for you to enjoy the show.", image: solution, path: "/event6" },
];

const Events = () => {
  const navigate = useNavigate();
  const [visibleEvents, setVisibleEvents] = useState(3);
  const [loading, setLoading] = useState(false);

  const handleEventClick = (path) => {
    if (path) navigate(path);
  };

  const loadMoreEvents = () => {
    setLoading(true);
    // Simulate loading delay
    setTimeout(() => {
      setVisibleEvents(prev => Math.min(prev + 3, allEvents.length));
      setLoading(false);
    }, 500);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar />
      
      {/* Hero section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-10 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">AI Events & Conferences</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Join us at the frontiers of artificial intelligence innovation and networking opportunities.
            </p>
          </div>
        </div>
      </div>

      {/* Events grid */}
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Upcoming Events</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 mt-2 mb-2"></div>
          </div>
          
          <div className="mt-4 md:mt-0">
            <select className="bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <option>All Categories</option>
              <option>Conferences</option>
              <option>Workshops</option>
              <option>Webinars</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {allEvents.slice(0, visibleEvents).map((event) => (
            <div
              key={event.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transform transition duration-300 cursor-pointer h-full flex flex-col"
              onClick={() => handleEventClick(event.path)}
            >
              <div className="relative">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-48 object-cover" 
                />
                <div className="absolute top-0 left-0 bg-blue-600 text-white py-1 px-3 m-2 rounded">
                  {event.date}
                </div>
              </div>
              <div className="p-4 flex-grow flex flex-col">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{event.title}</h3>
                <p className="text-gray-600 flex-grow">{event.content}</p>
                <div className="mt-4 pt-2 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-sm text-gray-500 flex items-center">
                    <MapPin size={16} className="mr-1" />
                    Virtual & In-Person
                  </span>
                  <span className="text-blue-600 font-medium text-sm">Learn More</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleEvents < allEvents.length && (
          <div className="text-center mt-8">
            <button 
              className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition duration-300 flex items-center justify-center mx-auto disabled:opacity-50"
              onClick={loadMoreEvents}
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Loading...
                </>
              ) : (
                'Load More'
              )}
            </button>
          </div>
        )}
      </div>

      {/* Call to action */}
      <div className="bg-gray-800 text-white py-10 my-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-xl md:text-2xl font-bold mb-4">Want to host or sponsor an event?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Partner with us to reach the AI community and showcase your innovations to industry leaders and decision-makers.
          </p>
          <button className="px-6 py-2 bg-gray-600 text-white rounded hover:bg-blue-700 transition duration-300">
            Contact Us
          </button>
        </div>
      </div>

      <TestimonialSlider />
      <Contact />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Events;