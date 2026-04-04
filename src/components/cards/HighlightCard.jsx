import Badge from '../ui/Badge';

const HighlightCard = ({ highlight }) => {
  const { title, description, stack } = highlight;

  return (
    <div className="card-base card-hover p-6 h-full flex flex-col gap-4">
      <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-950/70 flex items-center justify-center flex-shrink-0">
        <span className="text-indigo-600 dark:text-indigo-400 text-xs font-bold">
          {title.charAt(0)}
        </span>
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-2 leading-snug">
          {title}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
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
  );
};

export default HighlightCard;
