import {
  act,
  cleanup,
  render,
  renderHook,
  screen,
} from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { afterEach, describe, expect, it, mock } from "bun:test";

import { Button, formatDate, useToggle } from "../src";

afterEach(cleanup);

describe("Button", () => {
  it("renders children correctly", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeDefined();
  });

  it("applies the default variant class", () => {
    render(<Button>Primary</Button>);
    expect(screen.getByText("Primary").className).toBe(
      "button button--primary"
    );
  });

  it("applies the secondary variant class", () => {
    render(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByText("Secondary").className).toBe(
      "button button--secondary"
    );
  });

  it("calls onClick when clicked", async () => {
    const user = userEvent.setup();
    const handleClick = mock();
    render(<Button onClick={handleClick}>Click</Button>);
    await user.click(screen.getByText("Click"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("passes through the disabled prop", () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByText("Disabled")).toHaveProperty("disabled", true);
  });

  it("passes through aria-label", () => {
    render(<Button aria-label="Close dialog">X</Button>);
    expect(screen.getByLabelText("Close dialog")).toBeDefined();
  });

  it("merges custom className with variant class", () => {
    render(<Button className="custom">Styled</Button>);
    expect(screen.getByText("Styled").className).toBe(
      "button button--primary custom"
    );
  });

  it("spreads rest props onto the button element", () => {
    render(<Button data-testid="my-button">Test</Button>);
    expect(screen.getByTestId("my-button")).toBeDefined();
  });
});

describe("useToggle", () => {
  it("starts with the initial value", () => {
    const { result } = renderHook(() => useToggle());
    expect(result.current.value).toBe(false);
  });

  it("starts with a custom initial value", () => {
    const { result } = renderHook(() => useToggle(true));
    expect(result.current.value).toBe(true);
  });

  it("toggles the value", () => {
    const { result } = renderHook(() => useToggle());
    act(() => result.current.toggle());
    expect(result.current.value).toBe(true);
    act(() => result.current.toggle());
    expect(result.current.value).toBe(false);
  });

  it("sets value to true", () => {
    const { result } = renderHook(() => useToggle());
    act(() => result.current.setTrue());
    expect(result.current.value).toBe(true);
  });

  it("sets value to false", () => {
    const { result } = renderHook(() => useToggle(true));
    act(() => result.current.setFalse());
    expect(result.current.value).toBe(false);
  });
});

describe("formatDate", () => {
  it("formats a Date object", () => {
    const date = new Date("2024-01-15");
    expect(formatDate(date)).toContain("January");
    expect(formatDate(date)).toContain("15");
    expect(formatDate(date)).toContain("2024");
  });

  it("formats a date string", () => {
    const result = formatDate("2024-01-15");
    expect(result).toContain("January");
    expect(result).toContain("15");
  });

  it("formats a timestamp", () => {
    const timestamp = new Date("2024-01-15").getTime();
    const result = formatDate(timestamp);
    expect(result).toContain("January");
  });
});
