import { createThemeContract } from "@vanilla-extract/css";

/**
 * Transition and animation tokens.
 */
export const transitions = createThemeContract({
  duration: {
    instant: null,
    fast: null,
    normal: null,
    slow: null,
    slower: null,
  },
  easing: {
    standard: null, // Deceleration curve
    emphasized: null, // emphasized easing
    decelerate: null, // Exit animations
    accelerate: null, // Enter animations
    linear: null,
  },
});
