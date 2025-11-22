import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type {
  YdThemeConfig,
  YdThemeMode,
  YdThemeTokensOverrides,
} from "./types";
import {
  defaultLightTokens,
  defaultDarkTokens,
} from "../constants/defaultTheme";
import { applyThemeToDocument } from "../constants/cssVariables";

interface ThemeContextValue {
  mode: YdThemeMode;
  resolvedMode: "light" | "dark";
  tokens: Required<YdThemeTokensOverrides>;
  setMode: (mode: YdThemeMode) => void;
  setOverrides: (tokens: YdThemeTokensOverrides) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const mergeTokens = (
  base: Required<YdThemeTokensOverrides>,
  overrides?: YdThemeTokensOverrides
): Required<YdThemeTokensOverrides> => {
  return {
    color: { ...base.color, ...(overrides?.color || {}) },
    spacing: { ...base.spacing, ...(overrides?.spacing || {}) },
  };
};

const resolveMode = (mode: YdThemeMode): "light" | "dark" => {
  if (mode !== "system") return mode;
  if (typeof window === "undefined") return "light";

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
};

export const ThemeProvider: React.FC<
  React.PropsWithChildren<{ config?: YdThemeConfig }>
> = ({ config, children }) => {
  const [mode, setMode] = useState<YdThemeMode>(config?.mode || "system");
  const [overrides, setOverrides] = useState<YdThemeTokensOverrides>(
    config?.tokens || {}
  );

  const resolvedMode = resolveMode(mode);
  const baseTokens =
    resolvedMode === "light" ? defaultLightTokens : defaultDarkTokens;

  const mergedTokens = useMemo(
    () => mergeTokens(baseTokens, overrides),
    [baseTokens, overrides]
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

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};
