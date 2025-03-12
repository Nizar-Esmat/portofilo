import React from 'react'
import { EXPERIENCES } from '../constants'

export default function Experience() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Experience</h2>

      {EXPERIENCES.map((experience, index) => (
        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
          <div className="w-full lg:w-1/4">
            <p className="text-lg font-semibold text-neutral-300">{experience.year}</p>
          </div>
          <div className="w-full lg:w-3/4">
            <h3 className="text-xl font-medium">{experience.role}</h3>
            <p className="text-neutral-500">{experience.company}</p>
            <p className="mt-2 text-neutral-400">{experience.description}</p>
            
            {/* Technologies Used */}
            <div className="mt-2 flex flex-wrap">
              {experience.technologies.map((tech, i) => (
                <span key={i} className="m-1 rounded-lg bg-neutral-800 px-3 py-1 text-sm text-purple-800">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
