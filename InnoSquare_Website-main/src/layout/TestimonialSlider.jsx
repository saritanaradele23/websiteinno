/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
 
const testimonials = [
  {
    text: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    author: "Dinesh singh",
    location: "Mumbai, India",
    image: "/api/placeholder/48/48"
  },
  {
    text: "Their innovative AI solutions have transformed how we approach data analysis. The results exceeded our expectations.",
    author: "Sarah Chen",
    location: "Singapore",
    image: "/api/placeholder/48/48"
  },
  {
    text: "Outstanding support and cutting-edge technology that delivered real business value.",
    author: "Michael Roberts",
    location: "London, UK",
    image: "/api/placeholder/48/48"
  }
];
 
const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
 
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
 
  return (
    <div className="w-full bg-white min-h-screen relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header Section */}
        <div className="mb-20">
          <p className="text-gray-500 text-sm uppercase tracking-wider mb-4">TESTIMONIALS</p>
          <h2 className="text-5xl font-bold text-black mb-2">What People Say</h2>
          <h3 className="text-5xl font-bold text-black">About Us.</h3>
        </div>
 
        {/* Testimonials Container */}
        <div className="relative h-56">
          {/* Enhanced Background Shape */}
          <div className="absolute right-150 top-[-50%] -translate-y-1/2 z-0">
            {/* Base layer with gradient */}
            <div className="absolute w-[600px] h-[500px] bg-gradient-to-br from-gray-600 to-gray-600 rounded-[40%_60%_55%_45%/55%_45%_45%_55%] opacity-20 translate-y-6 translate-x-6 blur-xl"></div>
           
            {/* Middle layer with different gradient */}
            <div className="absolute w-[600px] h-[400px] bg-gradient-to-tr from-gray-600 to-gray-500 rounded-[40%_60%_55%_45%/55%_45%_45%_55%] opacity-30 translate-y-4 translate-x-4 blur-sm"></div>
          </div>
 
          {/* Cards */}
          <div className="relative">
            {testimonials.map((testimonial, idx) => {
              const isActive = idx === activeIndex;
              const prevIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;
              const isPrev = idx === prevIndex;
 
              return (
                <div
                  key={idx}
                  className={`absolute right-0 w-full max-w-xl transform transition-all duration-700 ease-in-out
                    ${isActive ? 'translate-y-0 opacity-100 z-30' : ''}
                    ${isPrev ? 'translate-y-2 opacity-60 z-20' : ''}
                    ${!isActive && !isPrev ? 'translate-y-4 opacity-30 z-10' : ''}
                  `}
                >
                  <div className="bg-white rounded-lg p-6 shadow-xl">
                    <div className="flex items-start gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <p className="text-gray-600 text-lg mb-2">{testimonial.text}</p>
                        <p className="font-semibold text-gray-800 mb-1">{testimonial.author}</p>
                        <p className="text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
 
        {/* Navigation Dots */}
        <div className="flex gap-3 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`transition-all duration-300 rounded-full
                ${idx === activeIndex
                  ? 'w-8 h-2 bg-indigo-600'
                  : 'w-2 h-2 bg-gray-400'
                }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
 
export default TestimonialSlider;