import { personalInfo } from "@/data/resume";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-8">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-zinc-500 font-mono">
            <span className="text-emerald-400">©</span> {new Date().getFullYear()} {personalInfo.name}
          </p>
          <p className="text-xs text-zinc-600 font-mono">
            <span className="text-zinc-500">{"// "}</span>
            Built with React + Tailwind + Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
