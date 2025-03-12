import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiDjango, SiMongodb } from "react-icons/si";

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
            { name: "React", icon: <FaReact className="text-blue-400" /> },
            { name: "Django", icon: <SiDjango className="text-green-500" /> },
            { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
            { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
          ].map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-6 shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="text-5xl">{tech.icon}</div>
              <p className="mt-3 text-lg font-medium">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
