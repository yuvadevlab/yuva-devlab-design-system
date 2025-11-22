import type { YdThemeTokensOverrides } from "../theme/types";

/**
 * Apply token values as CSS variables on documentElement.
 */
export function applyThemeToDocument(tokens: Required<YdThemeTokensOverrides>) {
  if (typeof document === "undefined") return;

  const root = document.documentElement;

  const { color, spacing } = tokens;

  root.style.setProperty(
    "--yd-color-accent-primary",
    color.accentPrimary || null
  );
  root.style.setProperty(
    "--yd-color-accent-primary-hover",
    color.accentPrimaryHover || null
  );
  root.style.setProperty(
    "--yd-color-accent-danger",
    color.accentDanger || null
  );
  root.style.setProperty(
    "--yd-color-accent-danger-hover",
    color.accentDangerHover || null
  );

  root.style.setProperty("--yd-color-text-primary", color.textPrimary || null);
  root.style.setProperty(
    "--yd-color-text-on-primary",
    color.textOnPrimary || null
  );
  root.style.setProperty("--yd-color-text-muted", color.textMuted || null);

  root.style.setProperty(
    "--yd-color-border-subtle",
    color.borderSubtle || null
  );
  root.style.setProperty(
    "--yd-color-border-strong",
    color.borderStrong || null
  );

  root.style.setProperty("--yd-color-bg-button", color.bgButton || null);
  root.style.setProperty("--yd-color-bg-body", color.bgBody || null);

  root.style.setProperty("--yd-space-xs", spacing.xs || null);
  root.style.setProperty("--yd-space-sm", spacing.sm || null);
  root.style.setProperty("--yd-space-md", spacing.md || null);
  root.style.setProperty("--yd-space-lg", spacing.lg || null);
  root.style.setProperty("--yd-space-xl", spacing.xl || null);
}
