/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from 'lucide-react';
 
const Footer = () => {
  const navigate = useNavigate();
 
  // Social media links
  const socialLinks = {
    linkedin: "https://www.linkedin.com/company/innosquares/posts/?feedView=all",
    twitter: "https://twitter.com/innosquares",
    youtube: "https://youtube.com/@innosquares"
  };
 
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-8 py-16">
        {/* Main Footer Grid - Reduced gap-x from 8 to 4 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-4 gap-y-8">
          {/* Column 1 - Reach Us */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-6">Reach us</h3>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+15550123"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <Phone size={20} />
                (+1) 555-0123
              </a>
              <a
                href="mailto:info@innosquares.com"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <Mail size={20} />
                info@innosquares.com
              </a>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <MapPin size={20} />
                Frisco TX United State
              </a>
            </div>
          </div>
 
          {/* Column 2 - Company */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <div className="flex flex-col gap-4">
              <button
                onClick={() => navigate('/AboutUs')}
                className="text-left text-gray-300 hover:text-white transition-colors"
              >
                About
              </button>
              <button
                onClick={() => navigate('/Carrers')}
                className="text-left text-gray-300 hover:text-white transition-colors"
              >
                Career
              </button>
              <button
                onClick={() => navigate('/Security')}
                className="text-left text-gray-300 hover:text-white transition-colors"
              >
                Security
              </button>
              <button
                onClick={() => navigate('/Events')}
                className="text-left text-gray-300 hover:text-white transition-colors"
              >
                Events
              </button>
            </div>
          </div>
 
          {/* Column 3 - Platform (Adjusted span from 4 to 3) */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-6">Platform</h3>
            <div className="flex flex-col gap-4">
              <button
                onClick={() => navigate('/AI_Knoweledge')}
                className="text-left text-gray-300 hover:text-white transition-colors"
              >
                AI Knowledge Solutions
              </button>
              <button
                onClick={() => navigate('/Next_Gen')}
                className="text-left text-gray-300 hover:text-white transition-colors"
              >
                Next-Gen Conversation
              </button>
              <button
                onClick={() => navigate('/AI_ML')}
                className="text-left text-gray-300 hover:text-white transition-colors"
              >
                AI/ML Engineering
              </button>
            </div>
          </div>
 
          {/* Column 4-5 - Resources & Social Media (Adjusted span from 4 to 5) */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Resources</h3>
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => navigate('/blog')}
                  className="text-left text-gray-300 hover:text-white transition-colors"
                >
                  Blog
                </button>
                <button
                  onClick={() => navigate('/videos')}
                  className="text-left text-gray-300 hover:text-white transition-colors"
                >
                  Videos
                </button>
                <button
                  onClick={() => navigate('/webinars')}
                  className="text-left text-gray-300 hover:text-white transition-colors"
                >
                  Webinars
                </button>
                <button
                  onClick={() => navigate('/case-studies')}
                  className="text-left text-gray-300 hover:text-white transition-colors"
                >
                  Case Studies
                </button>
                <button
                  onClick={() => navigate('/white-papers')}
                  className="text-left text-gray-300 hover:text-white transition-colors"
                >
                  White Papers
                </button>
              </div>
            </div>
 
            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Social Media</h3>
              <div className="flex gap-4">
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href={socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
 
        {/* Copyright Section */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © 2024 InnoSquares. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
 
export default Footer;