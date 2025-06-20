// Animation configurations for consistent card animations across the site

export const transitions = {
  gentle: {
    duration: 0.2,
    ease: [0.25, 0.1, 0.25, 1] as const, // Gentle easing curve
  },
  quick: {
    duration: 0.3,
    ease: [0.25, 0.1, 0.25, 1] as const,
  },
};

export const animations = {
  fadeInUp: {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: transitions.gentle,
    },
  },
  
  staggerContainer: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0,
      },
    },
  },
  
  scaleIn: {
    hidden: {
      opacity: 0,
      scale: 0.95,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: transitions.gentle,
    },
  },
};

export default animations; 