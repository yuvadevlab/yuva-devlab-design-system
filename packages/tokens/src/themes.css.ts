import { createGlobalTheme, createTheme } from "@vanilla-extract/css";

import { breakpoints } from "./breakpoints.css";
import { colors } from "./colors.css";
import { palettes } from "./palettes.css";
import { radii } from "./radii.css";
import { shadows } from "./shadows.css";
import { spacing } from "./spacing.css";
import { transitions } from "./transitions.css";
import { typography } from "./typography.css";
import { zIndex } from "./zindex.css";

/**
 * Light Theme Palettes (Internal usage)
 * We keep this as scoped classes if needed, or global.
 * For now let's keep palettes as scoped or maybe just regular objects if not used directly for styling?
 * Actually palettes are used by themeUtils logic which was deleted.
 * But they are implementation details of the theme.
 * Let's keep them as createGlobalTheme for simplicity if they are contracts?
 * palettes.css is createThemeContract? Assuming yes.
 */
// Applying palettes globally
createGlobalTheme(":root", palettes, {
  primary: {
    0: "#000000",
    10: "#001a41",
    20: "#002f65",
    30: "#004494",
    40: "#1a73e8",
    50: "#4285f4",
    60: "#669df6",
    70: "#8ab4f8",
    80: "#aecbfa",
    90: "#d2e3fc",
    95: "#e8f0fe",
    99: "#fafbff",
    100: "#ffffff",
  },
  secondary: {
    0: "#000000",
    10: "#1d192b",
    20: "#332d41",
    30: "#4a4458",
    40: "#625b71",
    50: "#7a7289",
    60: "#958da5",
    70: "#b0a7c0",
    80: "#ccc2dc",
    90: "#e8def8",
    95: "#f6edff",
    99: "#fffbfe",
    100: "#ffffff",
  },
  tertiary: {
    0: "#000000",
    10: "#31111d",
    20: "#492532",
    30: "#633b48",
    40: "#7d5260",
    50: "#986977",
    60: "#b58392",
    70: "#d29dac",
    80: "#efb8c8",
    90: "#ffd8e4",
    95: "#ffecf1",
    99: "#fffbfa",
    100: "#ffffff",
  },
  error: {
    0: "#000000",
    10: "#410e0b",
    20: "#601410",
    30: "#8c1d18",
    40: "#b3261e",
    50: "#dc362e",
    60: "#e46962",
    70: "#ec928e",
    80: "#f2b8b5",
    90: "#f9dedc",
    95: "#fceeee",
    99: "#fffbf9",
    100: "#ffffff",
  },
  neutral: {
    0: "#000000",
    10: "#1c1b1f",
    20: "#313033",
    30: "#484649",
    40: "#605d62",
    50: "#787579",
    60: "#939094",
    70: "#aeaaae",
    80: "#c9c5ca",
    90: "#e6e1e5",
    95: "#f4eff4",
    99: "#fffbfe",
    100: "#ffffff",
  },
  neutralVariant: {
    0: "#000000",
    10: "#1d1a22",
    20: "#322f37",
    30: "#49454f",
    40: "#605d66",
    50: "#79747e",
    60: "#938f99",
    70: "#aea9b4",
    80: "#cac4d0",
    90: "#e7e0ec",
    95: "#f5eefa",
    99: "#fffbfe",
    100: "#ffffff",
  },
});

export const lightPalettes = "light-palettes"; // Placeholder for API compat if needed

/**
 * Dark Theme Palettes
 * (Keeping as createTheme because we might want to toggle this class on body)
 * IF user wants dark mode helper, they add this class.
 */
export const darkPalettes = createTheme(palettes, {
  // Dark theme uses the same palette values
  // The difference is in how semantic tokens map to these values
  primary: {
    0: "#000000",
    10: "#001a41",
    20: "#002f65",
    30: "#004494",
    40: "#1a73e8",
    50: "#4285f4",
    60: "#669df6",
    70: "#8ab4f8",
    80: "#aecbfa",
    90: "#d2e3fc",
    95: "#e8f0fe",
    99: "#fafbff",
    100: "#ffffff",
  },
  secondary: {
    0: "#000000",
    10: "#1d192b",
    20: "#332d41",
    30: "#4a4458",
    40: "#625b71",
    50: "#7a7289",
    60: "#958da5",
    70: "#b0a7c0",
    80: "#ccc2dc",
    90: "#e8def8",
    95: "#f6edff",
    99: "#fffbfe",
    100: "#ffffff",
  },
  tertiary: {
    0: "#000000",
    10: "#31111d",
    20: "#492532",
    30: "#633b48",
    40: "#7d5260",
    50: "#986977",
    60: "#b58392",
    70: "#d29dac",
    80: "#efb8c8",
    90: "#ffd8e4",
    95: "#ffecf1",
    99: "#fffbfa",
    100: "#ffffff",
  },
  error: {
    0: "#000000",
    10: "#410e0b",
    20: "#601410",
    30: "#8c1d18",
    40: "#b3261e",
    50: "#dc362e",
    60: "#e46962",
    70: "#ec928e",
    80: "#f2b8b5",
    90: "#f9dedc",
    95: "#fceeee",
    99: "#fffbf9",
    100: "#ffffff",
  },
  neutral: {
    0: "#000000",
    10: "#1c1b1f",
    20: "#313033",
    30: "#484649",
    40: "#605d62",
    50: "#787579",
    60: "#939094",
    70: "#aeaaae",
    80: "#c9c5ca",
    90: "#e6e1e5",
    95: "#f4eff4",
    99: "#fffbfe",
    100: "#ffffff",
  },
  neutralVariant: {
    0: "#000000",
    10: "#1d1a22",
    20: "#322f37",
    30: "#49454f",
    40: "#605d66",
    50: "#79747e",
    60: "#938f99",
    70: "#aea9b4",
    80: "#cac4d0",
    90: "#e7e0ec",
    95: "#f5eefa",
    99: "#fffbfe",
    100: "#ffffff",
  },
});

/**
 * ============================================================================
 * SEMANTIC COLOR THEMES
 * ============================================================================
 * Developer-friendly API that maps to palette values
 */

/**
 * Light Theme - Semantic Colors
 * Maps semantic tokens to appropriate palette tones
 */
createGlobalTheme(":root", colors, {
  // Brand / Primary
  accentPrimary: "#1a73e8", // primary[40]
  accentPrimaryHover: "#004494", // primary[30]
  accentPrimaryActive: "#002f65", // primary[20]
  accentPrimarySubtle: "#e8f0fe", // primary[95]

  // Danger / Error
  accentDanger: "#b3261e", // error[40]
  accentDangerHover: "#8c1d18", // error[30]
  accentDangerActive: "#601410", // error[20]
  accentDangerSubtle: "#f9dedc", // error[90]

  // Success - Using green tones
  accentSuccess: "#1e8e3e",
  accentSuccessHover: "#188038",
  accentSuccessActive: "#137333",
  accentSuccessSubtle: "#e6f4ea",

  // Warning - Using amber tones
  accentWarning: "#f9ab00",
  accentWarningHover: "#f29900",
  accentWarningActive: "#ea8600",
  accentWarningSubtle: "#fef7e0",

  // Info - Using light blue
  accentInfo: "#1967d2",
  accentInfoHover: "#1557b0",
  accentInfoActive: "#0d47a1",
  accentInfoSubtle: "#e8f0fe",

  // Text - High contrast
  textPrimary: "#1c1b1f", // neutral[10]
  textSecondary: "#49454f", // neutralVariant[30]
  textTertiary: "#79747e", // neutralVariant[50]
  textDisabled: "#c9c5ca", // neutral[80]
  textOnPrimary: "#ffffff", // neutral[100]
  textOnColor: "#ffffff",
  textInverse: "#e6e1e5", // neutral[90]

  // Borders
  borderSubtle: "#e7e0ec", // neutralVariant[90]
  borderDefault: "#cac4d0", // neutralVariant[80]
  borderStrong: "#79747e", // neutralVariant[50]
  borderInteractive: "#1a73e8", // primary[40]
  borderDisabled: "#e7e0ec",

  // Backgrounds
  bgBody: "#fffbfe", // neutral[99]
  bgSurface: "#fffbfe", // neutral[99]
  bgSurfaceHover: "#f4eff4", // neutral[95]
  bgSurfaceActive: "#e6e1e5", // neutral[90]
  bgSurfaceRaised: "#ffffff", // neutral[100]
  bgSurfaceOverlay: "#ffffff",
  bgCanvas: "#f4eff4", // neutral[95]
  bgSubtle: "#f5eefa", // neutralVariant[95]
  bgDisabled: "#e6e1e5", // neutral[90]

  // Components
  bgButton: "#ffffff",
  bgButtonHover: "#f4eff4",
  bgButtonActive: "#e6e1e5",

  // Interaction
  focusRing: "0 0 0 3px rgba(26, 115, 232, 0.2)",
  overlay: "rgba(28, 27, 31, 0.32)", // neutral[10] with opacity
});

export const lightTheme = "light-theme"; // Placeholder

/**
 * Dark Theme - Semantic Colors
 * Maps semantic tokens to appropriate palette tones for dark mode
 * Kept as scoped class for manual toggling if needed
 */
export const darkTheme = createTheme(colors, {
  // Brand / Primary - Lighter tones for dark backgrounds
  accentPrimary: "#aecbfa", // primary[80]
  accentPrimaryHover: "#8ab4f8", // primary[70]
  accentPrimaryActive: "#669df6", // primary[60]
  accentPrimarySubtle: "#001a41", // primary[10]

  // Danger / Error
  accentDanger: "#f2b8b5", // error[80]
  accentDangerHover: "#ec928e", // error[70]
  accentDangerActive: "#e46962", // error[60]
  accentDangerSubtle: "#410e0b", // error[10]

  // Success
  accentSuccess: "#81c995",
  accentSuccessHover: "#5bb974",
  accentSuccessActive: "#3aa757",
  accentSuccessSubtle: "#0d3818",

  // Warning
  accentWarning: "#fdd663",
  accentWarningHover: "#fcc934",
  accentWarningActive: "#fbbc04",
  accentWarningSubtle: "#3e2d00",

  // Info
  accentInfo: "#8ab4f8",
  accentInfoHover: "#669df6",
  accentInfoActive: "#4285f4",
  accentInfoSubtle: "#001a41",

  // Text - Light on dark
  textPrimary: "#e6e1e5", // neutral[90]
  textSecondary: "#cac4d0", // neutralVariant[80]
  textTertiary: "#938f99", // neutralVariant[60]
  textDisabled: "#605d62", // neutral[40]
  textOnPrimary: "#001a41", // primary[10]
  textOnColor: "#000000",
  textInverse: "#1c1b1f", // neutral[10]

  // Borders
  borderSubtle: "#322f37", // neutralVariant[20]
  borderDefault: "#49454f", // neutralVariant[30]
  borderStrong: "#938f99", // neutralVariant[60]
  borderInteractive: "#aecbfa", // primary[80]
  borderDisabled: "#322f37",

  // Backgrounds - Dark surfaces
  bgBody: "#1c1b1f", // neutral[10]
  bgSurface: "#1c1b1f", // neutral[10]
  bgSurfaceHover: "#313033", // neutral[20]
  bgSurfaceActive: "#484649", // neutral[30]
  bgSurfaceRaised: "#313033", // neutral[20]
  bgSurfaceOverlay: "#313033",
  bgCanvas: "#000000", // neutral[0]
  bgSubtle: "#1d1a22", // neutralVariant[10]
  bgDisabled: "#313033", // neutral[20]

  // Components
  bgButton: "#313033",
  bgButtonHover: "#484649",
  bgButtonActive: "#605d62",

  // Interaction
  focusRing: "0 0 0 3px rgba(174, 203, 250, 0.3)",
  overlay: "rgba(0, 0, 0, 0.6)",
});

/**
 * Default theme (light)
 */
export const defaultTheme = lightTheme;

/**
 * ============================================================================
 * OTHER TOKEN THEMES (Global Defaults)
 * ============================================================================
 */

/**
 * Spacing scale based on 4px base unit
 */
createGlobalTheme(":root", spacing, {
  "2xs": "2px",
  xs: "4px",
  sm: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "32px",
  "3xl": "48px",
  "4xl": "64px",
  "5xl": "96px",
});
export const defaultSpacing = "default-spacing";

/**
 * Typography using Google Sans-inspired font stack
 */
createGlobalTheme(":root", typography, {
  fonts: {
    sans: '"Inter", "Google Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    mono: '"Roboto Mono", "SF Mono", Monaco, "Cascadia Code", "Courier New", monospace',
    display:
      '"Inter", "Google Sans Display", -apple-system, BlinkMacSystemFont, sans-serif',
  },
  fontSizes: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    md: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem", // 48px
    "6xl": "3.75rem", // 60px
  },
  fontWeights: {
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },
  lineHeights: {
    tight: "1.25",
    normal: "1.5",
    relaxed: "1.75",
  },
  letterSpacing: {
    tight: "-0.01em",
    normal: "0",
    wide: "0.025em",
  },
});
export const defaultTypography = "default-typography";

/**
 * Border radius for modern rounded aesthetic
 */
createGlobalTheme(":root", radii, {
  none: "0",
  xs: "2px",
  sm: "4px",
  md: "8px",
  lg: "12px",
  xl: "16px",
  "2xl": "20px",
  "3xl": "24px",
  full: "9999px",
});
export const defaultRadii = "default-radii";

/**
 * Shadow tokens for elevation
 */
createGlobalTheme(":root", shadows, {
  none: "none",
  xs: "0 1px 2px 0 rgba(60, 64, 67, 0.15)",
  sm: "0 1px 3px 0 rgba(60, 64, 67, 0.15), 0 1px 2px 0 rgba(60, 64, 67, 0.10)",
  md: "0 4px 6px -1px rgba(60, 64, 67, 0.15), 0 2px 4px -1px rgba(60, 64, 67, 0.10)",
  lg: "0 10px 15px -3px rgba(60, 64, 67, 0.15), 0 4px 6px -2px rgba(60, 64, 67, 0.10)",
  xl: "0 20px 25px -5px rgba(60, 64, 67, 0.15), 0 10px 10px -5px rgba(60, 64, 67, 0.10)",
  "2xl": "0 25px 50px -12px rgba(60, 64, 67, 0.25)",
  inner: "inset 0 2px 4px 0 rgba(60, 64, 67, 0.10)",
  focus: "0 0 0 3px rgba(26, 115, 232, 0.2)",
});
export const defaultShadows = "default-shadows";

/**
 * Motion system
 */
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
export const defaultTransitions = "default-transitions";

/**
 * Responsive breakpoints (mobile-first)
 */
createGlobalTheme(":root", breakpoints, {
  xs: "0px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
});
export const defaultBreakpoints = "default-breakpoints";

/**
 * Z-index layering system
 */
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
export const defaultZIndex = "default-zindex";
