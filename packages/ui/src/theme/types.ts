export type YDThemeMode = "light" | "dark" | "system";

export type YDColorOverrides = Partial<{
  // Brand
  accentPrimary: string;
  accentPrimaryHover: string;
  accentPrimaryActive: string;
  accentPrimarySubtle: string;

  // Danger
  accentDanger: string;
  accentDangerHover: string;
  accentDangerActive: string;
  accentDangerSubtle: string;

  // Success
  accentSuccess: string;
  accentSuccessHover: string;
  accentSuccessSubtle: string;

  // Warning
  accentWarning: string;
  accentWarningHover: string;
  accentWarningSubtle: string;

  // Text
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  textOnPrimary: string;
  textOnColor: string;

  // Borders
  borderSubtle: string;
  borderDefault: string;
  borderStrong: string;
  borderInteractive: string;

  // Backgrounds
  bgBody: string;
  bgSurface: string;
  bgSurfaceHover: string;
  bgSurfaceActive: string;
  bgCanvas: string;
  bgSubtle: string;

  // Components
  bgButton: string;
  bgButtonHover: string;
  bgButtonActive: string;

  // Interaction
  focusRing: string;
}>;

export type YDSpacingOverrides = Partial<{
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}>;

export interface YDThemeTokensOverrides {
  color?: YDColorOverrides;
  spacing?: YDSpacingOverrides;
}

export interface YDThemeConfig {
  mode?: YDThemeMode;
  tokens?: YDThemeTokensOverrides;
}
