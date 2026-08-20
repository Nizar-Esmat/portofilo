const VARIANTS = {
  default:
    'bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800',
  gray: 'bg-ink-100 dark:bg-ink-800 text-ink-600 dark:text-ink-400 border border-ink-200 dark:border-ink-700',
};

const Badge = ({ children, variant = 'default', className = '' }) => (
  <span
    className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium ${VARIANTS[variant]} ${className}`}
  >
    {children}
  </span>
);

export default Badge;
