import Badge from '../ui/Badge';
import TiltCard from '../ui/TiltCard';

const HighlightCard = ({ highlight }) => {
  const { title, description, stack } = highlight;

  return (
    <TiltCard className="h-full">
      <div className="card-base card-hover p-6 h-full flex flex-col gap-4">
        <div className="w-8 h-8 rounded-lg bg-teal-100 dark:bg-teal-950/70 flex items-center justify-center flex-shrink-0">
          <span className="text-teal-600 dark:text-teal-400 text-xs font-bold">
            {title.charAt(0)}
          </span>
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-ink-900 dark:text-white mb-2 leading-snug">
            {title}
          </h3>
          <p className="text-ink-500 dark:text-ink-400 text-sm leading-relaxed">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {stack.map(tech => (
            <Badge key={tech} variant="default">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </TiltCard>
  );
};

export default HighlightCard;
