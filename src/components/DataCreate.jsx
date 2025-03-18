import { motion } from "framer-motion";
import React from "react";
import DataC from "../assets/DataCreation.gif"; // Ensure this file exists!

const DataCreate = () => {
  return (
    <section className="relative flex flex-col items-center justify-center mb-15 pb-10  text-white text-center">
      {/* Animated AI Brain with Gradient Border */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {/* MP4 Video */}
        <div className="relative z-10  flex items-center justify-center  bg-white overflow-hidden">
        <img
  src={DataC}
  alt="Descriptive text"
  className="w-full h-full object-cover "
/>

        </div>
      </motion.div>
    </section>
  );
};

export default DataCreate;
