import { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.55, ease: "easeOut" } },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -44 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 44 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
};

export const staggerFast: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.065 } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.87 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};
