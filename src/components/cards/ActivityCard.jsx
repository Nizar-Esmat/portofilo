import { HiCalendarDays } from 'react-icons/hi2';

const ActivityCard = ({ activity }) => {
  const { title, organization, period, description } = activity;

  return (
    <div className="card-base card-hover p-5 flex flex-col gap-3 h-full">
      <div>
        <h3 className="text-sm font-semibold text-slate-900 dark:text-white leading-snug">
          {title}
        </h3>
        <p className="text-indigo-600 dark:text-indigo-400 text-xs font-medium mt-1">
          {organization}
        </p>
      </div>
      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed flex-1">
        {description}
      </p>
      <span className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500">
        <HiCalendarDays className="w-3.5 h-3.5" />
        {period}
      </span>
    </div>
  );
};

export default ActivityCard;
