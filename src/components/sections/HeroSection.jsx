import { motion } from 'framer-motion';
import { HiArrowDown, HiEnvelope, HiMapPin } from 'react-icons/hi2';
import { HiArrowDownTray } from 'react-icons/hi2';
import Button from '../ui/Button';
import SocialLinks from '../ui/SocialLinks';
import { scrollToSection } from '../../utils/helpers';

const item = delay => ({
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] },
  },
});

const HeroSection = ({ profile }) => (
  <section
    id="hero"
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    {/* Background glow */}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-indigo-600/10 dark:bg-indigo-600/8 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-32 w-64 h-64 bg-purple-600/8 dark:bg-purple-600/6 rounded-full blur-2xl" />
    </div>

    <div className="pt-24 pb-20 px-4 text-center max-w-3xl mx-auto">
      {/* Status indicator */}
      <motion.div
        variants={item(0)}
        initial="hidden"
        animate="show"
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 text-xs font-medium mb-8"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        Open to opportunities
      </motion.div>

      {/* Name */}
      <motion.h1
        variants={item(0.1)}
        initial="hidden"
        animate="show"
        className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display text-slate-900 dark:text-white leading-[1.1] mb-5"
      >
        {profile.name.split(' ').slice(0, 2).join(' ')}
        {' '}
        <span className="gradient-text">
          {profile.name.split(' ').slice(2).join(' ')}
        </span>
      </motion.h1>

      {/* Title */}
      <motion.p
        variants={item(0.2)}
        initial="hidden"
        animate="show"
        className="text-xl sm:text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4"
      >
        {profile.title}
      </motion.p>

      {/* Tagline */}
      <motion.p
        variants={item(0.3)}
        initial="hidden"
        animate="show"
        className="text-base sm:text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl mx-auto mb-3"
      >
        {profile.tagline}
      </motion.p>

      {/* Location */}
      <motion.p
        variants={item(0.35)}
        initial="hidden"
        animate="show"
        className="inline-flex items-center gap-1.5 text-sm text-slate-400 dark:text-slate-500 mb-10"
      >
        <HiMapPin className="w-4 h-4" />
        {profile.location}
      </motion.p>

      {/* CTA buttons */}
      <motion.div
        variants={item(0.42)}
        initial="hidden"
        animate="show"
        className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10"
      >
        <Button
          variant="primary"
          size="lg"
          onClick={() => scrollToSection('contact')}
        >
          <HiEnvelope className="w-4 h-4" />
          Get in Touch
        </Button>
        <Button
          variant="secondary"
          size="lg"
          href={profile.resumeUrl}
          target="_blank"
        >
          <HiArrowDownTray className="w-4 h-4" />
          Download Resume
        </Button>
      </motion.div>

      {/* Socials */}
      <motion.div
        variants={item(0.5)}
        initial="hidden"
        animate="show"
        className="flex justify-center mb-20"
      >
        <SocialLinks socials={profile.socials} />
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.75 }}
        onClick={() => scrollToSection('about')}
        aria-label="Scroll to about section"
        className="inline-flex flex-col items-center gap-1.5 text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
      >
        <span className="text-xs font-medium tracking-widest uppercase">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <HiArrowDown className="w-4 h-4" />
        </motion.span>
      </motion.button>
    </div>
  </section>
);

export default HeroSection;
