import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

const ParallaxBackdrop = ({ className = '', range = 60 }) => {
  const ref = useRef(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [-range, range]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`-z-10 pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <motion.div
        style={{ y: reducedMotion ? 0 : y }}
        className="absolute -top-24 left-1/2 -tranink-x-1/2 w-[700px] h-[420px] bg-teal-500/10 dark:bg-teal-500/[0.06] rounded-full blur-3xl"
      />
    </div>
  );
};

export default ParallaxBackdrop;
