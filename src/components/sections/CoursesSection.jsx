import { HiBookOpen } from 'react-icons/hi2';
import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';
import FadeIn from '../ui/FadeIn';

const CoursesSection = ({ courses }) => {
  if (!courses || courses.length === 0) return null;

  return (
    <section id="courses" className="section-padding">
      <Container>
        <FadeIn>
          <SectionTitle
            title="Continuous Learning"
            subtitle="Courses and self-study that keep my skills sharp."
          />
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {courses.map((course, i) => (
            <FadeIn key={course.title} delay={i * 0.07}>
              <div className="card-base card-hover p-5 flex items-start gap-3.5">
                <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-indigo-100 dark:bg-indigo-950/70 flex items-center justify-center">
                  <HiBookOpen className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white leading-snug">
                    {course.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {course.provider}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CoursesSection;
