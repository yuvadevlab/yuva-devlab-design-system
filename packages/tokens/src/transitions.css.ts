import { createGlobalTheme, createThemeContract } from "@vanilla-extract/css";

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

createGlobalTheme(":root", transitions, {
  duration: {
    instant: "0ms",
    fast: "100ms",
    normal: "200ms",
    slow: "300ms",
    slower: "500ms",
  },
  easing: {
    standard: "cubic-bezier(0.4, 0.0, 0.2, 1)", // Deceleration
    emphasized: "cubic-bezier(0.2, 0.0, 0, 1)", // emphasized
    decelerate: "cubic-bezier(0.0, 0.0, 0.2, 1)", // Exit
    accelerate: "cubic-bezier(0.4, 0.0, 1, 1)", // Enter
    linear: "linear",
  },
});
