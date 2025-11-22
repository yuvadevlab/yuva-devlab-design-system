import * as stylex from "@stylexjs/stylex";

/**
 * Spacing tokens also use CSS variables so they’re themeable if needed.
 */
export const spacing = stylex.defineVars({
  xs: "var(--yd-space-xs)",
  sm: "var(--yd-space-sm)",
  md: "var(--yd-space-md)",
  lg: "var(--yd-space-lg)",
  xl: "var(--yd-space-xl)",
});
