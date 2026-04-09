import { useTheme } from './hooks/useTheme';
import data from './data/portfolioData.json';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/ui/ScrollProgress';
import ScrollToTop from './components/ui/ScrollToTop';

import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ProfessionalImpactSection from './components/sections/ProfessionalImpactSection';
import ExperienceSection from './components/sections/ExperienceSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ActivitiesSection from './components/sections/ActivitiesSection';
import EducationSection from './components/sections/EducationSection';
import CoursesSection from './components/sections/CoursesSection';
import ContactSection from './components/sections/ContactSection';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <ScrollProgress />
      <Navbar profile={data.profile} theme={theme} toggleTheme={toggleTheme} />

      <main>
        <HeroSection profile={data.profile} />
        <AboutSection summary={data.summary} />
        <ProfessionalImpactSection highlights={data.professionalHighlights} />
        <ExperienceSection experience={data.experience} />
        <SkillsSection skills={data.skills} />
        <ProjectsSection projects={data.projects} />
        <ActivitiesSection activities={data.activities} />
        <EducationSection education={data.education} />
        <CoursesSection courses={data.courses} />
        <ContactSection profile={data.profile} />
      </main>

      <Footer profile={data.profile} />
      <ScrollToTop />
    </div>
  );
}

export default App;

