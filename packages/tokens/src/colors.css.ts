import { createGlobalThemeContract } from "@vanilla-extract/css";

const semanticGroup = (
  name: string,
): {
  main: string;
  onMain: string;
  container: string;
  onContainer: string;
  hover: string;
  active: string;
  subtle: string;
} => ({
  main: `yd-color-${name}`,
  onMain: `yd-color-on-${name}`,
  container: `yd-color-${name}-container`,
  onContainer: `yd-color-on-${name}-container`,
  hover: `yd-color-${name}-hover`,
  active: `yd-color-${name}-active`,
  subtle: `yd-color-${name}-subtle`,
});

export const colors = createGlobalThemeContract({
  // Semantic Brand Colors (Seed-based)
  brand: {
    primary: semanticGroup("primary"),
    secondary: semanticGroup("secondary"),
    tertiary: semanticGroup("tertiary"),
    danger: semanticGroup("danger"),
    success: semanticGroup("success"),
    warning: semanticGroup("warning"),
    info: semanticGroup("info"),
  },

  // Text Tokens
  text: {
    primary: "yd-color-text-primary",
    secondary: "yd-color-text-secondary",
    tertiary: "yd-color-text-tertiary",
    disabled: "yd-color-text-disabled",
    onPrimary: "yd-color-text-on-primary",
    onColor: "yd-color-text-on-color",
    inverse: "yd-color-text-inverse",
  },

  // Background Tokens
  bg: {
    body: "yd-color-bg-body",
    surface: "yd-color-bg-surface",
    surfaceHover: "yd-color-bg-surface-hover",
    surfaceActive: "yd-color-bg-surface-active",
    surfaceRaised: "yd-color-bg-surface-raised",
    surfaceOverlay: "yd-color-bg-surface-overlay",
    canvas: "yd-color-bg-canvas",
    subtle: "yd-color-bg-subtle",
    disabled: "yd-color-bg-disabled",
  },

  // Border Tokens
  border: {
    subtle: "yd-color-border-subtle",
    default: "yd-color-border-default",
    strong: "yd-color-border-strong",
    interactive: "yd-color-border-interactive",
    disabled: "yd-color-border-disabled",
  },

  // Interaction Tokens
  interaction: {
    focusRing: "yd-color-focus-ring",
    overlay: "yd-color-overlay",
  },
});
