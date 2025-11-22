import type { YdThemeTokensOverrides } from "../theme/types";

export const defaultLightTokens: Required<YdThemeTokensOverrides> = {
  color: {
    accentPrimary: "#2563eb",
    accentPrimaryHover: "#1d4ed8",
    accentDanger: "#dc2626",
    accentDangerHover: "#b91c1c",

    textPrimary: "#0f172a",
    textOnPrimary: "#ffffff",
    textMuted: "#6b7280",

    borderSubtle: "#e5e7eb",
    borderStrong: "#9ca3af",

    bgButton: "#111827",
    bgBody: "#ffffff",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
  },
};

export const defaultDarkTokens: Required<YdThemeTokensOverrides> = {
  color: {
    accentPrimary: "#3b82f6",
    accentPrimaryHover: "#2563eb",
    accentDanger: "#f97316",
    accentDangerHover: "#ea580c",

    textPrimary: "#e5e7eb",
    textOnPrimary: "#020617",
    textMuted: "#9ca3af",

    borderSubtle: "#1e293b",
    borderStrong: "#4b5563",

    bgButton: "#020617",
    bgBody: "#020617",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
  },
};
