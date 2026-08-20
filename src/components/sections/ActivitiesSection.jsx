import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';
import FadeIn from '../ui/FadeIn';
import ParallaxBackdrop from '../ui/ParallaxBackdrop';
import StaggerGroup from '../ui/StaggerGroup';
import StaggerItem from '../ui/StaggerItem';
import ActivityCard from '../cards/ActivityCard';

const ActivitiesSection = ({ activities }) => {
  if (!activities || activities.length === 0) return null;

  return (
    <section id="activities" className="section-screen section-padding">
      <ParallaxBackdrop />
      <Container>
        <FadeIn>
          <SectionTitle
            title="Activities"
            subtitle="Competitive programming and community involvement."
          />
        </FadeIn>
        <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto" staggerDelay={0.08}>
          {activities.map(activity => (
            <StaggerItem key={activity.title}>
              <ActivityCard activity={activity} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
};

export default ActivitiesSection;
