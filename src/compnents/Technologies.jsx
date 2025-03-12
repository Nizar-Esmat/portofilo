import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiDjango, SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";

// Floating Animation
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  }, 
});

export default function Technologies() {
  return (
    <div>
      <div className="border-b border-neutral-800 pb-24">
        {/* Heading */}
        <h1 className="my-20 text-center text-4xl font-semibold">Technologies</h1>

        {/* Tech Stack Container */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {/* Technology Cards */}
          {[
            { name: "React", icon: <FaReact className="text-blue-400" />, duration: 2 },
            { name: "Django", icon: <SiDjango className="text-green-500" />, duration: 2.5 },
            { name: "Node.js", icon: <FaNodeJs className="text-green-600" />, duration: 3 },
            { name: "MongoDB", icon: <SiMongodb className="text-green-400" />, duration: 3.5 },
          ].map((tech, index) => (
            <motion.div
            variants={iconVariants(tech.duration)}
                initial="initial"
                animate="animate"
              key={index}
              className="w-40 h-40 flex flex-col justify-center items-center rounded-2xl border-4 border-neutral-800 p-6 shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <motion.div
                variants={iconVariants(tech.duration)}
                initial="initial"
                animate="animate"
                className="text-5xl"
              >
                {tech.icon}
              </motion.div>
              <p className="mt-3 text-lg font-medium">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
