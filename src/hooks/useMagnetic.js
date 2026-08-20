import { useRef } from 'react';
import { useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { useHoverCapability } from './useHoverCapability';

export function useMagnetic({ strength = 0.35, range = 60 } = {}) {
  const ref = useRef(null);
  const canHover = useHoverCapability();
  const reducedMotion = useReducedMotion();
  const active = canHover && !reducedMotion;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.5 });

  const onMouseMove = e => {
    if (!active || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    if (Math.hypot(dx, dy) > range) {
      x.set(0);
      y.set(0);
      return;
    }
    x.set(dx * strength);
    y.set(dy * strength);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  if (!active) {
    return { ref, style: undefined, onMouseMove: undefined, onMouseLeave: undefined };
  }

  return { ref, style: { x: springX, y: springY }, onMouseMove, onMouseLeave };
}
