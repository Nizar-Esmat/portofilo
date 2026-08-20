import RevealText from './RevealText';

const SectionTitle = ({ title, subtitle, align = 'center' }) => (
  <div className={`mb-14 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <h2 className="text-3xl sm:text-4xl font-bold font-display text-ink-900 dark:text-white mb-3 leading-tight">
      <RevealText text={title} />
    </h2>
    {subtitle && (
      <p className="text-ink-500 dark:text-ink-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    )}
    <div
      className={`mt-5 h-1 w-14 bg-gradient-to-r from-teal-600 to-sage-600 rounded-full ${
        align === 'center' ? 'mx-auto' : ''
      }`}
    />
  </div>
);

export default SectionTitle;
