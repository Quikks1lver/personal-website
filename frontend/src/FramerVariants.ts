/**
 * Variant for framer motion prop
 */
export const pageVariant = {
  initial: {
    opacity: 0,
    y: "-100%",
    scale: 0.8,
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    y: "-100%",
    scale: 1.2,
  },
};

/**
 * For transition framer motion prop
 */
export const pageTransition = {
  type: "Inertia",
  ease: "anticipate",
  duration: 0.55,
};
