import logo from '../assets/logo.png';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import React from 'react';

export default function Navbar() {
  return (
    <nav className="mb-20 flex justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="Nizar logo" width="60" height="60" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {/* LinkedIn Icon with Link */}
        <a
          href="https://www.linkedin.com/in/nizar-esmat-259690198/" 
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer" // Security best practice for external links
          className="text-gray-400 hover:text-cyan-400 transition-colors" // Optional: Add hover effect
        >
          <FaLinkedin />
        </a>

        {/* GitHub Icon with Link */}
        <a
          href="https://github.com/Nizar-Esmat" // Replace with your GitHub URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-cyan-400 transition-colors"
        >
          <FaGithub />
        </a>

        {/* Facebook Icon with Link */}
        <a
          href="https://www.facebook.com/your-facebook-profile" // Replace with your Facebook URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-cyan-400 transition-colors"
        >
          <FaFacebook />
        </a>
      </div>
    </nav>
  );
}