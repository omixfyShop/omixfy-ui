"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  label?: string;
  showValue?: boolean;
}

const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ className, value, label, showValue = true, ...props }, ref) => {
    const clamped = Math.min(100, Math.max(0, value));
    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-1", className)}
        {...props}
      >
        {(label || showValue) && (
          <div className="flex items-center justify-between text-[11px] text-primary">
            {label ? <span>{label}</span> : <span />}
            {showValue && <span>{Math.round(clamped)}%</span>}
          </div>
        )}
        <div
          role="progressbar"
          aria-valuenow={Math.round(clamped)}
          aria-valuemin={0}
          aria-valuemax={100}
          className="relative h-2 w-full overflow-hidden rounded-full bg-secondary"
        >
          <div
            className="h-full rounded-full bg-primary transition-all duration-300"
            style={{ width: `${clamped}%` }}
          />
        </div>
      </div>
    );
  },
);
ProgressBar.displayName = "ProgressBar";

export { ProgressBar };
