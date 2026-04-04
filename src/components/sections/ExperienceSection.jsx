import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';
import FadeIn from '../ui/FadeIn';
import ExperienceCard from '../cards/ExperienceCard';

const ExperienceSection = ({ experience }) => {
  if (!experience || experience.length === 0) return null;

  // Keep original order from JSON (most recent first by convention)
  const sorted = [...experience].sort((a, b) => {
    if (a.period.includes('Present')) return -1;
    if (b.period.includes('Present')) return 1;
    return 0;
  });

  return (
    <section
      id="experience"
      className="section-padding bg-white/60 dark:bg-slate-900/40 border-y border-slate-100 dark:border-slate-800/60"
    >
      <Container>
        <FadeIn>
          <SectionTitle
            title="Experience"
            subtitle="My professional journey and the roles I've held."
          />
        </FadeIn>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-1.5 top-3 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-indigo-300 dark:via-indigo-700 to-transparent" />

          {sorted.map((exp, i) => (
            <FadeIn key={`${exp.company}-${i}`} delay={i * 0.1}>
              <ExperienceCard experience={exp} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ExperienceSection;
