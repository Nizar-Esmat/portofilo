const SkillCard = ({ skill }) => (
  <div className="inline-flex items-center px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium hover:border-indigo-400 dark:hover:border-indigo-600 hover:text-indigo-700 dark:hover:text-indigo-300 hover:shadow-sm hover:shadow-indigo-500/10 transition-all duration-200 cursor-default select-none">
    {skill}
  </div>
);

export default SkillCard;
