import TiltCard from '../ui/TiltCard';

const SkillCard = ({ skill }) => (
  <TiltCard max={6} scale={1.04} className="inline-block">
    <div className="inline-flex items-center px-4 py-2 rounded-xl bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 text-ink-700 dark:text-ink-300 text-sm font-medium hover:border-teal-400 dark:hover:border-teal-600 hover:text-teal-700 dark:hover:text-teal-300 hover:shadow-sm hover:shadow-teal-500/10 transition-all duration-200 cursor-default select-none">
      {skill}
    </div>
  </TiltCard>
);

export default SkillCard;
