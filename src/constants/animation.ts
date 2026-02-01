export const ANIMATION_CONFIG = {
  // Realistic coin flip physics - more rotations for unpredictability
  minRotations: 6,
  maxRotations: 10,

  // Duration in milliseconds - realistic toss time
  duration: 3000,

  // Spring physics configuration for natural deceleration
  springConfig: {
    damping: 20,
    mass: 1,
    stiffness: 80,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    energyThreshold: 0.01,
  },

  // 3D perspective for realistic depth
  perspective: 1200,

  // Wobble effect for more realistic physics
  wobbleIntensity: 15, // degrees of wobble
} as const;

export const COIN_SIZE = 260;
export const BORDER_WIDTH = 3;
