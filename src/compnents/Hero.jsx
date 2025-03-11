import React from 'react'
import { HERO_CONTENT } from '../constants'
import me from '../assets/me.png'
export default function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
    <div className="flex flex-wrap">
      {/* Text Section */}
      <div className='w-full lg:w-1/2'>
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="pb-8 text-5xl font-thin tracking-tighter lg:mt-16 lg:text-7xl">Nizar Esmat Fawzy</h1>
          <span className="text-3xl tracking-tight" style={{ 
            backgroundImage: 'linear-gradient(to right, #FFC5C5, #8B0A1A, #7A288A)',
            backgroundClip: 'text', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent' 
          }}>
            Full Stack Developer
          </span>
          <p className='my-2 max-w-xl py-4 font-light tracking-tighter text-sm lg:text-base'>
            {HERO_CONTENT}
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className='w-full lg:w-1/2 lg:p-4'>
        <div className="flex justify-center">
          <img src={me} alt="profile" className="max-w-xs rounded-full shadow-lg" />
        </div>
      </div>
    </div>
  </div>
  )
}
