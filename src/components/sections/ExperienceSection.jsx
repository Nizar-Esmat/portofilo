import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';
import FadeIn from '../ui/FadeIn';
import ParallaxBackdrop from '../ui/ParallaxBackdrop';
import StaggerGroup from '../ui/StaggerGroup';
import StaggerItem from '../ui/StaggerItem';
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
      className="section-screen section-padding bg-white/60 dark:bg-ink-900/40 border-y border-ink-100 dark:border-ink-800/60"
    >
      <ParallaxBackdrop />
      <Container>
        <FadeIn>
          <SectionTitle
            title="Experience"
            subtitle="My professional journey and the roles I've held."
          />
        </FadeIn>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-1.5 top-3 bottom-0 w-px bg-gradient-to-b from-teal-500 via-teal-300 dark:via-teal-700 to-transparent" />

          <StaggerGroup staggerDelay={0.12}>
            {sorted.map((exp, i) => (
              <StaggerItem key={`${exp.company}-${i}`}>
                <ExperienceCard experience={exp} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </Container>
    </section>
  );
};

export default ExperienceSection;
