export const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];
export const EASE_OUT_QUART: [number, number, number, number] = [0.25, 1, 0.5, 1];

export const TRANSITION_EXPO = {
  duration: 0.8,
  ease: EASE_OUT_EXPO,
};

export const TRANSITION_SLOW_EXPO = {
  duration: 1.2,
  ease: EASE_OUT_EXPO,
};

export const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

export const itemRevealUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: TRANSITION_EXPO,
  },
};

export const itemRevealLeft = {
  hidden: { opacity: 0, x: 24 },
  show: {
    opacity: 1,
    x: 0,
    transition: TRANSITION_EXPO,
  },
};

export const itemRevealRight = {
  hidden: { opacity: 0, x: -24 },
  show: {
    opacity: 1,
    x: 0,
    transition: TRANSITION_EXPO,
  },
};
