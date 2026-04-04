const VARIANTS = {
  default:
    'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800',
  gray: 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700',
  green:
    'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800',
  orange:
    'bg-orange-50 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-800',
};

const Badge = ({ children, variant = 'default', className = '' }) => (
  <span
    className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium ${VARIANTS[variant]} ${className}`}
  >
    {children}
  </span>
);

export default Badge;
