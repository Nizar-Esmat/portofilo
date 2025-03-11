import logo from '../assets/logo.png'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'

import React from 'react'

export default function Navbar() {
  return (
    <nav className=" mb-20 flex justify-between py-6">
      <div className='flex flex-shrink-0 items-center'  >
      <img src={logo} alt="Nizar logo" width="60" height="60" />
      </div>
      <div className=' m-8 flex items-center justify-center gap-4 text-2xl'>
      <FaLinkedin/>
      <FaGithub/>
      <FaFacebook/>
      </div>
      </nav>
  )
}
