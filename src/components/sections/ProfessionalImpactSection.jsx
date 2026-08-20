import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';
import FadeIn from '../ui/FadeIn';
import ParallaxBackdrop from '../ui/ParallaxBackdrop';
import StaggerGroup from '../ui/StaggerGroup';
import StaggerItem from '../ui/StaggerItem';
import HighlightCard from '../cards/HighlightCard';

const ProfessionalImpactSection = ({ highlights }) => {
  if (!highlights || highlights.length === 0) return null;

  return (
    <section id="impact" className="section-screen section-padding">
      <ParallaxBackdrop />
      <Container>
        <FadeIn>
          <SectionTitle
            title="Professional Impact"
            subtitle="Production projects I've engineered and shipped at Opream."
          />
        </FadeIn>
        <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
          {highlights.map(h => (
            <StaggerItem key={h.title}>
              <HighlightCard highlight={h} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
};

export default ProfessionalImpactSection;
