import { FaGithub } from 'react-icons/fa';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';
import Badge from '../ui/Badge';

const ProjectCard = ({ project }) => {
    const { title, type, featured, stack, description, highlights, githubUrl, liveUrl } = project;

    return (
        <div className="card-base card-hover p-6 flex flex-col gap-4 h-full group">
            {/* Header */}
            <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-slate-900 dark:text-white leading-snug mb-2">
                        {title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-1.5">
                        <Badge variant="gray">{type}</Badge>
                        {featured && <Badge variant="default">Featured</Badge>}
                    </div>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${title} on GitHub`}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
                        >
                            <FaGithub className="w-4 h-4" />
                        </a>
                    )}
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${title} live demo`}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
                        >
                            <HiArrowTopRightOnSquare className="w-4 h-4" />
                        </a>
                    )}
                </div>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex-1">
                {description}
            </p>

            {/* Highlights */}
            {highlights && highlights.length > 0 && (
                <ul className="space-y-1.5">
                    {highlights.map((h, i) => (
                        <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                        >
                            <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 dark:bg-indigo-500" />
                            {h}
                        </li>
                    ))}
                </ul>
            )}

            {/* Stack */}
            <div className="flex flex-wrap gap-1.5 pt-1 border-t border-slate-100 dark:border-slate-800">
                {stack.map(tech => (
                    <Badge key={tech} variant="default">
                        {tech}
                    </Badge>
                ))}
            </div>
        </div>
    );
};

export default ProjectCard;
