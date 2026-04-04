import { HiAcademicCap, HiMapPin, HiCalendarDays } from 'react-icons/hi2';
import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';
import FadeIn from '../ui/FadeIn';

const EducationSection = ({ education }) => {
  if (!education || education.length === 0) return null;

  return (
    <section
      id="education"
      className="section-padding bg-white/60 dark:bg-slate-900/40 border-y border-slate-100 dark:border-slate-800/60"
    >
      <Container>
        <FadeIn>
          <SectionTitle title="Education" />
        </FadeIn>

        <div className="max-w-2xl mx-auto space-y-5">
          {education.map((edu, i) => (
            <FadeIn key={edu.institution} delay={i * 0.1}>
              <div className="card-base card-hover p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950/70 flex items-center justify-center">
                    <HiAcademicCap className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-slate-900 dark:text-white leading-snug">
                      {edu.degree}
                    </h3>
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium text-sm mt-0.5">
                      {edu.institution}
                    </p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-2.5 text-xs text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1">
                        <HiCalendarDays className="w-3.5 h-3.5" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <HiMapPin className="w-3.5 h-3.5" />
                        {edu.location}
                      </span>
                    </div>
                    {edu.details && (
                      <p className="mt-3 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                        {edu.details}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default EducationSection;
