import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

// Parent container animation
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.3 }
  }
};

// Child item animation (Experience Details)
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

// Technologies Animation (Slide in from Left)
const techVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.4, ease: "easeOut" },
  }),
};

export default function Experience() {
  return (
    <motion.div
      className="border-b border-neutral-900 pb-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.h2 className="my-20 text-center text-4xl" variants={itemVariants}>
        Experience
      </motion.h2>

      {EXPERIENCES.map((experience, index) => (
        <motion.div
          key={index}
          className="mb-8 flex flex-wrap lg:justify-center"
          variants={itemVariants}
        >
          {/* Year */}
          <div className="w-full lg:w-1/4">
            <p className="text-lg font-semibold text-neutral-300">{experience.year}</p>
          </div>

          {/* Experience Details */}
          <div className="w-full lg:w-3/4">
            <h3 className="text-xl font-medium">{experience.role}</h3>
            <p className="text-neutral-500">{experience.company}</p>
            <p className="mt-2 text-neutral-400">{experience.description}</p>

            {/* Technologies Used */}
            <motion.div className="mt-2 flex flex-wrap">
              {experience.technologies.map((tech, i) => (
                <motion.span
                  key={i}
                  className="m-1 rounded-lg bg-neutral-800 px-3 py-1 text-sm text-purple-800"
                  variants={techVariants}
                  custom={i} // Pass index to stagger items
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
