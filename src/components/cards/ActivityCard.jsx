import { HiCalendarDays } from 'react-icons/hi2';
import TiltCard from '../ui/TiltCard';

const ActivityCard = ({ activity }) => {
  const { title, organization, period, description } = activity;

  return (
    <TiltCard className="h-full">
      <div className="card-base card-hover p-5 flex flex-col gap-3 h-full">
        <div>
          <h3 className="text-sm font-semibold text-ink-900 dark:text-white leading-snug">
            {title}
          </h3>
          <p className="text-teal-600 dark:text-teal-400 text-xs font-medium mt-1">
            {organization}
          </p>
        </div>
        <p className="text-ink-500 dark:text-ink-400 text-sm leading-relaxed flex-1">
          {description}
        </p>
        <span className="flex items-center gap-1.5 text-xs text-ink-400 dark:text-ink-500">
          <HiCalendarDays className="w-3.5 h-3.5" />
          {period}
        </span>
      </div>
    </TiltCard>
  );
};

export default ActivityCard;
