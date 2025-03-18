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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Column 1 - Reach Us */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold mb-4 sm:mb-6">Reach us</h3>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+19722928058"
                className="flex items-start gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Phone size={20} className="flex-shrink-0 mt-1" />
                <span className="text-sm sm:text-base">+1 (972) 292-8058</span>
              </a>
              <a
                href="mailto:info@innosquares.com"
                className="flex items-start gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Mail size={20} className="flex-shrink-0 mt-1" />
                <span className="text-sm sm:text-base">info@innosquares.com</span>
              </a>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span className="text-sm sm:text-base break-words">669 DRY CANYON DR, FRISCO, Texas, 75036, United States</span>
              </a>
            </div>
          </div>
 
          {/* Column 2 - Company */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4 sm:mb-6">Company</h3>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => navigate('/AboutUs')}
                className="text-left text-sm sm:text-base text-gray-300 hover:text-white transition-colors"
              >
                About
              </button>
              <button
                onClick={() => navigate('/Careers')}
                className="text-left text-sm sm:text-base text-gray-300 hover:text-white transition-colors"
              >
                Career
              </button>
              <button
                onClick={() => navigate('/Security')}
                className="text-left text-sm sm:text-base text-gray-300 hover:text-white transition-colors"
              >
                Security
              </button>
              <button
                onClick={() => navigate('/Events')}
                className="text-left text-sm sm:text-base text-gray-300 hover:text-white transition-colors"
              >
                Events
              </button>
            </div>
          </div>
 
          {/* Column 3 - AI Enablement */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold mb-4 sm:mb-6">AI Enablement</h3>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => navigate('/AI_GenWorks')}
                className="text-left text-sm sm:text-base text-gray-300 hover:text-white transition-colors"
              >
               AI GenWorks
              </button>
              <button
                onClick={() => navigate('/Data_DeepInsights')}
                className="text-left text-sm sm:text-base text-gray-300 hover:text-white transition-colors"
              >
                Data DeepInsights
              </button>
              <button
                onClick={() => navigate('/AI_CyberShield')}
                className="text-left text-sm sm:text-base text-gray-300 hover:text-white transition-colors"
              >
               AI CyberShield
              </button>
            </div>
          </div>
 
          {/* Column 4-5 - Resources & Social Media */}
          <div className="sm:col-span-2 lg:col-span-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-4">
              {/* Resources */}
              <div>
                <h3 className="text-lg font-semibold mb-4 sm:mb-6">Resources</h3>
                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => navigate('/blog')}
                    className="text-left text-sm sm:text-base text-gray-300 hover:text-white transition-colors"
                  >
                    Blog
                  </button>
                  <button
                    onClick={() => navigate('/videos')}
                    className="text-left text-sm sm:text-base text-gray-300 hover:text-white transition-colors"
                  >
                    Videos
                  </button>
                  
                  <button
                    onClick={() => navigate('/case_studies')}
                    className="text-left text-sm sm:text-base text-gray-300 hover:text-white transition-colors"
                  >
                    Case Studies
                  </button>
                  <button
                    onClick={() => navigate('/white_papers')}
                    className="text-left text-sm sm:text-base text-gray-300 hover:text-white transition-colors"
                  >
                    White Papers
                  </button>
                </div>
              </div>
 
              {/* Social Media */}
              <div>
                <h3 className="text-lg font-semibold mb-4 sm:mb-6">Social Media</h3>
                <div className="flex gap-4">
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href={socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a
                    href={socialLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
 
        {/* Copyright Section */}
        <div className="mt-8 sm:mt-12 lg:mt-16 pt-4 sm:pt-6 lg:pt-8 border-t border-gray-800">
          <p className="text-center text-sm sm:text-base text-gray-400">
            © 2025 InnoSquares. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
 
export default Footer;