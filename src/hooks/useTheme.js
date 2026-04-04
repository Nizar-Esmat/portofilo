import { useState, useEffect } from 'react';

export function useTheme() {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            const stored = localStorage.getItem('portfolio-theme');
            if (stored) return stored;
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        return 'dark';
    });

    useEffect(() => {
        const root = document.documentElement;
        root.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('portfolio-theme', theme);
    }, [theme]);

    const toggleTheme = () =>
        setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

    return { theme, toggleTheme };
}
