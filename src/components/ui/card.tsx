import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
  accent?: boolean;
}

export function Card({ children, className, hover = true, accent = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border p-6 transition-all duration-300",
        hover && "hover:border-zinc-600",
        className
      )}
      style={{
        borderColor: accent ? "rgba(59, 130, 246, 0.2)" : "#27272a",
        backgroundColor: accent ? "rgba(59, 130, 246, 0.05)" : "#18181b",
      }}
      onMouseEnter={(e) => {
        if (hover && !accent) {
          e.currentTarget.style.backgroundColor = "#1f1f23";
        }
      }}
      onMouseLeave={(e) => {
        if (hover && !accent) {
          e.currentTarget.style.backgroundColor = "#18181b";
        }
      }}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mb-4", className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={cn("text-lg font-semibold text-zinc-50", className)} {...props}>
      {children}
    </h3>
  );
}

export function CardDescription({ children, className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-sm text-zinc-400", className)} {...props}>
      {children}
    </p>
  );
}

export function CardContent({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("", className)} {...props}>
      {children}
    </div>
  );
}
