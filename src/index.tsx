import { type ReactNode, useCallback, useState } from "react";

export interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

export const Button = ({
  children,
  onClick,
  variant = "primary",
}: ButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    className={`button button--${variant}`}
  >
    {children}
  </button>
);

export const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);
  const toggle = useCallback(() => setValue((v) => !v), []);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  return { value, toggle, setTrue, setFalse } as const;
};
