import React, { useEffect } from "react";
import type { YdThemeTokensOverrides } from "./types";
import { useTheme } from "./ThemeProvider";

export const ConfigProvider: React.FC<
  React.PropsWithChildren<{ theme?: { tokens?: YdThemeTokensOverrides } }>
> = ({ theme, children }) => {
  const { setOverrides } = useTheme();

  useEffect(() => {
    if (theme?.tokens) {
      setOverrides(theme.tokens);
    }
  }, [theme?.tokens, setOverrides]);

  return <>{children}</>;
};
