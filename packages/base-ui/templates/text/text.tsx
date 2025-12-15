"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const textVariants = cva(["of-text"], {
  variants: {
    size: {
      "3xl": ["display-3xl"],
      "2xl": ["display-2xl"],
      xl: ["display-xl"],
      lg: ["display-lg"],
      md: ["display-md"],
      sm: ["display-sm"],
      xs: ["display-xs"],
      bodyLg: ["display-body-lg"],
      bodyMd: ["display-body-md"],
      bodySm: ["display-body-sm"],
      bodyXs: ["display-body-xs"],
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type TextTag = "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface TextProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "style">,
    VariantProps<typeof textVariants> {
  tag?: TextTag;
  children?: React.ReactNode;
}

const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ className, tag = "p", size, children, ...props }, ref) => {
    const Component = tag as React.ElementType;

    return (
      <Component
        ref={ref}
        className={cn(textVariants({ size }), className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
Text.displayName = "Text";

export { Text, textVariants };
