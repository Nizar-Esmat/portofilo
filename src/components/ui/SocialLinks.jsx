import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiCodeforces } from 'react-icons/si';
import { useMagnetic } from '../../hooks/useMagnetic';

const ICON_MAP = {
  LinkedIn: FaLinkedin,
  GitHub: FaGithub,
  Codeforces: SiCodeforces,
};

const COLOR_MAP = {
  LinkedIn: 'hover:text-blue-600 dark:hover:text-blue-400',
  GitHub: 'hover:text-slate-900 dark:hover:text-white',
  Codeforces: 'hover:text-red-500 dark:hover:text-red-400',
};

const SocialLink = ({ label, url, iconClass }) => {
  const magnetic = useMagnetic({ strength: 0.25, range: 40 });
  const Icon = ICON_MAP[label];
  if (!Icon) return null;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      ref={magnetic.ref}
      style={magnetic.style}
      onMouseMove={magnetic.onMouseMove}
      onMouseLeave={magnetic.onMouseLeave}
      className={`text-slate-400 dark:text-slate-500 ${
        COLOR_MAP[label] || 'hover:text-indigo-600 dark:hover:text-indigo-400'
      } transition-colors duration-200`}
    >
      <Icon className={iconClass} />
    </motion.a>
  );
};

const SocialLinks = ({ socials, size = 'md', className = '' }) => {
  const iconClass = size === 'sm' ? 'w-4 h-4' : 'w-5 h-5';

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socials.map(({ label, url }) => (
        <SocialLink key={label} label={label} url={url} iconClass={iconClass} />
      ))}
    </div>
  );
};

export default SocialLinks;
