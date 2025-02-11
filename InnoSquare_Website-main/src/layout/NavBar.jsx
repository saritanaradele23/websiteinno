/* eslint-disable no-unused-vars */
import { ChevronDown, Menu, X } from 'lucide-react';
import React, { useState } from 'react';

const Navbar = () => {
  const [platformOpen, setPlatformOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navigation items with their respective paths
  const navItems = {
    platform: [
      { name: "AI Knowledge Solutions", path: "/AI_Knowledge" },
      { name: "Next-Gen Conversation & Rag Solutions", path: "/Next_Gen" },
      { name: "AI/ML Engineering & Deployment", path: "/AI_ML" }
    ],
    resources: [
      { name: "Blog", path: "/Blogs" },
      { name: "Video", path: "/Videos" },
      { name: "Webinar", path: "/Webinars" },
      { name: "Case Studies", path: "/Case_Studies" },
      { name: "White Paper", path: "/White_papers" }
    ],
    company: [
      { name: "About Us", path: "/AboutUs" },
      { name: "News", path: "/News" },
      { name: "Events", path: "/Events" },
      { name: "Career", path: "/Careers" },
      { name: "Security", path: "/Security" }
    ]
  };

  const handleNavigation = (path) => {
    window.location.href = path;
  };

  return (
    <nav className="bg-[#D9D9D9] shadow-sm relative border-t-4 border-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div
          className="text-2xl font-bold cursor-pointer"
          onClick={() => handleNavigation('/')}
        >
          <img
            src="src/assets/innosqures.png"
            className="w-60 h-auto"
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
            <button
              className="font-medium flex items-center gap-1"
            >
              RESOURCES <ChevronDown className="w-4 h-4" />
            </button>

            {resourcesOpen && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-md py-2 w-48 text-center group-hover:block">
                {navItems.resources.map((item) => (
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

          {/* Company Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setCompanyOpen(true)}
            onMouseLeave={() => setCompanyOpen(false)}
          >
            <button
              className="font-medium flex items-center gap-1"
            >
              COMPANY <ChevronDown className="w-4 h-4" />
            </button>

            {companyOpen && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-md py-2 w-48 text-center group-hover:block">
                {navItems.company.map((item) => (
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

          {/* Pre-Built Link */}
          <a href="/pre-built" className="font-medium">
            PRE-BUILT
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
