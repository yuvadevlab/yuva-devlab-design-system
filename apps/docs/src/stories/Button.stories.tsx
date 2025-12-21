import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@yuva-devlab/ui";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Button",
    variant: "default",
    size: "md",
    shape: "round",
    width: "default",
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "primary",
        "secondary",
        "tertiary",
        "elevated",
        "filled",
        "tonal",
        "outlined",
        "text",
        "ghost",
        "link",
      ],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    shape: {
      control: "inline-radio",
      options: ["round", "square"],
    },
    width: {
      control: "inline-radio",
      options: ["narrow", "default", "wide"],
    },
    danger: { control: "boolean" },
    block: { control: "boolean" },
    morph: { control: "boolean" },
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

export const Tonal: Story = {
  args: {
    variant: "tonal",
    children: "Tonal Button",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    children: "Outlined Button",
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

export const Morph: Story = {
  args: {
    variant: "filled",
    shape: "square",
    morph: true,
    children: "Morph Square",
  },
};

export const Loading: Story = {
  args: {
    variant: "primary",
    loading: true,
    children: "Loading...",
  },
};
