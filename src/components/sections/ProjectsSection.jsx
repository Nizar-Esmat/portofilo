import { useState } from 'react';
import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';
import FadeIn from '../ui/FadeIn';
import FilterTabs from '../ui/FilterTabs';
import ProjectCard from '../cards/ProjectCard';

const TABS = ['All', 'Featured', 'Personal', 'Team'];

const ProjectsSection = ({ projects }) => {
  const [filter, setFilter] = useState('All');

  if (!projects || projects.length === 0) return null;

  const filtered = projects.filter(p => {
    if (filter === 'All') return true;
    if (filter === 'Featured') return p.featured;
    return p.type === filter;
  });

  return (
    <section
      id="projects"
      className="section-padding bg-white/60 dark:bg-slate-900/40 border-y border-slate-100 dark:border-slate-800/60"
    >
      <Container>
        <FadeIn>
          <SectionTitle
            title="Projects"
            subtitle="Things I've built — from side projects to team collaborations."
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mb-10">
            <FilterTabs tabs={TABS} active={filter} onChange={setFilter} />
          </div>
        </FadeIn>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project, i) => (
              <FadeIn key={project.title} delay={i * 0.08}>
                <ProjectCard project={project} />
              </FadeIn>
            ))}
          </div>
        ) : (
          <p className="text-center text-slate-400 dark:text-slate-500 py-16 text-sm">
            No projects match this filter.
          </p>
        )}
      </Container>
    </section>
  );
};

export default ProjectsSection;
