export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const; // Hero
export const EASE_OUT_QUART = [0.25, 1, 0.5, 1] as const; // Section
export const EASE_OUT_CUBIC = [0.33, 1, 0.68, 1] as const; // Card
export const EASE_OUT_QUAD = [0.25, 0.46, 0.45, 0.94] as const; // Button / Interactive

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
      staggerChildren: 0.09, // Premium 90ms stagger
    },
  },
};

// Section reveals (Quart Easing)
export const itemRevealUp = {
  hidden: { opacity: 0, y: "var(--reveal-y)" },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: EASE_OUT_QUART,
    },
  },
};

// Card reveals (Cubic Easing)
export const cardRevealUp = {
  hidden: { opacity: 0, y: "var(--reveal-y)" },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: EASE_OUT_CUBIC,
    },
  },
};

export const itemRevealLeft = {
  hidden: { opacity: 0, x: 24 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: EASE_OUT_QUART,
    },
  },
};

export const itemRevealRight = {
  hidden: { opacity: 0, x: -24 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: EASE_OUT_QUART,
    },
  },
};

