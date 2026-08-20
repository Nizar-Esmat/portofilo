import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { useHoverCapability } from '../../hooks/useHoverCapability';

const TiltCard = ({ children, className = '', max = 10, scale = 1.03 }) => {
  const ref = useRef(null);
  const canHover = useHoverCapability();
  const reducedMotion = useReducedMotion();
  const active = canHover && !reducedMotion;

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const scaleMv = useMotionValue(1);
  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 25, mass: 0.5 });
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 25, mass: 0.5 });
  const springScale = useSpring(scaleMv, { stiffness: 300, damping: 25 });

  const handleMouseMove = e => {
    if (!active || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rotateY.set((px - 0.5) * max * 2);
    rotateX.set(-(py - 0.5) * max * 2);
    scaleMv.set(scale);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    scaleMv.set(1);
  };

  if (!active) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        scale: springScale,
        transformPerspective: 800,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default TiltCard;
