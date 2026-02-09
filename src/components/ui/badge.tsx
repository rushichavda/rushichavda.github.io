import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: "default" | "outline" | "accent" | "cyan" | "violet";
}

export function Badge({ children, className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium font-mono transition-colors",
        variant === "default" && "bg-zinc-800 text-zinc-400",
        variant === "outline" && "border border-zinc-700 text-zinc-400",
        variant === "accent" && "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
        variant === "cyan" && "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
        variant === "violet" && "bg-violet-500/10 text-violet-400 border border-violet-500/20",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
