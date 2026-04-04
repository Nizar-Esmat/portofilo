const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  target,
  rel,
  download,
  onClick,
  className = '',
  ...rest
}) => {
  const base =
    'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-slate-950';

  const variants = {
    primary:
      'bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white shadow-sm shadow-indigo-500/25',
    secondary:
      'border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-400 dark:hover:border-indigo-600 hover:text-indigo-600 dark:hover:text-indigo-400 bg-transparent',
    ghost:
      'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        download={download}
        className={classes}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
