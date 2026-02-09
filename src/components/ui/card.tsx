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
        "rounded-lg border p-6 transition-all duration-300 backdrop-blur-sm",
        hover && "hover:border-emerald-500/30",
        accent
          ? "border-emerald-500/20 bg-emerald-500/5"
          : "border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900/80",
        className
      )}
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
