import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

const containerVariant = staggerDelay => ({
  hidden: {},
  show: { transition: { staggerChildren: staggerDelay } },
});

const StaggerGroup = ({ children, className = '', staggerDelay = 0.08, once = true, margin = '-80px' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin });
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={reducedMotion ? undefined : containerVariant(staggerDelay)}
      initial={reducedMotion ? false : 'hidden'}
      animate={reducedMotion ? false : isInView ? 'show' : 'hidden'}
    >
      {children}
    </motion.div>
  );
};

export default StaggerGroup;
