export const transitions = {
  smooth: {
    type: "spring",
    stiffness: 100,
    damping: 15,
    mass: 1,
  },
  fast: {
    type: "spring",
    stiffness: 200,
    damping: 20,
    mass: 0.5,
  },
  bounce: {
    type: "spring",
    stiffness: 300,
    damping: 15,
    mass: 0.8,
  },
  // For simple opacity/scale transitions
  simple: {
    duration: 0.3,
    ease: "easeInOut",
  },
} as const; 