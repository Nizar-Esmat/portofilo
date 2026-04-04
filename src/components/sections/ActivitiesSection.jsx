import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';
import FadeIn from '../ui/FadeIn';
import ActivityCard from '../cards/ActivityCard';

const ActivitiesSection = ({ activities }) => {
  if (!activities || activities.length === 0) return null;

  return (
    <section id="activities" className="section-padding">
      <Container>
        <FadeIn>
          <SectionTitle
            title="Activities"
            subtitle="Competitive programming and community involvement."
          />
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {activities.map((activity, i) => (
            <FadeIn key={activity.title} delay={i * 0.08}>
              <ActivityCard activity={activity} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ActivitiesSection;
