import { HiMapPin, HiCalendarDays } from 'react-icons/hi2';
import Badge from '../ui/Badge';

const ExperienceCard = ({ experience }) => {
  const { company, role, period, location, stack, highlights } = experience;
  const isCurrent = period.includes('Present');

  return (
    <div className="relative pl-8 pb-10 last:pb-0">
      {/* Timeline dot */}
      <div
        className={`absolute left-0 top-1.5 w-3 h-3 rounded-full ring-4 z-10 ${
          isCurrent
            ? 'bg-indigo-600 dark:bg-indigo-400 ring-indigo-100 dark:ring-indigo-950/80'
            : 'bg-slate-400 dark:bg-slate-600 ring-slate-100 dark:ring-slate-900'
        }`}
      />

      <div className="card-base card-hover p-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                {role}
              </h3>
              {isCurrent && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 text-xs font-medium">
                  <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                  Current
                </span>
              )}
            </div>
            <p className="text-indigo-600 dark:text-indigo-400 font-medium text-sm mt-0.5">
              {company}
            </p>
          </div>
          <div className="flex flex-col items-start sm:items-end gap-1 text-xs text-slate-400 dark:text-slate-500 shrink-0">
            <span className="flex items-center gap-1">
              <HiCalendarDays className="w-3.5 h-3.5" />
              {period}
            </span>
            <span className="flex items-center gap-1">
              <HiMapPin className="w-3.5 h-3.5" />
              {location}
            </span>
          </div>
        </div>

        <ul className="mb-4 space-y-2">
          {highlights.map((h, i) => (
            <li key={i} className="flex gap-2.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 dark:bg-indigo-500" />
              {h}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5">
          {stack.map(tech => (
            <Badge key={tech} variant="gray">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
