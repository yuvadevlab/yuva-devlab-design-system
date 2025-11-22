import type { Preview } from "@storybook/react";
import React from "react";
import { ThemeProvider, ConfigProvider } from "@yuva-devlab/ui";

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <ConfigProvider>
          <div
            style={{
              minHeight: "100vh",
              padding: 24,
              background: "var(--yd-color-bg-body)",
              color: "var(--yd-color-text-primary)",
            }}
          >
            <Story />
          </div>
        </ConfigProvider>
      </ThemeProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
