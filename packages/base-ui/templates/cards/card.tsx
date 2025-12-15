"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

export interface DestructableAction {
  content: string;
  onAction?: () => void;
  destructive?: boolean;
}

export interface DisableableAction {
  content: string;
  onAction?: () => void;
  disabled?: boolean;
}

export interface CardSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  children?: React.ReactNode;
}

const CardSection = React.forwardRef<HTMLDivElement, CardSectionProps>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("of-card-section", className)} {...props}>
        {title && <h3 className="of-card-section-title">{title}</h3>}
        {children}
      </div>
    );
  }
);
CardSection.displayName = "CardSection";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  sectioned?: boolean;
  primaryFooterAction?: DestructableAction;
  secondaryFooterActions?: DestructableAction[];
  actions?: DisableableAction[];
  children?: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      title,
      sectioned = false,
      primaryFooterAction,
      secondaryFooterActions,
      actions,
      children,
      ...props
    },
    ref
  ) => {
    const hasHeader = title || (actions && actions.length > 0);
    const hasFooter = primaryFooterAction || (secondaryFooterActions && secondaryFooterActions.length > 0);

    const renderChildren = () => {
      if (!children) return null;

      if (sectioned) {
        return React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type === CardSection) {
            return child;
          }
          return <CardSection>{child}</CardSection>;
        });
      }

      return children;
    };

    return (
      <div ref={ref} className={cn("of-card", className)} {...props}>
        {hasHeader && (
          <div className="of-card-header">
            {title && <h2 className="of-card-title">{title}</h2>}
            {actions && actions.length > 0 && (
              <div className="of-card-actions">
                {actions.map((action, index) => (
                  <button
                    key={index}
                    className={cn("of-card-action", action.disabled && "of-card-action-disabled")}
                    onClick={action.onAction}
                    disabled={action.disabled}
                  >
                    {action.content}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="of-card-content">
          {renderChildren()}
        </div>

        {hasFooter && (
          <div className="of-card-footer">
            {secondaryFooterActions && secondaryFooterActions.length > 0 && (
              <div className="of-card-footer-secondary">
                {secondaryFooterActions.map((action, index) => (
                  <button
                    key={index}
                    className={cn(
                      "of-card-footer-action",
                      action.destructive && "of-card-footer-action-destructive"
                    )}
                    onClick={action.onAction}
                  >
                    {action.content}
                  </button>
                ))}
              </div>
            )}
            {primaryFooterAction && (
              <button
                className={cn(
                  "of-card-footer-primary",
                  primaryFooterAction.destructive && "of-card-footer-primary-destructive"
                )}
                onClick={primaryFooterAction.onAction}
              >
                {primaryFooterAction.content}
              </button>
            )}
          </div>
        )}
      </div>
    );
  }
);
Card.displayName = "Card";

(Card as any).Section = CardSection;

export { Card, CardSection };
