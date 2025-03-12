import React from "react";
import aboutImg from "../assets/aboutImg.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      {/* Heading */}
      <motion.h1 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }} 
        className="my-16 text-center text-5xl font-semibold tracking-tight"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h1>

      <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left">
        {/* Image Section */}
        <div className='w-full lg:w-1/2 lg:p-4'>
          <div className="flex justify-center">
            <motion.img  
            initial={{x:100 , opacity:0}}
            animate={{x:0 , opacity:1}}
            transition={{duration:1 , delay:1.2}}
            src={aboutImg} alt="profile" className="max-w-xs rounded-full shadow-lg" />
          </div>
        </div>
        {/* Text Section */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }} 
          className="w-full lg:w-1/2 px-8 mt-6 lg:mt-0 flex justify-center"
        >
          <p className="max-w-xl text-lg font-light leading-relaxed bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent">
            {ABOUT_TEXT}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
