import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';
import FadeIn from '../ui/FadeIn';
import ParallaxBackdrop from '../ui/ParallaxBackdrop';

const AboutSection = ({ summary }) => {
  if (!summary) return null;

  return (
    <section
      id="about"
      className="section-screen section-padding bg-white/60 dark:bg-ink-900/40 border-y border-ink-100 dark:border-ink-800/60"
    >
      <ParallaxBackdrop />
      <Container>
        <FadeIn>
          <SectionTitle title="About Me" />
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="max-w-3xl mx-auto">
            <p className="text-base sm:text-lg leading-relaxed text-ink-600 dark:text-ink-300 text-center">
              {summary}
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};

export default AboutSection;
