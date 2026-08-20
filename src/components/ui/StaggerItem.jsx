import { motion } from 'framer-motion';

const offset = {
  up: { y: 28 },
  down: { y: -28 },
  left: { x: 28 },
  right: { x: -28 },
  none: {},
};

const itemVariant = direction => ({
  hidden: { opacity: 0, ...offset[direction] },
  show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] } },
});

const StaggerItem = ({ children, className = '', direction = 'up' }) => (
  <motion.div className={className} variants={itemVariant(direction)}>
    {children}
  </motion.div>
);

export default StaggerItem;
