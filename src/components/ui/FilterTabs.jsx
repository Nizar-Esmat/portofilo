const FilterTabs = ({ tabs, active, onChange }) => (
  <div className="flex flex-wrap gap-2 justify-center" role="tablist">
    {tabs.map(tab => (
      <button
        key={tab}
        role="tab"
        aria-selected={active === tab}
        onClick={() => onChange(tab)}
        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:focus:ring-offset-ink-950 ${
          active === tab
            ? 'bg-teal-600 text-white shadow-sm shadow-teal-500/30'
            : 'bg-ink-100 dark:bg-ink-800/80 text-ink-600 dark:text-ink-400 hover:bg-ink-200 dark:hover:bg-ink-700 hover:text-ink-900 dark:hover:text-ink-200'
        }`}
      >
        {tab}
      </button>
    ))}
  </div>
);

export default FilterTabs;
