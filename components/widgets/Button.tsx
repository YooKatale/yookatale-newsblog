"use client";

import React, { useCallback } from "react";

type Props = {
  className?: string;
  title?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  variant?: "primary" | "secondary";
  onClick?: () => void;
};

const Button = ({
  className = "",
  title,
  children,
  disabled,
  variant,
  onClick,
}: Props) => {
  const buttonRef = useCallback(
    (node: HTMLButtonElement) => {
      if (variant === "secondary" && node) {
        node.classList.replace("bg-primary", "bg-secondary");
      }
    },
    [variant, className]
  );

  return (
    <button
      ref={buttonRef}
      className={`btn btn-primary ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {title || children}
    </button>
  );
};

export default Button;
