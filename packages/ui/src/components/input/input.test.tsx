import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { Input } from "./input";

describe("<Input />", () => {
  it("renders correctly", () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
  });

  it("handles disabled state", () => {
    render(
      <Input
        disabled
        placeholder="Disabled"
      />,
    );
    expect(screen.getByPlaceholderText("Disabled")).toBeDisabled();
  });

  it("handles error state", () => {
    // Ideally we verify styling class or data attribute, but visual regression is better for styles.
    // For now, ensuring it renders without crashing with error prop.
    render(
      <Input
        error
        placeholder="Error"
      />,
    );
    expect(screen.getByPlaceholderText("Error")).toBeInTheDocument();
  });

  it("renders label when provided", () => {
    render(
      <Input
        label="Username"
        placeholder="Enter username"
        id="username"
      />,
    );
    expect(screen.getByLabelText("Username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter username")).toBeInTheDocument();
  });

  it("renders helper text and links to input", () => {
    render(
      <Input
        helperText="Helper text"
        placeholder="Input"
      />,
    );
    const input = screen.getByPlaceholderText("Input");
    const helper = screen.getByText("Helper text");

    expect(helper).toBeInTheDocument();
    expect(input).toHaveAttribute("aria-describedby", helper.id);
  });

  it("renders error message and links to input with invalid state", () => {
    render(
      <Input
        errorMessage="Error message"
        placeholder="Input"
      />,
    );
    const input = screen.getByPlaceholderText("Input");
    const error = screen.getByText("Error message");

    expect(error).toBeInTheDocument();
    expect(input).toHaveAttribute("aria-describedby", error.id);
    expect(input).toHaveAttribute("aria-invalid", "true");
  });
});
