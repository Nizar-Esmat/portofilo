import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';
import FadeIn from '../ui/FadeIn';

const AboutSection = ({ summary }) => {
  if (!summary) return null;

  return (
    <section
      id="about"
      className="section-padding bg-white/60 dark:bg-slate-900/40 border-y border-slate-100 dark:border-slate-800/60"
    >
      <Container>
        <FadeIn>
          <SectionTitle title="About Me" />
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="max-w-3xl mx-auto">
            <p className="text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300 text-center">
              {summary}
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};

export default AboutSection;
