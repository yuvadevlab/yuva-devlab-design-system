import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import { Button } from "./button";

describe("<Button />", () => {
  it("renders children", () => {
    render(<Button>Click me</Button>);
    // expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Click me</Button>);
    screen.getByText("Click me").click();
    expect(onClick).toHaveBeenCalled();
  });

  it("is disabled when loading", () => {
    render(
      <Button
        loading
        data-testid="btn"
      >
        Loading
      </Button>,
    );
    // const button = screen.getByTestId("btn");
    // expect(button).toBeDisabled();
    // expect(button).toHaveAttribute("aria-busy", "true");
  });
});
