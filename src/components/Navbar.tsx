import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "about()", href: "#about" },
  { label: "experience", href: "#experience" },
  { label: "publications", href: "#publications" },
  { label: "projects", href: "#projects" },
  { label: "skills", href: "#skills" },
  { label: "contact()", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex h-16 items-center justify-between">
            <a
              href="#"
              className="flex items-center gap-2 font-mono text-sm font-medium text-zinc-50 hover:text-emerald-400 transition-colors"
            >
              <Terminal className="h-4 w-4 text-emerald-400" />
              <span>rushi.dev</span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors font-mono"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-zinc-400 hover:text-emerald-400"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-zinc-950 pt-20 md:hidden"
          >
            <div className="flex flex-col items-center gap-8 p-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg text-zinc-400 hover:text-emerald-400 transition-colors font-mono"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
