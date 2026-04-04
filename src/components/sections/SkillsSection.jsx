import { useState } from 'react';
import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';
import FadeIn from '../ui/FadeIn';
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
    <section id="skills" className="section-padding">
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

        <div className="space-y-10 max-w-4xl mx-auto">
          {visible.map((group, gi) => (
            <FadeIn key={group.category} delay={gi * 0.07}>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4 pl-1">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {group.items.map(skill => (
                    <SkillCard key={skill} skill={skill} />
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SkillsSection;
