import * as React from "react";
import { cn } from "../../lib/utils";
import { Input } from "./input";
import { Label } from "./label";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { useFormContext } from "react-hook-form";

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  posLabel?: React.ReactNode | string | null;
  helpText?: string;
  error?: string;
  connectedLeft?: React.ReactNode;
  connectedRight?: React.ReactNode;
  name?: string;
  showHelpText?: boolean;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      type,
      label,
      posLabel,
      helpText,
      error,
      connectedLeft,
      connectedRight,
      name,
      showHelpText = false,
      ...props
    },
    ref,
  ) => {
    const form = useFormContext();
    const hasForm = !!form;

    const inputElement = (
      <div className="relative">
        {connectedLeft && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-600">
            {connectedLeft}
          </div>
        )}
        <Input
          {...props}
          type={type}
          id={name}
          className={cn(
            connectedLeft && "pl-10",
            connectedRight && "pr-10",
            error && "border-neutral-900 focus-visible:ring-neutral-300",
            className,
          )}
          ref={ref}
        />
        {connectedRight && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-primary-600">
            {connectedRight}
          </div>
        )}
      </div>
    );

    if (hasForm && name) {
      const hasError = !!error;
      return (
        <FormField
          control={form.control}
          name={name}
          render={({ field }) => (
            <div
              className={
                "input-group group relative w-full" +
                (hasError ? " has-error" : "")
              }
            >
              <FormItem>
                {label &&
                  (posLabel ? (
                    <div className="flex items-center justify-between gap-2">
                      <FormLabel htmlFor={field.name}>{label}</FormLabel>
                      <div>{posLabel}</div>
                    </div>
                  ) : (
                    <FormLabel htmlFor={field.name}>{label}</FormLabel>
                  ))}
                <FormControl>
                  <div className="relative">
                    {connectedLeft && (
                      <div className="absolute left-3 top-1/2 z-10 -translate-y-1/2 bg-neutral-50 text-neutral-600">
                        {connectedLeft}
                      </div>
                    )}
                    <Input
                      {...field}
                      {...props}
                      type={type}
                      id={field.name}
                      className={cn(
                        connectedLeft && "pl-10",
                        connectedRight && "pr-10",
                        className,
                        hasError && "border-red-700 focus-visible:ring-red-300",
                      )}
                      ref={ref}
                      onChange={(e) => {
                        field.onChange(e);
                        props.onChange?.(e);
                      }}
                    />
                    {connectedRight && (
                      <div className="absolute right-3 top-1/2 z-10 -translate-y-1/2 text-primary-600">
                        {connectedRight}
                      </div>
                    )}
                  </div>
                </FormControl>
                {showHelpText && helpText && (
                  <p className="text-sm text-neutral-500">{helpText}</p>
                )}
                {showHelpText && <FormMessage />}
              </FormItem>
            </div>
          )}
        />
      );
    }

    return (
      <div className="relative space-y-2">
        {label &&
          (posLabel ? (
            <div className="flex items-center justify-between gap-2">
              <Label htmlFor={name} className={cn(error && "text-primary-600")}>
                {label}
              </Label>
              <div>{posLabel}</div>
            </div>
          ) : (
            <Label htmlFor={name} className={cn(error && "text-primary-600")}>
              {label}
            </Label>
          ))}
        {inputElement}
        {showHelpText && helpText && !error && (
          <p className="text-sm text-primary-700">{helpText}</p>
        )}
        {showHelpText && error && (
          <p className="text-sm font-medium text-primary-600">{error}</p>
        )}
      </div>
    );
  },
);
TextField.displayName = "TextField";

export { TextField };
