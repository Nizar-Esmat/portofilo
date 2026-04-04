import { useState, useEffect } from 'react';
import {
  HiSun,
  HiMoon,
  HiBars3,
  HiXMark,
  HiArrowDownTray,
} from 'react-icons/hi2';
import Container from './Container';
import { scrollToSection } from '../../utils/helpers';

const NAV_LINKS = [
  { label: 'About', id: 'about' },
  { label: 'Impact', id: 'impact' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Activities', id: 'activities' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
];

const Navbar = ({ profile, theme, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['hero', ...NAV_LINKS.map(l => l.id)];
    const observers = [];

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.25, rootMargin: '-64px 0px -50% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(obs => obs.disconnect());
  }, []);

  const handleNavClick = id => {
    scrollToSection(id);
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between h-16" aria-label="Main navigation">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('hero')}
            className="text-lg font-bold font-display gradient-text focus:outline-none"
            aria-label="Scroll to top"
          >
            {profile.name.split(' ').slice(0, 2).join(' ')}
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map(link => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === link.id
                    ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
            >
              {theme === 'dark' ? (
                <HiSun className="w-5 h-5" />
              ) : (
                <HiMoon className="w-5 h-5" />
              )}
            </button>

            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white text-sm font-medium rounded-lg transition-colors duration-200"
            >
              <HiArrowDownTray className="w-4 h-4" />
              Resume
            </a>

            <button
              onClick={() => setMobileOpen(prev => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
              className="lg:hidden p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
            >
              {mobileOpen ? (
                <HiXMark className="w-5 h-5" />
              ) : (
                <HiBars3 className="w-5 h-5" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-3 pb-4 space-y-0.5">
            {NAV_LINKS.map(link => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === link.id
                    ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 px-1">
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
              >
                <HiArrowDownTray className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Navbar;
