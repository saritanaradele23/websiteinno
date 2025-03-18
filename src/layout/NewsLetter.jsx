import React, { useState } from 'react';
 
const Newsletter = () => {
  const [email, setEmail] = useState('');
 
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail('');
  };
 
  return (
    <div className="w-full bg-[#323232] py-4 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <h2 className="text-white text-lg font-semibold uppercase">
          Subscribe to our newsletter
        </h2>
       
        <form onSubmit={handleSubmit} className="flex w-full sm:w-auto gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 sm:w-80 px-4 py-2 rounded-md bg-[#D9D9D9] text-black placeholder-gray-400 border border-gray-700 focus:outline-none focus:border-white"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-white text-gray-900 rounded-md font-medium hover:bg-gray-100 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};
 
export default Newsletter;