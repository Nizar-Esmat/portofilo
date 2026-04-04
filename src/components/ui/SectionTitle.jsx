const SectionTitle = ({ title, subtitle, align = 'center' }) => (
  <div className={`mb-14 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white mb-3 leading-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="text-slate-500 dark:text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    )}
    <div
      className={`mt-5 h-1 w-14 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full ${
        align === 'center' ? 'mx-auto' : ''
      }`}
    />
  </div>
);

export default SectionTitle;
