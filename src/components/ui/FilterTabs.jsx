const FilterTabs = ({ tabs, active, onChange }) => (
  <div className="flex flex-wrap gap-2 justify-center" role="tablist">
    {tabs.map(tab => (
      <button
        key={tab}
        role="tab"
        aria-selected={active === tab}
        onClick={() => onChange(tab)}
        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950 ${
          active === tab
            ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-500/30'
            : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-slate-200'
        }`}
      >
        {tab}
      </button>
    ))}
  </div>
);

export default FilterTabs;
