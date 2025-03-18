import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { database, ref, push } from "../firebase"; // Firebase configuration
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
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div >
        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">Connect to Get AI Enabled</h2>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Contact Info */}
          <div className="bg-[#323232] text-white p-6 md:p-8 rounded-lg order-2 md:order-1">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Contact Information</h3>
            <p className="mb-6 md:mb-8">Say something to start a chat!</p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm md:text-base break-words">+1 (972) 292-8058</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm md:text-base break-words">info@innosquares.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span className="text-sm md:text-base break-words">669 DRY CANYON DR, FRISCO, Texas, 75036, United States</span>
              </div>
            </div>
          </div>
 
          {/* Contact Form */}
          <div className="order-1 md:order-2">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="p-2 rounded border w-full" required />
                <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="p-2 rounded border w-full" required />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="p-2 rounded border w-full" required />
                <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="p-2 rounded border w-full" />
              </div>
              <input type="text" name="company" placeholder="Company Name" value={formData.company} onChange={handleChange} className="w-full p-2 rounded border" />
              <select name="contactMethod" value={formData.contactMethod} onChange={handleChange} className="w-full p-2 rounded border">
                <option value="">Preferred Contact Method</option>
                <option value="Email">Email</option>
                <option value="Phone">Phone</option>
                <option value="Video Call">Video Call</option>
              </select>
              <textarea name="message" placeholder="Project Description" value={formData.message} onChange={handleChange} rows={4} className="w-full p-2 rounded border" required></textarea>
              <button className="bg-black text-white px-6 py-2 rounded w-full sm:w-auto" type="submit">
                Send Message
              </button>
            </form>
 
            {/* Show success or error message */}
            {status && (
              <p className={`mt-4 text-sm md:text-base ${status.type === "success" ? "text-green-600" : "text-red-600"}`}>
                {status.message}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
 
export default Contact;