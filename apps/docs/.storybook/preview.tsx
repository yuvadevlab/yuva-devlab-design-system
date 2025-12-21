import type { Decorator, Preview } from "@storybook/react";

const preview: Preview = {
  decorators: [(Story) => <Story />] as Decorator[],
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
