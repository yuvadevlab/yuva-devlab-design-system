import { createGlobalTheme, createThemeContract } from "@vanilla-extract/css";

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

createGlobalTheme(":root", zIndex, {
  base: "0",
  dropdown: "1000",
  sticky: "1100",
  fixed: "1200",
  overlay: "1300",
  modal: "1400",
  popover: "1500",
  tooltip: "1600",
  toast: "1700",
});
