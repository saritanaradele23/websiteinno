/* eslint-disable no-unused-vars */
import { ChevronDown, Menu, X } from 'lucide-react';
import React, { useState } from 'react';

const Navbar = () => {
  const [platformOpen, setPlatformOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = {
    platform: [
      { name: "AI Knowledge Solutions", path: "/AI_Knowledge" },
      { name: "Next-Gen Conversation & Rag Solutions", path: "/Next_Gen" },
      { name: "AI/ML Engineering & Deployment", path: "/AI_ML" },
    ],
    resources: [
      { name: "Blog", path: "/Blogs" },
      { name: "Video", path: "/Videos" },
      { name: "Webinar", path: "/Webinars" },
      { name: "Case Studies", path: "/Case_Studies" },
      { name: "White Paper", path: "/White_papers" },
    ],
    company: [
      { name: "News", path: "/News" },
      { name: "Events", path: "/Events" },
      { name: "Security", path: "/Security" },
      { name: "About Us", path: "/AboutUs" },
      { name: "Career", path: "/Careers" },
    ],
  };

  const handleNavigation = (path) => {
    window.location.href = path;
  };

  return (
    <nav className="bg-[#D9D9D9] shadow-sm relative border-t-10 border-gray-300">
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
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Navigation Items */}
        <div
          className={`lg:flex gap-8 w-full justify-center items-center ${
            mobileMenuOpen ? 'block' : 'hidden'
          } lg:block`}
        >
         {/* Platform Dropdown */}
         <div
            className="relative group"
            onMouseEnter={() => setPlatformOpen(true)}
            onMouseLeave={() => setPlatformOpen(false)}
          >
            <button
              className="font-medium flex items-center gap-1"
            >
              PLATFORM <ChevronDown className="w-4 h-4" />
            </button>

            {platformOpen && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-md py-2 w-72 text-center group-hover:block">
                {navItems.platform.map((item) => (
                  <a
                    key={item.path}
                    onClick={() => handleNavigation(item.path)}
                    className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>


        

          {/* Resources Dropdown */}
          <div
  className="relative group"
  onMouseEnter={() => setResourcesOpen(true)}
  onMouseLeave={() => setResourcesOpen(false)}
>
  <button className="font-medium flex items-center gap-1">
    RESOURCES <ChevronDown className="w-4 h-4" />
  </button>

  {resourcesOpen && (
    <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-md py-4 px-6 grid grid-cols-2 gap-6 min-w-[300px]">
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
        <a
          onClick={() => handleNavigation("/Webinars")}
          className="hover:text-blue-500 cursor-pointer"
        >
          Webinar
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
              COMPANY <ChevronDown className="w-4 h-4" />
            </button>

            {companyOpen && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-md py-4 px-6 grid grid-cols-2 gap-12 min-w-[300px]">
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
    </nav>
  );
};

export default Navbar;
