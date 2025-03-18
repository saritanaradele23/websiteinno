/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React from "react";
import CiscoLogo from "../assets/cisco.png";
import JuniperLogo from "../assets/juniper.png";
import NebiusLogo from "../assets/nebius.png";
import SnowflakeLogo from "../assets/Snowflake_Logo.svg.png";
import Splunk from "../assets/Splunk Logo.svg";
 
const logos = [CiscoLogo, JuniperLogo, NebiusLogo, SnowflakeLogo,Splunk];
 
const Marquee = () => {
  return (
    <section className="py-10 bg-white-100 overflow-hidden">
      <style>
        {`
          .marquee-container {
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            position: relative;
          }
          .marquee-content {
            display: flex;
            width: max-content;
            animation: marquee 50s linear infinite;
          }
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}
      </style>
 
      <h2 className="text-3xl font-bold text-center mb-5">Our Partners</h2>
      <div className="marquee-container">
        <motion.div
          className="marquee-content flex space-x-8"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        >
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex space-x-8">
              {logos.map((logo, index) => (
                <img key={index} src={logo} alt="Partner Logo" className="h-14 w-auto" />
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
 
export default Marquee;