import { useState } from 'react';
import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';
import FadeIn from '../ui/FadeIn';
import ParallaxBackdrop from '../ui/ParallaxBackdrop';
import StaggerGroup from '../ui/StaggerGroup';
import StaggerItem from '../ui/StaggerItem';
import FilterTabs from '../ui/FilterTabs';
import SkillCard from '../cards/SkillCard';

const SkillsSection = ({ skills }) => {
  const ALL = 'All';
  const tabs = [ALL, ...skills.map(s => s.category)];
  const [active, setActive] = useState(ALL);

  if (!skills || skills.length === 0) return null;

  const visible =
    active === ALL ? skills : skills.filter(s => s.category === active);

  return (
    <section id="skills" className="section-screen section-padding">
      <ParallaxBackdrop />
      <Container>
        <FadeIn>
          <SectionTitle
            title="Skills & Technologies"
            subtitle="Grouped by category — click a tab to filter."
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mb-12">
            <FilterTabs tabs={tabs} active={active} onChange={setActive} />
          </div>
        </FadeIn>

        <StaggerGroup className="space-y-10 max-w-4xl mx-auto" staggerDelay={0.1}>
          {visible.map(group => (
            <StaggerItem key={group.category}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4 pl-1">
                {group.category}
              </h3>
              <StaggerGroup className="flex flex-wrap gap-2.5" staggerDelay={0.03}>
                {group.items.map(skill => (
                  <StaggerItem key={skill}>
                    <SkillCard skill={skill} />
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
};

export default SkillsSection;
