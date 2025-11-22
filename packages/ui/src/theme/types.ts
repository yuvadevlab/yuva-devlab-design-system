export type YdThemeMode = "light" | "dark" | "system";

export type YdColorOverrides = Partial<{
  accentPrimary: string;
  accentPrimaryHover: string;
  accentDanger: string;
  accentDangerHover: string;

  textPrimary: string;
  textOnPrimary: string;
  textMuted: string;

  borderSubtle: string;
  borderStrong: string;

  bgButton: string;
  bgBody: string;
}>;

export type YdSpacingOverrides = Partial<{
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}>;

export interface YdThemeTokensOverrides {
  color?: YdColorOverrides;
  spacing?: YdSpacingOverrides;
}

export interface YdThemeConfig {
  mode?: YdThemeMode;
  tokens?: YdThemeTokensOverrides;
}
