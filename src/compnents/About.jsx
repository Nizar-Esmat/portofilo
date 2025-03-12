import React from 'react'
import aboutImg from '../assets/aboutImg.jpg'
import { ABOUT_TEXT } from '../constants'
export default function About() {
  return (
    <div className="border-b border-neutral-900 pb-12">
      {/* Heading */}
      <h1 className="my-16 text-center text-5xl font-semibold tracking-tight">
        About <span className="text-neutral-500">Me</span>
      </h1>

      <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={aboutImg}
            alt="about"
            className="max-w-[250px] rounded-full shadow-xl border-4 border-neutral-800"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 px-8 mt-6 lg:mt-0 flex justify-center">
          <p className="max-w-xl text-lg font-light leading-relaxed bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent">
            {ABOUT_TEXT}
          </p>
        </div>
      </div>
    </div>

  )
}
