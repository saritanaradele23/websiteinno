/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { database, ref, push } from '../../firebase';

const AdminCareerForm = () => {
  // Career form state
  const [careerForm, setCareerForm] = useState({
    title: '',
    experienceLevel: 'Beginner Level',
    city: '',
    state: '',
    responsibility: '',
    jobSpecification: '',
    employmentType: 'Full-time',
    workplaceType: 'On-site',
    salary: '',
    datePosted: new Date().toISOString().split('T')[0],
  });
  
  // Loading and feedback states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitFeedback, setSubmitFeedback] = useState({ type: '', message: '' });
  
  // Experience levels for career section
  const experienceLevels = ['Beginner Level', 'Mid Level', 'Advanced'];
  
  // Employment types for career section
  const employmentTypes = ['Full-time', 'Part-time', 'Contract', 'Internship', 'Remote'];
  
  // Workplace types for career section
  const workplaceTypes = ['On-site', 'Remote', 'Hybrid'];
  
  // Handle career form changes
  const handleCareerChange = (e) => {
    const { name, value } = e.target;
    setCareerForm(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Submit career form
  const handleCareerSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitFeedback({ type: '', message: '' });
    
    try {
      // Reference to the careers collection in Realtime Database
      const careersRef = ref(database, 'careers');
      
      // Format the career data for Firebase storage
      const careerData = {
        title: careerForm.title,
        experienceLevel: careerForm.experienceLevel,
        location: {
          city: careerForm.city,
          state: careerForm.state
        },
        responsibility: careerForm.responsibility,
        jobSpecification: careerForm.jobSpecification,
        employmentType: careerForm.employmentType,
        workplaceType: careerForm.workplaceType,
        salary: careerForm.salary,
        datePosted: careerForm.datePosted,
        timestamp: Date.now(),
        active: true // Additional field to easily filter active/inactive jobs
      };
      
      // Push data to Firebase
      await push(careersRef, careerData);
      
      // Reset form and show success message
      setCareerForm({
        title: '',
        experienceLevel: 'Beginner Level',
        city: '',
        state: '',
        responsibility: '',
        jobSpecification: '',
        employmentType: 'Full-time',
        workplaceType: 'On-site',
        salary: '',
        datePosted: new Date().toISOString().split('T')[0],
      });
      
      setSubmitFeedback({
        type: 'success',
        message: 'Job posting created successfully!'
      });
    } catch (error) {
      console.error('Error creating job posting:', error);
      setSubmitFeedback({
        type: 'error',
        message: `Failed to create job posting: ${error.message}`
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Add New Job Posting</h2>
      
      {/* Feedback message */}
      {submitFeedback.message && (
        <div className={`p-4 mb-4 rounded ${
          submitFeedback.type === 'success' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {submitFeedback.message}
        </div>
      )}
      
      <form onSubmit={handleCareerSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Job Title
          </label>
          <input
            type="text"
            name="title"
            value={careerForm.title}
            onChange={handleCareerChange}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Experience Level
            </label>
            <select
              name="experienceLevel"
              value={careerForm.experienceLevel}
              onChange={handleCareerChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            >
              {experienceLevels.map(level => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City
            </label>
            <input
              type="text"
              name="city"
              value={careerForm.city}
              onChange={handleCareerChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              State
            </label>
            <input
              type="text"
              name="state"
              value={careerForm.state}
              onChange={handleCareerChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Responsibility
          </label>
          <textarea
            name="responsibility"
            value={careerForm.responsibility}
            onChange={handleCareerChange}
            required
            rows="4"
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Job Specification
          </label>
          <textarea
            name="jobSpecification"
            value={careerForm.jobSpecification}
            onChange={handleCareerChange}
            required
            rows="4"
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Employment Type
            </label>
            <select
              name="employmentType"
              value={careerForm.employmentType}
              onChange={handleCareerChange}
              className="w-full px-3 py-2 border rounded-md"
            >
              {employmentTypes.map(type => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Workplace Type
            </label>
            <select
              name="workplaceType"
              value={careerForm.workplaceType}
              onChange={handleCareerChange}
              className="w-full px-3 py-2 border rounded-md"
            >
              {workplaceTypes.map(type => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Salary
            </label>
            <input
              type="text"
              name="salary"
              value={careerForm.salary}
              onChange={handleCareerChange}
              required
              placeholder="e.g. $50,000 - $70,000"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date Posted
          </label>
          <input
            type="date"
            name="datePosted"
            value={careerForm.datePosted}
            onChange={handleCareerChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? 'Submitting...' : 'Add Job Posting'}
        </button>
      </form>
    </div>
  );
};

export default AdminCareerForm;