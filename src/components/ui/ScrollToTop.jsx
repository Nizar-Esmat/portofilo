import { useState, useEffect } from 'react';
import { HiArrowUp } from 'react-icons/hi2';
import { scrollToSection } from '../../utils/helpers';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      onClick={() => scrollToSection('hero')}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white shadow-lg shadow-teal-500/30 transition-all duration-300 ${
        visible ? 'opacity-100 tranink-y-0' : 'opacity-0 tranink-y-4 pointer-events-none'
      }`}
    >
      <HiArrowUp className="w-5 h-5" />
    </button>
  );
};

export default ScrollToTop;
