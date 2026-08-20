import { useActiveSection } from '../../hooks/useActiveSection';
import { scrollToSection } from '../../utils/helpers';

const SECTIONS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'impact', label: 'Impact' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'activities', label: 'Activities' },
  { id: 'education', label: 'Education' },
  { id: 'courses', label: 'Courses' },
  { id: 'contact', label: 'Contact' },
];

const SectionNav = () => {
  const activeSection = useActiveSection(SECTIONS.map(s => s.id));

  return (
    <nav
      aria-label="Section navigation"
      className="hidden lg:flex fixed right-5 top-1/2 -tranink-y-1/2 z-40 flex-col items-center gap-3"
    >
      {SECTIONS.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          aria-label={`Go to ${label} section`}
          aria-current={activeSection === id ? 'true' : undefined}
          className="group relative flex items-center justify-center w-3 h-3"
        >
          <span
            className={`rounded-full transition-all duration-300 ${
              activeSection === id
                ? 'w-2.5 h-2.5 bg-teal-600 dark:bg-teal-400'
                : 'w-1.5 h-1.5 bg-ink-300 dark:bg-ink-600 group-hover:bg-teal-400 dark:group-hover:bg-teal-500'
            }`}
          />
          <span className="pointer-events-none absolute right-6 whitespace-nowrap px-2 py-1 rounded-md bg-ink-900 dark:bg-ink-700 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {label}
          </span>
        </button>
      ))}
    </nav>
  );
};

export default SectionNav;
