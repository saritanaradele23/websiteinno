import { motion } from "framer-motion";
import Lottie from "lottie-react";
import React from "react";
import CyberSheild from "../assets/Cyber-sheild.json";

function CyberHero() {
  return (
    <div>
      <section className="relative flex flex-col items-center justify-center mb-16 pb-10  from-gray-900 to-black text-white text-center">
      {/* Animated AI Brain with Gradient Border */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1.5, ease: "easeOut" }}
        // className="relative w-84 h-84 flex items-center justify-center rounded-full 
        //            border-[3px] border-transparent 
        //            bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
        //            p-1"
      >
        {/* Inner Circle for Border Glow */}
        <div className="absolute inset-0 rounded-full bg-white"></div>

        {/* Lottie Animation */}
        <div className="relative z-15 w-96 h-76 flex items-center justify-center rounded-full ">
          <Lottie animationData={CyberSheild} loop={true} />
        </div>
      </motion.div>
    </section>
    </div>
  )
}

export default CyberHero
