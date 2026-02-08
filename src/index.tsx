import { type ButtonHTMLAttributes, useCallback, useState } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button = ({
  children,
  variant = "primary",
  className,
  ...rest
}: ButtonProps) => (
  <button
    type="button"
    className={`button button--${variant}${className ? ` ${className}` : ""}`}
    {...rest}
  >
    {children}
  </button>
);

Button.displayName = "Button";

export const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);
  const toggle = useCallback(() => setValue((v) => !v), []);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  return { value, toggle, setTrue, setFalse } as const;
};

// Example utility function
export const formatDate = (date: Date | string | number): string =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
