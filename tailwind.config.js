/** @type {import('tailwindcss').Config} */

// Monochrome theme: `ink`/`teal`/`sage` are separate tokens for historical reasons
// (earlier palette iterations), but all now resolve to the same true grayscale
// ramp (0% saturation) so the whole site stays strictly black/white/gray.
// `sage` is offset one stop lighter so two-tone spots (gradient-text, the
// section-title accent bar, glow particles) still show a visible tonal shift
// instead of a flat, invisible "gradient" between identical colors.
const GRAY = {
  50: '#f7f7f7',
  100: '#ececec',
  200: '#d6d6d6',
  300: '#b8b8b8',
  400: '#949494',
  500: '#737373',
  600: '#575757',
  700: '#3d3d3d',
  800: '#262626',
  900: '#141414',
  950: '#000000',
};
const GRAY_LIGHT = {
  50: '#f7f7f7',
  100: '#f7f7f7',
  200: '#ececec',
  300: '#d6d6d6',
  400: '#b8b8b8',
  500: '#949494',
  600: '#737373',
  700: '#575757',
  800: '#3d3d3d',
  900: '#262626',
  950: '#141414',
};

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      colors: {
        ink: GRAY,
        teal: GRAY,
        sage: GRAY_LIGHT,
      },
    },
  },
  plugins: [],
}
