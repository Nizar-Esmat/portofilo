import { useState, useEffect } from 'react';

/** Reads the current dark-mode state from the <html> element's class list
 *  and reacts to changes (e.g. when the user toggles the theme). */
const getInitialDark = () => {
  if (typeof window === 'undefined') return false;
  const stored = localStorage.getItem('portfolio-theme');
  if (stored) return stored === 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

export function useIsDark() {
  const [isDark, setIsDark] = useState(getInitialDark);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    return () => observer.disconnect();
  }, []);

  return isDark;
}
