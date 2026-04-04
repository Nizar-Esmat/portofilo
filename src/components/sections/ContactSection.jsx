import { HiEnvelope, HiPhone, HiMapPin } from 'react-icons/hi2';
import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';
import FadeIn from '../ui/FadeIn';
import SocialLinks from '../ui/SocialLinks';
import Button from '../ui/Button';

const ContactSection = ({ profile }) => (
  <section
    id="contact"
    className="section-padding bg-white/60 dark:bg-slate-900/40 border-t border-slate-100 dark:border-slate-800/60"
  >
    <Container>
      <FadeIn>
        <SectionTitle
          title="Get in Touch"
          subtitle="Open to opportunities, collaborations, and interesting conversations."
        />
      </FadeIn>

      <FadeIn delay={0.12}>
        <div className="max-w-md mx-auto">
          <div className="card-base p-8 space-y-6">
            {/* Contact details */}
            <div className="space-y-3.5">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 text-sm group"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-950/70 flex items-center justify-center transition-colors duration-200">
                  <HiEnvelope className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200" />
                </div>
                {profile.email}
              </a>

              <a
                href={`tel:${profile.phone}`}
                className="flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 text-sm group"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-950/70 flex items-center justify-center transition-colors duration-200">
                  <HiPhone className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200" />
                </div>
                {profile.phone}
              </a>

              <p className="flex items-center gap-3 text-slate-500 dark:text-slate-400 text-sm">
                <span className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  <HiMapPin className="w-4 h-4 text-slate-400" />
                </span>
                {profile.location}
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-slate-100 dark:border-slate-800" />

            {/* Social links */}
            <div className="flex justify-center">
              <SocialLinks socials={profile.socials} />
            </div>

            {/* CTA */}
            <Button
              variant="primary"
              size="lg"
              href={`mailto:${profile.email}`}
              className="w-full"
            >
              <HiEnvelope className="w-4 h-4" />
              Send an Email
            </Button>
          </div>
        </div>
      </FadeIn>
    </Container>
  </section>
);

export default ContactSection;
