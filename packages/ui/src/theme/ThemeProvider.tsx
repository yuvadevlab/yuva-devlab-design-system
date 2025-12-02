import {
  defaultRadii,
  defaultShadows,
  defaultSpacing,
  defaultTheme,
  defaultTypography,
} from "@yuva-devlab/tokens";
import clsx from "clsx";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { applyThemeToDocument } from "../constants/cssVariables";
import {
  defaultLightTokens,
  defaultDarkTokens,
} from "../constants/defaultTheme";

import { YDThemeConfig, YDThemeMode, YDThemeTokensOverrides } from "./types";

interface ThemeContextValue {
  mode: YDThemeMode;
  resolvedMode: "light" | "dark";
  tokens: Required<YDThemeTokensOverrides>;
  setMode: (mode: YDThemeMode) => void;
  setOverrides: (tokens: YDThemeTokensOverrides) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const mergeTokens = (
  base: Required<YDThemeTokensOverrides>,
  overrides?: YDThemeTokensOverrides,
): Required<YDThemeTokensOverrides> => {
  return {
    color: { ...base.color, ...(overrides?.color || {}) },
    spacing: { ...base.spacing, ...(overrides?.spacing || {}) },
  };
};

const resolveMode = (mode: YDThemeMode): "light" | "dark" => {
  if (mode !== "system") {
    return mode;
  }
  if (typeof window === "undefined") {
    return "light";
  }

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
};

export const ThemeProvider: React.FC<
  React.PropsWithChildren<{ config?: YDThemeConfig; className?: string }>
> = ({ config, children, className }) => {
  const [mode, setMode] = useState<YDThemeMode>(config?.mode || "system");
  const [overrides, setOverrides] = useState<YDThemeTokensOverrides>(
    config?.tokens || {},
  );

  const resolvedMode = resolveMode(mode);
  const baseTokens =
    resolvedMode === "light" ? defaultLightTokens : defaultDarkTokens;

  const mergedTokens = useMemo(
    () => mergeTokens(baseTokens, overrides),
    [baseTokens, overrides],
  );

  useEffect(() => {
    applyThemeToDocument(mergedTokens);
    document.documentElement.dataset.theme = resolvedMode;
  }, [mergedTokens, resolvedMode]);

  const value: ThemeContextValue = {
    mode,
    resolvedMode,
    tokens: mergedTokens,
    setMode,
    setOverrides,
  };

  // Combine all default theme classes
  const themeClass = clsx(
    defaultTheme,
    defaultSpacing,
    defaultTypography,
    defaultRadii,
    defaultShadows,
    className,
  );

  return (
    <ThemeContext.Provider value={value}>
      <div
        className={themeClass}
        style={{ height: "100%", width: "100%" }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextValue => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
};
