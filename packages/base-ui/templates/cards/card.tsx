"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

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

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("of-card-header", className)} {...props}>
        {children}
      </div>
    );
  }
);
CardHeader.displayName = "CardHeader";

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("of-card-footer", className)} {...props}>
        {children}
      </div>
    );
  }
);
CardFooter.displayName = "CardFooter";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  sectioned?: boolean;
  children?: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      title,
      sectioned = false,
      children,
      ...props
    },
    ref
  ) => {
    const childrenArray = React.Children.toArray(children);
    const hasCardHeader = childrenArray.some(
      (child) => React.isValidElement(child) && child.type === CardHeader
    );

    const headerChildren: React.ReactNode[] = [];
    const footerChildren: React.ReactNode[] = [];
    const contentChildren: React.ReactNode[] = [];

    React.Children.forEach(children, (child) => {
      if (React.isValidElement(child)) {
        if (child.type === CardHeader) {
          headerChildren.push(child);
        } else if (child.type === CardFooter) {
          footerChildren.push(child);
        } else {
          contentChildren.push(child);
        }
      } else {
        contentChildren.push(child);
      }
    });

    const renderContent = () => {
      if (contentChildren.length === 0) return null;

      if (sectioned) {
        return React.Children.map(contentChildren, (child) => {
          if (React.isValidElement(child) && child.type === CardSection) {
            return child;
          }
          return <CardSection>{child}</CardSection>;
        });
      }

      return contentChildren;
    };

    return (
      <div ref={ref} className={cn("of-card", className)} {...props}>
        {!hasCardHeader && title && (
          <div className="of-card-header">
            <h2 className="of-card-title">{title}</h2>
          </div>
        )}

        {headerChildren.length > 0 && headerChildren}

        <div className="of-card-content">
          {renderContent()}
        </div>

        {footerChildren.length > 0 && footerChildren}
      </div>
    );
  }
);
Card.displayName = "Card";

(Card as any).Section = CardSection;
(Card as any).Header = CardHeader;
(Card as any).Footer = CardFooter;

export { Card, CardSection, CardHeader, CardFooter };
