import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';
import FadeIn from '../ui/FadeIn';
import HighlightCard from '../cards/HighlightCard';

const ProfessionalImpactSection = ({ highlights }) => {
  if (!highlights || highlights.length === 0) return null;

  return (
    <section id="impact" className="section-padding">
      <Container>
        <FadeIn>
          <SectionTitle
            title="Professional Impact"
            subtitle="Production projects I've engineered and shipped at Opream."
          />
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {highlights.map((h, i) => (
            <FadeIn key={h.title} delay={i * 0.08}>
              <HighlightCard highlight={h} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProfessionalImpactSection;
