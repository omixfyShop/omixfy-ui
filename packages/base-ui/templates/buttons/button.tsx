"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(["of-btn"], {
  variants: {
    variant: {
      action: ["_btn-action"],
      primary: ["_btn-primary"],
      secondary: ["_btn-secondary"],
      link: ["_btn-link"],
    },
    appearance: {
      solid: "",
      outline: ["_btn-outline"],
      basic: ["_btn-basic"],
    },
    size: {
      default: "_btn-md",
      sm: "_btn-sm",
      md: "_btn-md",
      lg: "_btn-lg",
    },
    full: {
      true: "_btn-full",
      false: "",
    },
    loading: {
      true: "_btn-loading",
      false: "",
    },
    icon: {
      true: "p-1 min-h-12 min-w-12",
      false: "",
    },
    notification: {
      true: "_btn-notification",
      false: "",
    },
  },
  compoundVariants: [
    {
      variant: "primary",
      appearance: "outline",
      class: [
        "border-primary text-primary",
        "hover:bg-primary/10",
        "active:bg-primary/10",
      ],
    },
    {
      variant: "secondary",
      appearance: "outline",
      class: [
        "border-secondary text-secondary-foreground",
        "hover:bg-secondary/50",
        "active:bg-secondary/50",
      ],
    },
    {
      variant: "primary",
      appearance: "basic",
      class: [
        "text-primary",
        "hover:text-primary/80",
        "focus-visible:text-primary",
        "active:text-primary",
      ],
    },
    {
      variant: "secondary",
      appearance: "basic",
      class: [
        "text-secondary-foreground",
        "hover:text-secondary-foreground/80",
        "focus-visible:text-secondary-foreground",
        "active:text-secondary-foreground",
      ],
    },
  ],
  defaultVariants: {
    variant: "primary",
    appearance: "solid",
    size: "default",
  },
});

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "style">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      appearance,
      size,
      full,
      loading,
      icon,
      notification,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={cn(
          buttonVariants({
            variant,
            appearance,
            size,
            full,
            loading,
            icon,
            notification,
          }),
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
