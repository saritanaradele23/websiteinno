import { motion } from "framer-motion";
import React from "react";
import preData from "../assets/preData.mp4"; // Ensure this file exists!

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center mb-15 pb-10 from-gray-900 to-black text-white text-center">
      {/* Animated AI Brain with Gradient Border */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {/* MP4 Video */}
        <div className="relative z-10 w-160 h-100 flex items-center justify-center rounded-full bg-white overflow-hidden">
          <video
            src={preData}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover rounded-full"
            style={{ objectFit: "cover" }}
            playbackRate={4} // Sets the video speed to 2x
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
