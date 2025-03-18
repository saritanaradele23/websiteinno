import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { database, ref, push } from "../../firebase"; // Firebase configuration
import Navbar from "../../layout/NavBar";
import Footer from "../../layout/Footer";
 
const WEB3FORMS_ACCESS_KEY = "c929ec26-e551-49f7-a0b5-0b73bddd252d"; // Replace with your actual Web3Forms access key
 
const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    contactMethod: "",
    message: "",
  });
 
  const [status, setStatus] = useState(null);
 
  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 
  // Validate form
  const validateForm = () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      return "Please fill in all required fields.";
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      return "Please enter a valid email address.";
    }
    return null;
  };
 
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
 
    const validationError = validateForm();
    if (validationError) {
      setStatus({ type: "error", message: validationError });
      return;
    }
 
    try {
      // Save data to Firebase
      const contactRef = ref(database, "contacts");
      await push(contactRef, formData);
 
      // Send data to Web3Forms
      const formPayload = new FormData();
      formPayload.append("access_key", WEB3FORMS_ACCESS_KEY);
      Object.keys(formData).forEach((key) => {
        formPayload.append(key, formData[key]);
      });
 
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload,
      });
 
      const data = await response.json();
 
      if (data.success) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          contactMethod: "",
          message: "",
        });
      } else {
        setStatus({ type: "error", message: data.message || "Error sending message." });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Error sending message. Please try again later." });
    }
  };
 
  return (
    <>
      <Navbar />
 
      <section className="bg-gray-50 py-10 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Contact Form Section - Top */}
          <div className="mb-8 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 md:mb-4 text-gray-800">Get in Touch</h2>
            <p className="text-center text-gray-600 mb-6 md:mb-10 max-w-2xl mx-auto text-sm md:text-base px-4">We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.</p>
           
            <div className="max-w-3xl mx-auto bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg border border-gray-100">
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="Your First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full p-2 md:p-3 rounded border border-gray-300 focus:ring-2 focus:ring-gray-200 focus:border-gray-400 outline-none transition-all text-sm md:text-base"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Your Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full p-2 md:p-3 rounded border border-gray-300 focus:ring-2 focus:ring-gray-200 focus:border-gray-400 outline-none transition-all text-sm md:text-base"
                      required
                    />
                  </div>
                </div>
               
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-2 md:p-3 rounded border border-gray-300 focus:ring-2 focus:ring-gray-200 focus:border-gray-400 outline-none transition-all text-sm md:text-base"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Your Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-2 md:p-3 rounded border border-gray-300 focus:ring-2 focus:ring-gray-200 focus:border-gray-400 outline-none transition-all text-sm md:text-base"
                    />
                  </div>
                </div>
               
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full p-2 md:p-3 rounded border border-gray-300 focus:ring-2 focus:ring-gray-200 focus:border-gray-400 outline-none transition-all text-sm md:text-base"
                  />
                </div>
               
                <div>
                  <label htmlFor="contactMethod" className="block text-sm font-medium text-gray-700 mb-1">Preferred Contact Method</label>
                  <select
                    id="contactMethod"
                    name="contactMethod"
                    value={formData.contactMethod}
                    onChange={handleChange}
                    className="w-full p-2 md:p-3 rounded border border-gray-300 focus:ring-2 focus:ring-gray-200 focus:border-gray-400 outline-none transition-all bg-white text-sm md:text-base"
                  >
                    <option value="">Please select</option>
                    <option value="Email">Email</option>
                    <option value="Phone">Phone</option>
                    <option value="Video Call">Video Call</option>
                  </select>
                </div>
               
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Project Description</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full p-2 md:p-3 rounded border border-gray-300 focus:ring-2 focus:ring-gray-200 focus:border-gray-400 outline-none transition-all text-sm md:text-base"
                    required
                  ></textarea>
                </div>
               
                <button
                  className="w-full md:w-auto bg-black text-white px-6 py-2 md:px-8 md:py-3 rounded-md hover:bg-gray-800 transition-colors duration-300 font-medium shadow-md text-sm md:text-base"
                  type="submit"
                >
                  Send Message
                </button>
              </form>
 
              {/* Show success or error message */}
              {status && (
                <div className={`mt-4 md:mt-6 p-3 md:p-4 rounded text-sm md:text-base ${status.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
                  {status.message}
                </div>
              )}
            </div>
          </div>
 
          {/* Map and Contact Info - Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Google Map Section */}
            <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200 h-64 sm:h-80 md:h-96">
              <iframe
                title="Our Location"
                className="w-full h-full border-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17844680.25061593!2d-112.25775209199169!3d40.67458477557711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77b45974b%3A0xb9ec9ba4f647678f!2sDallas%2C%20TX%2C%20USA!5e0!3m2!1sen!2sin!4v1742289283380!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
 
            {/* Contact Information Section */}
            <div className="bg-gradient-to-br from-gray-900 to-black text-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 border-b border-gray-700 pb-3 md:pb-4">Contact Information</h3>
              <p className="mb-4 md:mb-8 text-gray-300 text-sm md:text-base">Say something to start a chat!</p>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="bg-gray-800 p-2 md:p-3 rounded-full">
                    <Phone className="w-4 h-4 md:w-5 md:h-5 text-gray-200" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-gray-400">Phone</p>
                    <a href="tel:+19722928058" className="text-sm md:text-base text-white hover:underline">+1 (972) 292-8058</a>
                  </div>
                </div>
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="bg-gray-800 p-2 md:p-3 rounded-full">
                    <Mail className="w-4 h-4 md:w-5 md:h-5 text-gray-200" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-gray-400">Email</p>
                    <a href="mailto:info@innosquares.com" className="text-sm md:text-base text-white hover:underline">info@innosquares.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="bg-gray-800 p-2 md:p-3 rounded-full mt-1">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-gray-200" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-gray-400">Address</p>
                    <a 
                      href="https://maps.google.com/?q=669+DRY+CANYON+DR,+FRISCO,+Texas,+75036" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm md:text-base text-white hover:underline"
                    >
                      669 DRY CANYON DR, FRISCO, Texas, 75036, United States
                    </a>
                  </div>
                </div>
              </div>
             
              <div className="mt-6 md:mt-10 border-t border-gray-700 pt-4 md:pt-6">
                <h4 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Office Hours</h4>
                <ul className="space-y-1 md:space-y-2 text-sm md:text-base text-gray-300">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday - Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      <Footer />
    </>
  );
};
 
export default Contact;