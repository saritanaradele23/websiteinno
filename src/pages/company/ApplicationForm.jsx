/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { database, ref, push, get, child } from '../../firebase';
import Footer from '../../layout/Footer';
import Navbar from '../../layout/NavBar';

// Add Web3Forms access key
const WEB3FORMS_ACCESS_KEY = "c929ec26-e551-49f7-a0b5-0b73bddd252d"; // Replace with your actual Web3Forms access key

const ApplicationForm = () => { 
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [jobDetails, setJobDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    resume: '',
    coverLetter: '',
    linkedInProfile: '',
    portfolioWebsite: '',
    currentEmployer: '',
    currentPosition: '',
    yearsOfExperience: '',
    highestEducation: 'High School',
    referralSource: 'Job Board',
    additionalInfo: '',
    termsAccepted: false
  });
  const [errors, setErrors] = useState({});

  // Fetch job details based on jobId parameter
  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const jobRef = ref(database, `careers/${jobId}`);
        const snapshot = await get(jobRef);
        
        if (snapshot.exists()) {
          setJobDetails(snapshot.val());
        } else {
          console.error('No job found with this ID');
          navigate('/careers');
        }
      } catch (error) {
        console.error('Error fetching job details:', error);
      } finally {
        setLoading(false);
      }
    };

    if (jobId) {
      fetchJobDetails();
    }
  }, [jobId, navigate]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Required fields validation
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'yearsOfExperience'];
    requiredFields.forEach(field => {
      if (!formData[field]) {
        newErrors[field] = 'This field is required';
      }
    });
    
    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Phone validation
    if (formData.phone && !/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    // Terms acceptance
    if (!formData.termsAccepted) {
      newErrors.termsAccepted = 'You must accept the terms to proceed';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      window.scrollTo(0, 0);
      return;
    }
    
    try {
      const applicationData = {
        ...formData,
        jobId: jobId,
        jobTitle: jobDetails?.title || 'Unknown Position',
        applicationDate: new Date().toISOString(),
        status: 'New',
      };
      
      // Push application to Firebase
      const applicationsRef = ref(database, 'applications');
      await push(applicationsRef, applicationData);
      
      // Send data to Web3Forms
      const formPayload = new FormData();
      formPayload.append("access_key", WEB3FORMS_ACCESS_KEY);
      formPayload.append("subject", `New Application: ${jobDetails?.title || 'Unknown Position'}`);
      
      // Add all form fields to the payload
      Object.keys(applicationData).forEach((key) => {
        // Format the data to be more readable in the email
        if (key === 'applicationDate') {
          formPayload.append(key, new Date(applicationData[key]).toLocaleString());
        } else {
          formPayload.append(key, applicationData[key]);
        }
      });
      
      // Send to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload,
      });
      
      const data = await response.json();
      
      if (data.success) {
        // Show success message and reset form
        setFormSubmitted(true);
        window.scrollTo(0, 0);
        
        // Redirect to thank you page after 3 seconds
        setTimeout(() => {
          navigate('/application-success');
        }, 3000);
      } else {
        throw new Error(data.message || "Error sending email");
      }
      
    } catch (error) {
      console.error('Error submitting application:', error);
      setErrors({
        form: 'There was an error submitting your application. Please try again later.'
      });
    }
  };

  if (loading) {
    return (
      <>
        {/* <Navbar/> */}
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
            <p className="text-lg text-gray-700">Loading application form...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen py-4 sm:py-8">
        <div className="max-w-4xl mx-auto px-4">
          {formSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 sm:p-6 mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-green-800 mb-2">Application Submitted Successfully!</h2>
              <p className="text-green-700">
                Thank you for applying for the {jobDetails?.title} position. We have received your application and will review it shortly.
                You will be redirected in a few seconds...
              </p>
            </div>
          ) : (
            <>
              <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-6">
                <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                  Application for {jobDetails?.title}
                </h1>
                <p className="text-sm sm:text-base text-gray-600 mb-4 break-words">
                  Location: {jobDetails?.location?.city}, {jobDetails?.location?.state} | 
                  Type: {jobDetails?.employmentType} | 
                  Experience: {jobDetails?.experienceLevel}
                </p>
                
                {errors.form && (
                  <div className="mb-6 p-3 sm:p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
                    {errors.form}
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Personal Information</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className={`w-full border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500`}
                        />
                        {errors.firstName && <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.firstName}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className={`w-full border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500`}
                        />
                        {errors.lastName && <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.lastName}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500`}
                        />
                        {errors.email && <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.email}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(555) 555-5555"
                          className={`w-full border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500`}
                        />
                        {errors.phone && <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.phone}</p>}
                      </div>
                    </div>
                  </div>
                  
                  {/* Address Information */}
                  <div>
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Address Information</h2>
                    <div className="grid grid-cols-1 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Street Address
                        </label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                        <div className="col-span-2 sm:col-span-1">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            City
                          </label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            State
                          </label>
                          <input
                            type="text"
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            ZIP Code
                          </label>
                          <input
                            type="text"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Professional Information */}
                  <div>
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Professional Information</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Current Employer
                        </label>
                        <input
                          type="text"
                          name="currentEmployer"
                          value={formData.currentEmployer}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Current Position
                        </label>
                        <input
                          type="text"
                          name="currentPosition"
                          value={formData.currentPosition}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Years of Experience <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="number"
                          name="yearsOfExperience"
                          value={formData.yearsOfExperience}
                          onChange={handleInputChange}
                          min="0"
                          step="1"
                          className={`w-full border ${errors.yearsOfExperience ? 'border-red-500' : 'border-gray-300'} rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500`}
                        />
                        {errors.yearsOfExperience && <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.yearsOfExperience}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Highest Education
                        </label>
                        <select
                          name="highestEducation"
                          value={formData.highestEducation}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        >
                          <option value="High School">High School</option>
                          <option value="Associate's Degree">Associates Degree</option>
                          <option value="Bachelor's Degree">Bachelors Degree</option>
                          <option value="Master's Degree">Masters Degree</option>
                          <option value="PhD">PhD</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  {/* Application Details */}
                  <div>
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Application Details</h2>
                    <div className="grid grid-cols-1 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Resume Link
                        </label>
                        <input
                          type="url"
                          name="resume"
                          value={formData.resume}
                          onChange={handleInputChange}
                          placeholder="https://drive.google.com/your-resume"
                          className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                        <p className="mt-1 text-xs text-gray-500">Please provide a link to your resume (Google Drive, Dropbox, etc.)</p>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Cover Letter
                        </label>
                        <textarea
                          name="coverLetter"
                          value={formData.coverLetter}
                          onChange={handleInputChange}
                          rows="4"
                          className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                          placeholder="Tell us why you're a good fit for this position..."
                        ></textarea>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            LinkedIn Profile
                          </label>
                          <input
                            type="url"
                            name="linkedInProfile"
                            value={formData.linkedInProfile}
                            onChange={handleInputChange}
                            placeholder="https://linkedin.com/in/yourprofile"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Portfolio Website
                          </label>
                          <input
                            type="url"
                            name="portfolioWebsite"
                            value={formData.portfolioWebsite}
                            onChange={handleInputChange}
                            placeholder="https://yourportfolio.com"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          How did you hear about us?
                        </label>
                        <select
                          name="referralSource"
                          value={formData.referralSource}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        >
                          <option value="Job Board">Job Board</option>
                          <option value="Company Website">Company Website</option>
                          <option value="LinkedIn">LinkedIn</option>
                          <option value="Referral">Employee Referral</option>
                          <option value="Social Media">Social Media</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Additional Information
                        </label>
                        <textarea
                          name="additionalInfo"
                          value={formData.additionalInfo}
                          onChange={handleInputChange}
                          rows="3"
                          className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                          placeholder="Any additional information you'd like to share..."
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  
                  {/* Terms and Submit */}
                  <div className="pt-4 border-t border-gray-200">
                    <div className="mb-4">
                      <label className="flex items-start">
                        <input
                          type="checkbox"
                          name="termsAccepted"
                          checked={formData.termsAccepted}
                          onChange={handleInputChange}
                          className={`mr-2 mt-1 h-4 w-4 ${errors.termsAccepted ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        <span className="text-xs sm:text-sm text-gray-700">
                          I certify that all information provided is true and complete to the best of my knowledge. 
                          I understand that any false information or omission may disqualify me from further consideration 
                          and may result in dismissal if discovered at a later date.
                        </span>
                      </label>
                      {errors.termsAccepted && <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.termsAccepted}</p>}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium hover:bg-blue-700 transition duration-150 w-full sm:w-auto"
                      >
                        Submit Application
                      </button>
                      
                      <button
                        type="button"
                        onClick={() => navigate('/careers')}
                        className="bg-gray-200 text-gray-800 px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium hover:bg-gray-300 transition duration-150 w-full sm:w-auto"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ApplicationForm;