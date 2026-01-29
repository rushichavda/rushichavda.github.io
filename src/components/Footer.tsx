import { personalInfo } from "@/data/resume";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-8">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-zinc-500">
            {new Date().getFullYear()} {personalInfo.name}
          </p>
          <p className="text-xs text-zinc-500 font-mono">
            Built with React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
