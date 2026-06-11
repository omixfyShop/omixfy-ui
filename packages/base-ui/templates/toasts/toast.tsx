import * as React from "react";
import { X } from "lucide-react";
import { cn } from "../../lib/utils";

export interface ToastProps {
  content: string;
  onDismiss: () => void;
  duration?: number;
  variant?: "default" | "success" | "error" | "warning";
}

const Toast: React.FC<ToastProps> = ({
  content,
  onDismiss,
  duration = 4000,
  variant = "default",
}) => {
  React.useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onDismiss();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, onDismiss]);

  const variantStyles = {
    default: "bg-of-surface border-primary-200",
    success: "bg-of-surface border-primary-200",
    error: "bg-of-surface border-destructive",
    warning: "bg-of-surface border-secondary-400",
  };

  return (
    <div
      className={cn(
        "animate-in slide-in-from-bottom-5 fixed bottom-4 right-4 z-50 flex items-center gap-4 rounded-lg border p-4 shadow-lg",
        variantStyles[variant],
      )}
    >
      <p className="text-sm text-primary-text">{content}</p>
      <button
        onClick={onDismiss}
        className="ring-offset-background focus:ring-ring rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2"
      >
        <X className="h-4 w-4" />
        <span className="sr-only">Fechar</span>
      </button>
    </div>
  );
};

export { Toast };
