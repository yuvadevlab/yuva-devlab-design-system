import type { YDThemeTokensOverrides } from "../theme/types";

/**
 * Apply token values as CSS variables on documentElement.
 */
export const applyThemeToDocument = (
  tokens: Required<YDThemeTokensOverrides>,
): void => {
  if (typeof document === "undefined") {
    return;
  }

  const root = document.documentElement;

  const { color, spacing } = tokens;

  root.style.setProperty(
    "--yd-color-accent-primary",
    color.accentPrimary || null,
  );
  root.style.setProperty(
    "--yd-color-accent-primary-hover",
    color.accentPrimaryHover || null,
  );
  root.style.setProperty(
    "--yd-color-accent-primary-active",
    color.accentPrimaryActive || null,
  );
  root.style.setProperty(
    "--yd-color-accent-primary-subtle",
    color.accentPrimarySubtle || null,
  );

  root.style.setProperty(
    "--yd-color-accent-danger",
    color.accentDanger || null,
  );
  root.style.setProperty(
    "--yd-color-accent-danger-hover",
    color.accentDangerHover || null,
  );
  root.style.setProperty(
    "--yd-color-accent-danger-active",
    color.accentDangerActive || null,
  );
  root.style.setProperty(
    "--yd-color-accent-danger-subtle",
    color.accentDangerSubtle || null,
  );

  root.style.setProperty(
    "--yd-color-accent-success",
    color.accentSuccess || null,
  );
  root.style.setProperty(
    "--yd-color-accent-success-hover",
    color.accentSuccessHover || null,
  );
  root.style.setProperty(
    "--yd-color-accent-success-subtle",
    color.accentSuccessSubtle || null,
  );

  root.style.setProperty(
    "--yd-color-accent-warning",
    color.accentWarning || null,
  );
  root.style.setProperty(
    "--yd-color-accent-warning-hover",
    color.accentWarningHover || null,
  );
  root.style.setProperty(
    "--yd-color-accent-warning-subtle",
    color.accentWarningSubtle || null,
  );

  root.style.setProperty("--yd-color-text-primary", color.textPrimary || null);
  root.style.setProperty(
    "--yd-color-text-secondary",
    color.textSecondary || null,
  );
  root.style.setProperty(
    "--yd-color-text-tertiary",
    color.textTertiary || null,
  );
  root.style.setProperty(
    "--yd-color-text-on-primary",
    color.textOnPrimary || null,
  );
  root.style.setProperty("--yd-color-text-on-color", color.textOnColor || null);

  root.style.setProperty(
    "--yd-color-border-subtle",
    color.borderSubtle || null,
  );
  root.style.setProperty(
    "--yd-color-border-default",
    color.borderDefault || null,
  );
  root.style.setProperty(
    "--yd-color-border-strong",
    color.borderStrong || null,
  );
  root.style.setProperty(
    "--yd-color-border-interactive",
    color.borderInteractive || null,
  );

  root.style.setProperty("--yd-color-bg-body", color.bgBody || null);
  root.style.setProperty("--yd-color-bg-surface", color.bgSurface || null);
  root.style.setProperty(
    "--yd-color-bg-surface-hover",
    color.bgSurfaceHover || null,
  );
  root.style.setProperty(
    "--yd-color-bg-surface-active",
    color.bgSurfaceActive || null,
  );
  root.style.setProperty("--yd-color-bg-canvas", color.bgCanvas || null);
  root.style.setProperty("--yd-color-bg-subtle", color.bgSubtle || null);

  root.style.setProperty("--yd-color-bg-button", color.bgButton || null);
  root.style.setProperty(
    "--yd-color-bg-button-hover",
    color.bgButtonHover || null,
  );
  root.style.setProperty(
    "--yd-color-bg-button-active",
    color.bgButtonActive || null,
  );

  root.style.setProperty("--yd-color-focus-ring", color.focusRing || null);

  root.style.setProperty("--yd-space-xs", spacing.xs || null);
  root.style.setProperty("--yd-space-sm", spacing.sm || null);
  root.style.setProperty("--yd-space-md", spacing.md || null);
  root.style.setProperty("--yd-space-lg", spacing.lg || null);
  root.style.setProperty("--yd-space-xl", spacing.xl || null);
};
