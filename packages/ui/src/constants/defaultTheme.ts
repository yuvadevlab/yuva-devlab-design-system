import type { YDThemeTokensOverrides } from "../theme/types";

export const defaultLightTokens: Required<YDThemeTokensOverrides> = {
  color: {
    // Brand
    accentPrimary: "#4f46e5",
    accentPrimaryHover: "#4338ca",
    accentPrimaryActive: "#3730a3",
    accentPrimarySubtle: "#e0e7ff",

    // Danger
    accentDanger: "#dc2626",
    accentDangerHover: "#b91c1c",
    accentDangerActive: "#991b1b",
    accentDangerSubtle: "#fee2e2",

    // Success
    accentSuccess: "#059669",
    accentSuccessHover: "#047857",
    accentSuccessSubtle: "#d1fae5",

    // Warning
    accentWarning: "#d97706",
    accentWarningHover: "#b45309",
    accentWarningSubtle: "#fef3c7",

    // Text
    textPrimary: "#0f172a",
    textSecondary: "#475569",
    textTertiary: "#94a3b8",
    textOnPrimary: "#ffffff",
    textOnColor: "#ffffff",

    // Borders
    borderSubtle: "#e2e8f0",
    borderDefault: "#cbd5e1",
    borderStrong: "#94a3b8",
    borderInteractive: "#4f46e5",

    // Backgrounds
    bgBody: "#ffffff",
    bgSurface: "#ffffff",
    bgSurfaceHover: "#f8fafc",
    bgSurfaceActive: "#f1f5f9",
    bgCanvas: "#f8fafc",
    bgSubtle: "#f1f5f9",

    // Components
    bgButton: "#ffffff",
    bgButtonHover: "#f8fafc",
    bgButtonActive: "#f1f5f9",

    // Interaction
    focusRing: "0 0 0 2px #ffffff, 0 0 0 4px #4f46e5",
  },
  spacing: {
    xs: "0.25rem", // 4px
    sm: "0.5rem", // 8px
    md: "1rem", // 16px
    lg: "1.5rem", // 24px
    xl: "2rem", // 32px
  },
};

export const defaultDarkTokens: Required<YDThemeTokensOverrides> = {
  color: {
    // Brand
    accentPrimary: "#6366f1",
    accentPrimaryHover: "#4f46e5",
    accentPrimaryActive: "#4338ca",
    accentPrimarySubtle: "#312e81",

    // Danger
    accentDanger: "#ef4444",
    accentDangerHover: "#dc2626",
    accentDangerActive: "#b91c1c",
    accentDangerSubtle: "#7f1d1d",

    // Success
    accentSuccess: "#10b981",
    accentSuccessHover: "#059669",
    accentSuccessSubtle: "#064e3b",

    // Warning
    accentWarning: "#f59e0b",
    accentWarningHover: "#d97706",
    accentWarningSubtle: "#78350f",

    // Text
    textPrimary: "#f8fafc",
    textSecondary: "#cbd5e1",
    textTertiary: "#94a3b8",
    textOnPrimary: "#ffffff",
    textOnColor: "#ffffff",

    // Borders
    borderSubtle: "#1e293b",
    borderDefault: "#334155",
    borderStrong: "#475569",
    borderInteractive: "#6366f1",

    // Backgrounds
    bgBody: "#0f172a",
    bgSurface: "#1e293b",
    bgSurfaceHover: "#334155",
    bgSurfaceActive: "#475569",
    bgCanvas: "#020617",
    bgSubtle: "#1e293b",

    // Components
    bgButton: "#1e293b",
    bgButtonHover: "#334155",
    bgButtonActive: "#475569",

    // Interaction
    focusRing: "0 0 0 2px #0f172a, 0 0 0 4px #6366f1",
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
  },
};
