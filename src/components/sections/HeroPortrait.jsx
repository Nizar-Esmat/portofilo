import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import TiltCard from '../ui/TiltCard';

/**
 * The hero's centerpiece: a real, undistorted <img> (never a 3D texture, to
 * keep lighting/tone-mapping from touching the face) framed as a glowing
 * orb. The halo fades out as the hero scrolls past, while the shared
 * UniverseBackground scene (mounted at the app root) continues underneath.
 */
const HeroPortrait = ({ profile }) => {
  const ref = useRef(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative mx-auto mb-8 w-40 h-40 sm:w-52 sm:h-52"
    >
      {/* Holographic glow ring — scroll-faded outer wrapper, pulsing inner layer */}
      <motion.div
        aria-hidden
        style={{ opacity: reducedMotion ? 0.6 : glowOpacity }}
        className="absolute -inset-3 rounded-full"
      >
        <motion.div
          animate={reducedMotion ? undefined : { opacity: [0.5, 0.85, 0.5] }}
          transition={reducedMotion ? undefined : { duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-full h-full rounded-full bg-gradient-to-tr from-teal-500/50 via-sage-400/30 to-transparent blur-xl"
        />
      </motion.div>
      <div
        aria-hidden
        className="absolute -inset-1 rounded-full border border-teal-400/40 dark:border-teal-300/30"
      />

      <TiltCard className="relative block w-full h-full" max={8} scale={1.02}>
        <div className="w-full h-full rounded-full ring-4 ring-white/70 dark:ring-ink-800/70 shadow-2xl overflow-hidden">
          <img
            src="/me.jpeg"
            alt={profile.name}
            loading="eager"
            className="w-full h-full object-cover"
          />
        </div>
      </TiltCard>
    </motion.div>
  );
};

export default HeroPortrait;
