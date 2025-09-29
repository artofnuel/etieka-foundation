"use client";
import { motion } from "framer-motion";

export const MotionSlideIn = ({ children, direction = "right", ...props }) => {
  // Slide in from left, right, top, or bottom
  const getInitial = () => {
    switch (direction) {
      case "left":
        return { x: -100, opacity: 0 };
      case "right":
        return { x: 100, opacity: 0 };
      case "top":
        return { y: -100, opacity: 0 };
      case "bottom":
        return { y: 100, opacity: 0 };
      default:
        return { x: 100, opacity: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      exit={getInitial()}
      transition={{ type: "spring", stiffness: 60, damping: 18 }}
      {...props}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
};
