/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Footer from '../../layout/Footer';
import Contact from '../../layout/Contact';
import Newsletter from '../../layout/NewsLetter';
import Navbar from '../../layout/NavBar';
import { Calendar, Clock, User, Play, Maximize2, PictureInPicture2 } from 'lucide-react';
import AIImage from '../../assets//webinar/AI.png';
import robotAi from '../../assets//webinar/robotAi.png';
import dataAi from '../../assets//webinar/dataAi.png';
import image from '../../assets//webinar/image.png';
 
const Webinars = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    jobTitle: '',
    acceptTerms: false
  });
 
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };
 
  const upcomingWebinarTopics = [
    { id: 1, title: 'Personalization at scale with AI', date: '25 March 2025', time: '2:00 PM EST' },
    { id: 2, title: 'Predicting customer retention', date: '28 March 2025', time: '11:00 AM EST' },
    { id: 3, title: 'Optimizing reward program', date: '2 April 2025', time: '3:00 PM EST' }
  ];
 
  const previousWebinars = [
    {
      id: 1,
      title: 'AI Implementation Strategies',
      presenter: 'Jenna Reyna',
      username: '@jreyna12',
      position: 'AI Strategy Director',
      views: '2.5K',
      duration: '45 min',
      thumbnail: image
    },
    {
      id: 2,
      title: 'Data-Driven Decision Making',
      presenter: 'Sullivan Yoder',
      username: '@sullivan_',
      position: 'Data Science Lead',
      views: '1.8K',
      duration: '60 min',
      thumbnail: dataAi
    },
    {
      id: 3,
      title: 'Future of AI in Business',
      presenter: 'Tony Person',
      username: '@tperson',
      position: 'Innovation Head',
      views: '3.2K',
      duration: '50 min',
      thumbnail: robotAi
    },
    {
      id: 4,
      title: 'Machine Learning Best Practices',
      presenter: 'Tony Person',
      username: '@tonyp',
      position: 'ML Engineer',
      views: '2.1K',
      duration: '55 min',
      thumbnail: AIImage
    }
  ];
 
  return (
   
 
  <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
    <Navbar />
 
    <main className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
         Webinars
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Join industry experts as they share insights on AI implementation, strategy, and innovation
        </p>
      </div>
 
      {/* Upcoming Webinar Section */}
      <section className="mb-20 flex flex-col lg:flex-row gap-10">
        <div className="lg:w-1/2">
          <div className="bg-white rounded-3xl shadow-lg p-8 backdrop-blur-sm bg-opacity-90">
            <p className="text-gray-800 font-semibold mb-4">Upcoming Sessions..</p>
            <h2 className="text-4xl font-bold mb-10 text-gray-800">
              Transform Your Business with AI
            </h2>
           
            <div className="space-y-6">
              {upcomingWebinarTopics.map(topic => (
                <div key={topic.id}
                     className="group bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-gray-800 transition-colors">
                    {topic.title}
                  </h3>
                  <div className="flex gap-6 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-700" />
                      <span className="text-sm">{topic.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-700" />
                      <span className="text-sm">{topic.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
 
        <div className="lg:w-1/2">
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Reserve Your Spot</h2>
              <p className="text-gray-600">Limited seats available for each session</p>
            </div>
 
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
                  placeholder="Enter your full name"
                  required
                />
              </div>
             
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Work Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
                  placeholder="name@company.com"
                  required
                />
              </div>
             
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
                    placeholder="Your company"
                    required
                  />
                </div>
               
                <div>
                  <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-2">
                    Job Title
                  </label>
                  <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
                    placeholder="Your role"
                    required
                  />
                </div>
              </div>
             
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-gray-800 to-gray-600 text-white py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity mt-6"
              >
                Register Now
              </button>
            </form>
          </div>
        </div>
      </section>
 
      {/* Previous Webinars Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Previous Webinars</h2>
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {previousWebinars.map(webinar => (
            <div key={webinar.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src={webinar.thumbnail}
                  alt={webinar.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white rounded-full p-4 transform hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-gray-800" />
                  </button>
                </div>
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  <button className="bg-black bg-opacity-75 p-2 rounded-lg text-white">
                    <Maximize2 className="w-4 h-4" />
                  </button>
                  <button className="bg-black bg-opacity-75 p-2 rounded-lg text-white">
                    <PictureInPicture2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-gray-800 transition-colors">
                  {webinar.title}
                </h3>
                <p className="text-gray-600 mb-1">{webinar.presenter}</p>
                <p className="text-gray-500 text-sm mb-3">{webinar.position}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{webinar.views} views</span>
                  <span>{webinar.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
 
    <div className="w-full h-1 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400"></div>
    <Contact />
    <Newsletter />
    <Footer />
  </div>
);
};
 
export default Webinars;