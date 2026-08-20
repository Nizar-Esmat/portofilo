import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045 } },
};

const wordVariant = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] } },
};

const RevealText = ({ text, className = '', delay = 0, once = true, margin = '-80px' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin });
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <span className={className}>{text}</span>;
  }

  const words = text.split(' ');

  return (
    <motion.span
      ref={ref}
      className={className}
      variants={container}
      initial="hidden"
      animate={isInView ? 'show' : 'hidden'}
      transition={{ delayChildren: delay }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <motion.span key={i} variants={wordVariant} aria-hidden="true" className="inline-block">
          {word}
          {i !== words.length - 1 ? ' ' : ''}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default RevealText;
