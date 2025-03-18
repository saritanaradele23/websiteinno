/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { database, ref, onValue } from '../../firebase';
import Navbar from '../../layout/NavBar';
import Contact from '../../layout/Contact';
import TestimonialSlider from '../../layout/TestimonialSlider';
import Newsletter from '../../layout/NewsLetter';
import Footer from '../../layout/Footer';
import { useNavigate } from 'react-router-dom';

const Careers = () => {
  // State for career listings and selected job
  const [careers, setCareers] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState({
    experienceLevel: 'All Experience Levels',
    location: 'All Locations',
    category: 'All Categories'
  });
  const [showJobDetails, setShowJobDetails] = useState(false);

  const navigate = useNavigate();

  // Fetch careers data from Firebase on component mount
  useEffect(() => {
    const careersRef = ref(database, 'careers');
    
    onValue(careersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Convert Firebase object to array and sort by timestamp (newest first)
        const careersArray = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        })).filter(job => job.active)
          .sort((a, b) => b.timestamp - a.timestamp);
        
        setCareers(careersArray);
        
        // Set the first job as selected by default if none is selected
        if (!selectedJob && careersArray.length > 0) {
          setSelectedJob(careersArray[0]);
        }
      }
      setLoading(false);
    });
  }, [selectedJob]);

  // Handle job card click
  const handleJobSelect = (job) => {
    setSelectedJob(job);
    // On mobile, show job details when a job is selected
    setShowJobDetails(true);
  };

  // Go back to job listings on mobile
  const handleBackToListings = () => {
    setShowJobDetails(false);
  };

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle search submission
  const handleSearch = () => {
    // The search is already applied through the filteredCareers logic
    // This function can be used if you want to add additional behavior on search button click
  };

  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Apply filters and search to careers
  const filteredCareers = careers.filter(job => {
    const experienceMatch = filter.experienceLevel === 'All Experience Levels' || 
                           job.experienceLevel === filter.experienceLevel;
    const locationMatch = filter.location === 'All Locations' || 
                         `${job.location.city}, ${job.location.state}` === filter.location;
    const categoryMatch = filter.category === 'All Categories';
    
    // Search functionality - check if the search term is present in title, responsibility, or jobSpecification
    const searchMatch = searchTerm === '' || 
                       job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       job.responsibility.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       job.jobSpecification.toLowerCase().includes(searchTerm.toLowerCase());
    
    return experienceMatch && locationMatch && categoryMatch && searchMatch;
  });

  // Get unique locations for filter dropdown
  const locationOptions = ['All Locations', ...new Set(careers.map(job => 
    `${job.location.city}, ${job.location.state}`
  ))];
  
  // Get unique experience levels for filter dropdown
  const experienceLevelOptions = ['All Experience Levels', ...new Set(careers.map(job => job.experienceLevel))];

  return (
    <>
    <Navbar/>
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gray-200 py-6 md:py-8 border-b border-gray-300">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800">Join the Revolution in AI Innovation.</h1>
          <div className="max-w-xl mx-auto mt-4 md:mt-6">
            <div className="bg-white rounded-md flex items-center p-2">
              <input
                type="text"
                placeholder="Search for jobs..."
                className="flex-grow px-3 py-2 text-gray-700 focus:outline-none"
                value={searchTerm}
                onChange={handleSearchChange}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
              <button 
                className="bg-gray-100 p-2 rounded"
                onClick={handleSearch}
                aria-label="Search"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
            
            {/* Filters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Experience Level</label>
                <select 
                  name="experienceLevel"
                  value={filter.experienceLevel}
                  onChange={handleFilterChange}
                  className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm"
                >
                  {experienceLevelOptions.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <select 
                  name="location"
                  value={filter.location}
                  onChange={handleFilterChange}
                  className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm"
                >
                  {locationOptions.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Categories</label>
                <select 
                  name="category"
                  value={filter.category}
                  onChange={handleFilterChange}
                  className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm"
                >
                  <option value="All Categories">All Categories</option>
                </select>
              </div>
              
              <div className="flex items-end">
                <button 
                  className="w-full bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition"
                  onClick={handleSearch}
                >
                  View Jobs
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Job Listings Section */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left side - Job Cards */}
          <div className={`w-full md:w-1/3 space-y-4 md:max-h-[calc(100vh-220px)] md:overflow-y-auto ${showJobDetails ? 'hidden md:block' : 'block'}`}>
            {loading ? (
              <div className="text-center py-4">Loading job listings...</div>
            ) : filteredCareers.length === 0 ? (
              <div className="text-center py-4">No job listings found.</div>
            ) : (
              filteredCareers.map(job => (
                <div 
                  key={job.id} 
                  className={`bg-white rounded-lg shadow-sm p-4 border-l-4 cursor-pointer transition duration-150 ${
                    selectedJob && selectedJob.id === job.id 
                      ? 'border-blue-600' 
                      : 'border-transparent hover:border-gray-300'
                  }`}
                  onClick={() => handleJobSelect(job)}
                >
                  <h3 className="font-bold text-lg text-gray-800 mb-2">{job.title}</h3>
                  
                  <div className="flex flex-wrap items-center mb-2 text-sm">
                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-xs mr-2 mb-1">
                      {job.experienceLevel}
                    </span>
                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-xs mr-2 mb-1">
                      {job.employmentType}
                    </span>
                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-xs mb-1">
                      {job.workplaceType}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {job.responsibility.slice(0, 120)}...
                  </p>
                  
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>Posted: {formatDate(job.datePosted)}</span>
                    <span>{job.location.city}, {job.location.state}</span>
                  </div>
                </div>
              ))
            )}
          </div>
          
          {/* Right side - Job Details */}
          <div className={`w-full md:w-2/3 bg-white rounded-lg shadow-sm p-4 md:p-6 ${showJobDetails ? 'block' : 'hidden md:block'}`}>
            {selectedJob ? (
              <>
                {/* Mobile back button */}
                <button 
                  onClick={handleBackToListings}
                  className="md:hidden flex items-center text-gray-600 mb-4"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Jobs
                </button>
              
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">{selectedJob.title}</h2>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 px-2 md:px-3 py-1 rounded-md text-sm font-medium text-gray-700">
                    {selectedJob.experienceLevel}
                  </span>
                  <span className="bg-gray-100 px-2 md:px-3 py-1 rounded-md text-sm font-medium text-gray-700">
                    {selectedJob.employmentType}
                  </span>
                  <span className="bg-gray-100 px-2 md:px-3 py-1 rounded-md text-sm font-medium text-gray-700">
                    {selectedJob.workplaceType}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 pb-6 border-b border-gray-200">
                  <div>
                    <h3 className="text-gray-500 font-medium mb-1">Primary Responsibility:</h3>
                    <p className="text-sm text-gray-700 whitespace-pre-line">{selectedJob.responsibility}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-gray-500 font-medium mb-1">Job Specifications:</h3>
                    <p className="text-sm text-gray-700 whitespace-pre-line">{selectedJob.jobSpecification}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Employment Type:</h3>
                    <p className="text-sm text-gray-700">{selectedJob.employmentType}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Workplace Type:</h3>
                    <p className="text-sm text-gray-700">{selectedJob.workplaceType}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Salary:</h3>
                    <p className="text-sm text-gray-700">{selectedJob.salary}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Experience Required:</h3>
                    <p className="text-sm text-gray-700">Minimum {selectedJob.experienceLevel === 'Beginner Level' ? '0-1' : selectedJob.experienceLevel === 'Mid Level' ? '2-5' : '5+'} Years</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Job Location:</h3>
                    <p className="text-sm text-gray-700">{selectedJob.location.city}, {selectedJob.location.state}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Posted On:</h3>
                    <p className="text-sm text-gray-700">{formatDate(selectedJob.datePosted)}</p>
                  </div>
                </div>
                
                <button 
                  onClick={() => navigate(`/apply/${selectedJob.id}`)}
                  className="w-full md:w-auto bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition duration-150"
                >
                  Apply Now
                </button>
              </>
            ) : (
              <div className="text-center py-10 text-gray-500">
                Select a job listing to view details
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

    <Contact/>

    <TestimonialSlider/>

    <Newsletter/>

    <Footer/>
    </>
  );
};

export default Careers;