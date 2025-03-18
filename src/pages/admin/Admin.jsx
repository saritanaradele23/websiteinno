/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Navbar from '../../layout/NavBar';
import Footer from '../../layout/Footer';
import AdminBlogsForm from './AdminBlogsForm';
import AdminCareerForm from './AdminCareerForm';


const Admin = () => {
  // State for active section
  const [activeSection, setActiveSection] = useState('blogs');

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Admin Dashboard</h1>
        
        {/* Section Tabs */}
        <div className="flex border-b mb-6">
          <button
            onClick={() => setActiveSection('blogs')}
            className={`px-4 py-2 font-medium ${
              activeSection === 'blogs'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Blogs Management
          </button>
          <button
            onClick={() => setActiveSection('careers')}
            className={`px-4 py-2 font-medium ${
              activeSection === 'careers'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Careers Management
          </button>
        </div>
        
        {/* Render the appropriate form based on active section */}
        {activeSection === 'blogs' ? <AdminBlogsForm /> : <AdminCareerForm />}
      </div>
      <Footer />
    </>
  );
};

export default Admin;