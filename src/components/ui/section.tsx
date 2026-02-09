import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn("py-20 md:py-28", className)}
    >
      <div className="mx-auto max-w-5xl px-6">{children}</div>
    </motion.section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-emerald-400 font-mono text-sm">#</span>
        <h2 className="text-2xl font-bold tracking-tight text-zinc-50 md:text-3xl font-mono">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="mt-2 text-zinc-400 pl-6">{subtitle}</p>
      )}
      <div className="mt-4 h-px w-20 bg-gradient-to-r from-emerald-500 to-cyan-500" />
    </div>
  );
}
