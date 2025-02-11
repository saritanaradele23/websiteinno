/* eslint-disable no-unused-vars */
import React from 'react'
import { Phone, Mail, MapPin, Twitter, Youtube, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-2 gap-8">
        <div className="bg-[#323232] text-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
          <p className="mb-8">Say something to start a chat!</p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5" />
              <span>(+1) 555-0123</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5" />
              <span>info@innosquares.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5" />
              <span>FRISCO, TX, UNITED STATES</span>
            </div>
          </div>
        </div>
        <div>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="p-2 rounded border" />
              <input type="text" placeholder="Last Name" className="p-2 rounded border" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input type="email" placeholder="Email" className="p-2 rounded border" />
              <input type="tel" placeholder="Phone Number" className="p-2 rounded border" />
            </div>
            <input type="text" placeholder="Company Name" className="w-full p-2 rounded border" />
            <select className="w-full p-2 rounded border">
              <option>Preferred Contact Method</option>
              <option>Email</option>
              <option>Phone</option>
              <option>Video Call</option>
            </select>
            <textarea placeholder="Project Description" rows={4} className="w-full p-2 rounded border"></textarea>
            <button className="bg-black text-white px-6 py-2 rounded">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Contact
