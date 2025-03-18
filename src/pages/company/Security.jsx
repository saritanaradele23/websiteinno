/* eslint-disable no-unused-vars     NewS Page*/
import React from 'react';
import Contact from '../../layout/Contact';
import Footer from '../../layout/Footer';
import NavBar from '../../layout/NavBar';
import Newsletter from '../../layout/NewsLetter';
const Security = () => {
  return (
    <div>
<NavBar />
<div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-16">
 
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">
            Your Security, Our Priority
          </h1>
          <div className="h-1 w-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500" />
          <br />
 
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            At InnoSquares, we understand that security is paramount when it comes to AI and data-driven solutions. That's why we integrate robust security practices into every stage of our processes, ensuring the protection of your sensitive data and intellectual property.
          </p>
        </div>
        <div className="h-1 w-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500" />
 
        <br />
        <br />
 
        {/* Security Sections */}
        <div className="space-y-12">
          {/* Data Protection Section */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Data Protection
            </h2>
            <p className="text-gray-700 mb-6">
              We adhere to strict data security protocols to safeguard your information, including:
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-2 w-2 mt-2 bg-blue-500 rounded-full"></div>
                </div>
                <p className="ml-4">End-to-end encryption for data storage and transfer.</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-2 w-2 mt-2 bg-blue-500 rounded-full"></div>
                </div>
                <p className="ml-4">Role-based access controls (RBAC) to ensure only authorized personnel handle your data.</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-2 w-2 mt-2 bg-blue-500 rounded-full"></div>
                </div>
                <p className="ml-4">Regular audits and compliance with global data privacy regulations like GDPR and CCPA.</p>
              </li>
            </ul>
          </section>
 
          {/* AI Model Security Section */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            AI Model Security
            </h2>
            <p className="text-gray-700 mb-6">
            We prioritize the security of our AI models to protect them from unauthorized use, tampering, or adversarial attacks by implementing:
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-2 w-2 mt-2 bg-blue-500 rounded-full"></div>
                </div>
                <p className="ml-4">Secure training environments.</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-2 w-2 mt-2 bg-blue-500 rounded-full"></div>
                </div>
                <p className="ml-4">Model obfuscation techniques. </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-2 w-2 mt-2 bg-blue-500 rounded-full"></div>
                </div>
                <p className="ml-4">Continuous monitoring for potential vulnerabilities. </p>
              </li>
            </ul>
          </section>
                    {/* Infrastructure Resilience */}
                    <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Infrastructure Resilience
            </h2>
            <p className="text-gray-700 mb-6">
            Our infrastructure is designed for high availability and resilience with
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-2 w-2 mt-2 bg-blue-500 rounded-full"></div>
                </div>
                <p className="ml-4">Cloud-based systems secured with multi-layer authentication. </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-2 w-2 mt-2 bg-blue-500 rounded-full"></div>
                </div>
                <p className="ml-4">Regular penetration testing to identify and mitigate risks. </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-2 w-2 mt-2 bg-blue-500 rounded-full"></div>
                </div>
                <p className="ml-4">Disaster recovery protocols to ensure business continuity. </p>
              </li>
            </ul>
          </section>
 
          {/* Compliance & Certifications  */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Compliance & Certifications
            </h2>
            <p className="text-gray-700 mb-6">
            We comply with industry-standard security frameworks to ensure trust and transparency
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-2 w-2 mt-2 bg-blue-500 rounded-full"></div>
                </div>
                <p className="ml-4">ISO/IEC 27001: Information Security Management. </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-2 w-2 mt-2 bg-blue-500 rounded-full"></div>
                </div>
                <p className="ml-4">SOC 2 Type II: Security, Availability, and Confidentiality. </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-2 w-2 mt-2 bg-blue-500 rounded-full"></div>
                </div>
                <p className="ml-4">Compliance with local and international data privacy laws.</p>
              </li>
            </ul>
          </section>
 
           {/* Partnering Securely  */}
           <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Partnering Securely
            </h2>
            <p className="text-gray-700 mb-6">
            When you partner with InnoSquares, you gain a trusted ally committed to safeguarding your data and delivering solutions with security at the core.
            </p>
            </section>
         
        </div>
      </main>
    </div>
    <div className="h-1 w-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500" />
    <br />    
<Contact/>
<br />
<div className="h-1 w-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500" />
<br />
<Newsletter/>
    <Footer/>
    </div>
  );
};
 
export default Security;