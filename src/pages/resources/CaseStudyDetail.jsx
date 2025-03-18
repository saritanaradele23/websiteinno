/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import NavBar from "../../layout/NavBar";
import Footer from "../../layout/Footer";
import { ArrowLeft, Tag, Layers, CheckCircle } from "lucide-react";

// Import the case studies data
import { caseStudies } from "./caseStudiesData"; // You'll need to export the data from your main file or create a separate file

const CaseStudyDetail = () => {
  const { id } = useParams();
  const [study, setStudy] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the case study with the matching ID
    const foundStudy = caseStudies.find(study => study.id === parseInt(id));
    
    if (foundStudy) {
      setStudy(foundStudy);
    }
    
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!study) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Case Study Not Found</h2>
        <Link 
          to="/Case_Studies" 
          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Case Studies
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <NavBar />

      <div className="px-6 py-12 max-w-6xl mx-auto">
        {/* Back Navigation */}
        <Link 
          to="/Case_Studies" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Case Studies
        </Link>

        {/* Case Study Header */}
        <div className="mb-12">
          <span className="px-4 py-1.5 bg-gray-500 text-white rounded-full text-sm font-medium inline-block mb-4">
            {study.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {study.title}
          </h1>
          <p className="text-xl text-gray-600">
            {study.summary}
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative rounded-xl overflow-hidden shadow-lg mb-12 h-96">
          <img 
            src={study.image} 
            alt={study.title} 
            className="w-full h-full object-cover" 
          />
        </div>

        {/* Content Sections */}
        <div className="bg-white shadow-md rounded-xl p-8 mb-12">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Tag className="mr-3 h-6 w-6 text-blue-600" />
              Business Need
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {study.businessNeed}
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Layers className="mr-3 h-6 w-6 text-blue-600" />
              Solution
            </h2>
            <ul className="space-y-3">
              {study.solution.map((item, index) => (
                <li key={index} className="text-gray-700 leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Technology Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {study.technologyStack.split(', ').map((tech, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <CheckCircle className="mr-3 h-6 w-6 text-blue-600" />
              Outcome
            </h2>
            <ul className="space-y-3">
              {study.outcome.map((item, index) => (
                <li key={index} className="text-gray-700 leading-relaxed flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Related Case Studies Section (optional) */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Related Case Studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies
              .filter(relatedStudy => relatedStudy.id !== study.id)
              .slice(0, 3)
              .map(relatedStudy => (
                <Link 
                  to={`/case-study/${relatedStudy.id}`} 
                  key={relatedStudy.id}
                  className="group bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  <h3 className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {relatedStudy.title}
                  </h3>
                  <span className="text-sm text-gray-500">{relatedStudy.category}</span>
                </Link>
              ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CaseStudyDetail;