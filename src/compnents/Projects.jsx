import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

// Parent container animation
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.3 },
  },
};

// Project Card Animation
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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

export default function Projects() {
  return (
    <motion.div
      className="border-b border-neutral-900 pb-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.h2 className="my-20 text-center text-4xl" variants={cardVariants}>
        Projects
      </motion.h2>

      <motion.div className="flex flex-col gap-12">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-wrap items-center gap-6 lg:flex-nowrap border-b border-neutral-800 pb-6"
            variants={cardVariants}
          >
            {/* Project Image */}
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg shadow-lg mb-6"
                width={150}
                height={150}
              />
            </div>

            {/* Project Details */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-neutral-400">{project.description}</p>

              {/* Links Container */}
              <div className="mt-3 flex flex-wrap gap-4">
                {/* GitHub Repo Link */}
                {project.gitRepo && (
                  <a
                    href={project.gitRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-neutral-800 text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium hover:bg-neutral-700 hover:text-white transition"
                  >
                    View Repository
                  </a>
                )}

                {/* Deployment Link */}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition"
                  >
                    Live Demo
                  </a>
                )}
              </div>

              {/* Technologies Used */}
              <motion.div className="mt-3 flex flex-wrap">
                {project.technologies.map((tech, i) => (
                  <motion.span
                    key={i}
                    className="m-1 rounded-lg bg-neutral-800 px-3 py-1 text-sm text-purple-800"
                    variants={techVariants}
                    custom={i} // Staggered animation
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
