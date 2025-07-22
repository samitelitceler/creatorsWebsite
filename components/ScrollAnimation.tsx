import { motion } from "framer-motion";
import { ReactNode, memo } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
}

const ScrollAnimation = memo(({ children, className }: ScrollAnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
});

ScrollAnimation.displayName = 'ScrollAnimation';

export default ScrollAnimation;