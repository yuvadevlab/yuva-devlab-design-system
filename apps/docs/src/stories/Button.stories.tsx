import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@yuva-devlab/ui";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Button",
    variant: "default",
    size: "middle",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "primary", "ghost", "link"],
    },
    size: {
      control: "inline-radio",
      options: ["small", "middle", "large"],
    },
    danger: { control: "boolean" },
    block: { control: "boolean" },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
};

export const Danger: Story = {
  args: {
    variant: "primary",
    danger: true,
    children: "Danger Button",
  },
};

export const Block: Story = {
  args: {
    variant: "primary",
    block: true,
    children: "Block Button",
  },
};

export const Loading: Story = {
  args: {
    variant: "primary",
    loading: true,
    children: "Loading...",
  },
};
