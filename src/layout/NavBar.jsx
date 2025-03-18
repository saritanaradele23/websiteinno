/* eslint-disable no-unused-vars */
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
 
const Navbar = () => {
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDrop, setMobileDrop] = useState({
    resources: false,
    company: false
  });

  const navRef = useRef(null);
  
  // Close mobile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu when screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
 
  const navItems = {
    resources: [
      { name: "Blog", path: "/Blogs" },
      { name: "Video", path: "/Videos" },
      { name: "Case Studies", path: "/Case_Studies" },
      { name: "White Paper", path: "/White_papers" },
    ],
    company: [
      { name: "News", path: "/News" },
      { name: "Events", path: "/Events" },
      { name: "Security", path: "/Security" },
      { name: "About Us", path: "/AboutUs" },
      { name: "Career", path: "/Careers" },
      { name: "Contact", path: "/Contact" },
    ],
  };
 
  const handleNavigation = (path) => {
    window.location.href = path;
    setMobileMenuOpen(false);
  };

  const toggleMobileDropdown = (key) => {
    setMobileDrop(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
 
  return (
    <>
      {/* Sticky Navbar */}
      <nav ref={navRef} className="bg-white fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div
            className="text-2xl font-bold cursor-pointer"
            onClick={() => handleNavigation('/')}
          >
            <img
              src="src/assets/innosqures.png"
              className="w-100 h-auto"
              alt="Logo"
            />
          </div>
 
          {/* Hamburger Menu for Mobile */}
          <div className="lg:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
 
          {/* Desktop Navigation Items - Using your original layout */}
          <div className="hidden lg:flex gap-8 w-full justify-center items-center">
            {/* New Clickable Headings */}
            <div className="flex flex-row space-x-6">
              <a
                onClick={() => handleNavigation('/AI_GenWorks')}
                className="font-medium cursor-pointer hover:text-blue-500"
              >
                AI GenWorks
              </a>
              <a
                onClick={() => handleNavigation('/Data_DeepInsights')}
                className="font-medium cursor-pointer hover:text-blue-500"
              >
                Data DeepInsights
              </a>
              <a
                onClick={() => handleNavigation('/AI_CyberShield')}
                className="font-medium cursor-pointer hover:text-blue-500"
              >
                AI CyberShield
              </a>
            </div>
            
            {/* Resources Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <button className="font-medium flex items-center gap-1">
                Resources <ChevronDown className="w-4 h-4" />
              </button>
 
              {resourcesOpen && (
                <div className="text-white absolute top-full left-1/2 transform -translate-x-1/2 bg-black shadow-lg rounded-md py-4 px-6 grid grid-cols-2 gap-6 min-w-[300px]">
                  {/* Left Column */}
                  <div className="flex flex-col gap-2">
                    <a
                      onClick={() => handleNavigation("/Blogs")}
                      className="hover:text-blue-500 cursor-pointer"
                    >
                      Blog
                    </a>
                    <a
                      onClick={() => handleNavigation("/Videos")}
                      className="hover:text-blue-500 cursor-pointer"
                    >
                      Video
                    </a>
                  </div>
 
                  {/* Right Column */}
                  <div className="flex flex-col gap-2">
                    <a
                      onClick={() => handleNavigation("/Case_Studies")}
                      className="hover:text-blue-500 cursor-pointer"
                    >
                      Case Studies
                    </a>
                    <a
                      onClick={() => handleNavigation("/White_papers")}
                      className="hover:text-blue-500 cursor-pointer"
                    >
                      White Paper
                    </a>
                  </div>
                </div>
              )}
            </div>
 
            {/* Company Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setCompanyOpen(true)}
              onMouseLeave={() => setCompanyOpen(false)}
            >
              <button className="font-medium flex items-center gap-1">
                Company <ChevronDown className="w-4 h-4" />
              </button>
 
              {companyOpen && (
                <div className="text-white absolute top-full left-1/2 transform -translate-x-1/2 bg-black shadow-lg rounded-md py-4 px-6 grid grid-cols-2 gap-12 min-w-[300px]">
                  {/* Left Column */}
                  <div className="flex flex-col gap-3 pr-4">
                    {navItems.company.slice(0, 3).map((item) => (
                      <a
                        key={item.path}
                        onClick={() => handleNavigation(item.path)}
                        className="hover:text-blue-500 cursor-pointer whitespace-nowrap"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  {/* Right Column */}
                  <div className="flex flex-col gap-2 pl-4">
                    {navItems.company.slice(3).map((item) => (
                      <a
                        key={item.path}
                        onClick={() => handleNavigation(item.path)}
                        className="hover:text-blue-500 cursor-pointer whitespace-nowrap"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-md z-40 overflow-y-auto">
            <div className="flex flex-col p-4">
              {/* Primary Links */}
              <div className="flex flex-col space-y-3 border-b border-gray-200 pb-3">
                <a
                  onClick={() => handleNavigation('/AI_GenWorks')}
                  className="font-medium cursor-pointer hover:text-blue-500"
                >
                  AI GenWorks
                </a>
                <a
                  onClick={() => handleNavigation('/Data_DeepInsights')}
                  className="font-medium cursor-pointer hover:text-blue-500"
                >
                  Data DeepInsights
                </a>
                <a
                  onClick={() => handleNavigation('/AI_CyberShield')}
                  className="font-medium cursor-pointer hover:text-blue-500"
                >
                  AI CyberShield
                </a>
              </div>

              {/* Resources Mobile Dropdown */}
              <div className="py-3 border-b border-gray-200">
                <button 
                  onClick={() => toggleMobileDropdown('resources')}
                  className="w-full flex items-center justify-between py-1 font-medium"
                >
                  Resources
                  {mobileDrop.resources ? (
                    <ChevronDown className="w-5 h-5" />
                  ) : (
                    <ChevronRight className="w-5 h-5" />
                  )}
                </button>
                
                {mobileDrop.resources && (
                  <div className="grid grid-cols-2 gap-3 mt-2 pl-2">
                    <div className="flex flex-col space-y-2">
                      {navItems.resources.slice(0, 2).map((item) => (
                        <a
                          key={item.path}
                          onClick={() => handleNavigation(item.path)}
                          className="hover:text-blue-500 cursor-pointer"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <div className="flex flex-col space-y-2">
                      {navItems.resources.slice(2).map((item) => (
                        <a
                          key={item.path}
                          onClick={() => handleNavigation(item.path)}
                          className="hover:text-blue-500 cursor-pointer"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Company Mobile Dropdown */}
              <div className="py-3">
                <button 
                  onClick={() => toggleMobileDropdown('company')}
                  className="w-full flex items-center justify-between py-1 font-medium"
                >
                  Company
                  {mobileDrop.company ? (
                    <ChevronDown className="w-5 h-5" />
                  ) : (
                    <ChevronRight className="w-5 h-5" />
                  )}
                </button>
                
                {mobileDrop.company && (
                  <div className="grid grid-cols-2 gap-3 mt-2 pl-2">
                    <div className="flex flex-col space-y-2">
                      {navItems.company.slice(0, 3).map((item) => (
                        <a
                          key={item.path}
                          onClick={() => handleNavigation(item.path)}
                          className="hover:text-blue-500 cursor-pointer"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <div className="flex flex-col space-y-2">
                      {navItems.company.slice(3).map((item) => (
                        <a
                          key={item.path}
                          onClick={() => handleNavigation(item.path)}
                          className="hover:text-blue-500 cursor-pointer"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
 
      {/* Push Content Down to Avoid Overlapping */}
      <div className="h-20"></div>
    </>
  );
};
 
export default Navbar;