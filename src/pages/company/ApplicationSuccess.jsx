/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../layout/NavBar';
import Footer from '../../layout/Footer';

const ApplicationSuccess = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-4 py-5 sm:px-6">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Application Submitted Successfully!</h2>
              <p className="mt-2 text-sm text-gray-600">
                Thank you for applying to join our team. We appreciate your interest and will review your application carefully.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-3">What happens next?</h3>
            <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-600">
              <li>Our hiring team will review your application (typically within 5-7 business days)</li>
              <li>If your qualifications match our needs, we will contact you to schedule an initial interview</li>
              <li>You will receive updates about your application status via email</li>
            </ol>
            <div className="mt-4 text-sm text-gray-600">
              <p>
                If you have any questions about your application or our hiring process, please contact our recruitment team at{' '}
                <a href="mailto:careers@company.com" className="text-blue-600 hover:text-blue-800">
                  careers@company.com
                </a>
              </p>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-4 sm:px-6 flex flex-col sm:flex-row gap-3 sm:justify-between">
            <Link
              to="/careers"
              className="w-full sm:w-auto inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Browse More Opportunities
            </Link>
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ApplicationSuccess;