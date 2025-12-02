import { createThemeContract } from "@vanilla-extract/css";

/**
 * Z-index layering system for predictable stacking.
 * Semantic names for common UI layers.
 */
export const zIndex = createThemeContract({
  base: null,
  dropdown: null,
  sticky: null,
  fixed: null,
  overlay: null,
  modal: null,
  popover: null,
  tooltip: null,
  toast: null,
});
