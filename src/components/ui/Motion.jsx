/**
 * Shared motion helpers — wrap content with home-page presets.
 */
import { motion } from 'framer-motion';
import {
  scrollReveal,
  scrollRevealSoft,
  staggerContainer,
  staggerContainerMount,
  staggerItem,
  staggerItemMount,
} from '../motion/motionPresets';

export function ScrollReveal({ soft = false, className = '', children, ...rest }) {
  const preset = soft ? scrollRevealSoft : scrollReveal;
  return (
    <motion.div className={className} {...preset} {...rest}>
      {children}
    </motion.div>
  );
}

export function Stagger({ mount = false, className = '', children, ...rest }) {
  const preset = mount ? staggerContainerMount : staggerContainer;
  return (
    <motion.div className={className} {...preset} {...rest}>
      {children}
    </motion.div>
  );
}

export function StaggerItem({ mount = false, className = '', as: Tag = motion.div, children, ...rest }) {
  const preset = mount ? staggerItemMount : staggerItem;
  return (
    <Tag className={className} {...preset} {...rest}>
      {children}
    </Tag>
  );
}

export {
  scrollReveal,
  scrollRevealSoft,
  staggerContainer,
  staggerContainerMount,
  staggerItem,
  staggerItemMount,
};
