import React from "react";
import { PROJECTS } from "../constants";

export default function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>

      <div className="flex flex-col gap-12">
        {PROJECTS.map((project, index) => (
          <div key={index} className="flex flex-wrap items-center gap-6 lg:flex-nowrap">
            
            {/* Project Image */}
            <div className="w-full lg:w-1/4">
              <img src={project.image} alt={project.title} className="rounded-lg shadow-lg mb-6" width={150} height={150} />
            </div>

            {/* Project Details */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-neutral-400">{project.description}</p>

              {/* Technologies Used */}
              <div className="mt-3 flex flex-wrap">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="m-1 rounded-lg bg-neutral-800 px-3 py-1 text-sm text-neutral-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
