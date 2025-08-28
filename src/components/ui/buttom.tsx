import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "default";
};

export default function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyle =
    "px-4 py-2 rounded-xl font-semibold transition-colors cursor-pointer disabled:cursor-not-allowed disabled:opacity-50";

  const variantStyle = clsx({
    "bg-white text-black hover:bg-black hover:text-white": variant === "primary",
    "bg-black text-white hover:bg-white hover:text-black border": variant === "secondary",
    "bg-gray-200 text-gray-500 cursor-not-allowed": variant === "default",
  });

  return (
    <button
      className={`${baseStyle} ${variantStyle} ${className}`}
      disabled={variant === "default" || props.disabled}
      {...props}
    >
      {children}
    </button>
  );
}
