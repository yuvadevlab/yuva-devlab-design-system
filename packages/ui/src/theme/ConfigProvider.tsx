import React, { useEffect } from "react";

import { useTheme } from "./ThemeProvider";
import type { YDThemeTokensOverrides } from "./types";

export const ConfigProvider: React.FC<
  React.PropsWithChildren<{ theme?: { tokens?: YDThemeTokensOverrides } }>
> = ({ theme, children }) => {
  const { setOverrides } = useTheme();

  useEffect(() => {
    if (theme?.tokens) {
      setOverrides(theme.tokens);
    }
  }, [theme?.tokens, setOverrides]);

  return <>{children}</>;
};
