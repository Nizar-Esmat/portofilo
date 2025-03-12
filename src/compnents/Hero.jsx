import React from 'react'
import { HERO_CONTENT } from '../constants'
import me from '../assets/me.png'
import {motion} from "framer-motion"

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },


  }
})
export default function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        {/* Text Section */}
        <div className='w-full lg:w-1/2'>
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 text-5xl font-thin tracking-tighter lg:mt-16 lg:text-7xl">Nizar Esmat Fawzy</motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="text-3xl tracking-tight" style={{
                backgroundImage: 'linear-gradient(to right, #FFC5C5, #8B0A1A, #7A288A)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
              Full Stack Developer (ITI Graduate)
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"

              className="max-w-xl text-lg font-light leading-relaxed bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* Image Section */}
        <div className='w-full lg:w-1/2 lg:p-4'>
          <div className="flex justify-center">
            <motion.img  
            initial={{x:100 , opacity:0}}
            animate={{x:0 , opacity:1}}
            transition={{duration:1 , delay:1.2}}
            src={me} alt="profile" className="max-w-xs rounded-full shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  )
}
