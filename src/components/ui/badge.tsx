import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: "default" | "outline" | "accent";
}

export function Badge({ children, className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium transition-colors",
        variant === "default" && "bg-zinc-800 text-zinc-400",
        variant === "outline" && "border border-zinc-700 text-zinc-400",
        variant === "accent" && "bg-blue-500/10 text-blue-500",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
