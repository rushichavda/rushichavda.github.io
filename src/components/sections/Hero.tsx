import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypingEffect, CodeBlock, CodeLine } from "@/components/ui/typing-effect";
import { personalInfo } from "@/data/resume";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Matrix-like grid background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(16, 185, 129, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Floating code particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-emerald-500/20 font-mono text-xs select-none"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: -20,
              opacity: 0,
            }}
            animate={{
              y: typeof window !== 'undefined' ? window.innerHeight + 20 : 1000,
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          >
            {["</>", "{}", "[]", "=>", "AI", "ML", "0x", "//", "&&", "||"][i % 10]}
          </motion.div>
        ))}
      </div>

      {/* Gradient orbs */}
      <div
        className="absolute top-1/4 left-1/4 h-[400px] w-[400px] rounded-full blur-[150px]"
        style={{ backgroundColor: "rgba(16, 185, 129, 0.08)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 h-[300px] w-[300px] rounded-full blur-[120px]"
        style={{ backgroundColor: "rgba(6, 182, 212, 0.06)" }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Main content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-6"
            >
              <Terminal className="h-5 w-5 text-emerald-400" />
              <span className="font-mono text-sm text-emerald-400">
                ~/hello-world
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl md:text-6xl">
                <TypingEffect
                  text={personalInfo.name}
                  speed={120}
                  delay={500}
                />
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-4"
            >
              <span className="text-xl text-zinc-400 font-mono">
                <span className="text-emerald-400">const</span>{" "}
                <span className="text-cyan-400">role</span>{" "}
                <span className="text-zinc-500">=</span>{" "}
                <span className="text-amber-400">"{personalInfo.title}"</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 text-lg text-zinc-400 leading-relaxed"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-4 flex items-center gap-2 text-sm"
            >
              <span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 font-mono text-xs">
                IIT Bombay
              </span>
              <span className="px-2 py-1 rounded bg-cyan-500/10 text-cyan-400 font-mono text-xs">
                AI/ML
              </span>
              <span className="px-2 py-1 rounded bg-violet-500/10 text-violet-400 font-mono text-xs">
                Full Stack
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="md" className="border-emerald-500/30 hover:border-emerald-500/60 hover:bg-emerald-500/10">
                  <Github className="h-4 w-4" />
                  GitHub
                </Button>
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="md" className="border-cyan-500/30 hover:border-cyan-500/60 hover:bg-cyan-500/10">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Button>
              </a>
              <a href={`mailto:${personalInfo.email}`}>
                <Button variant="outline" size="md" className="border-violet-500/30 hover:border-violet-500/60 hover:bg-violet-500/10">
                  <Mail className="h-4 w-4" />
                  Email
                </Button>
              </a>
              <a href="/Rushi_Chavda.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="default" size="md" className="bg-emerald-500 hover:bg-emerald-600 text-zinc-950">
                  <FileText className="h-4 w-4" />
                  Resume
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Right side - Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden md:block"
          >
            <div className="rounded-lg border border-zinc-800 bg-zinc-900/80 backdrop-blur-sm p-4 shadow-2xl">
              <CodeBlock>
                <CodeLine
                  command="whoami"
                  output="Rushi Chavda"
                  delay={1500}
                />
                <CodeLine
                  command="cat skills.json | jq '.primary'"
                  output='["LLMs", "RAG", "Computer Vision", "NLP"]'
                  delay={3500}
                />
                <CodeLine
                  command="echo $CURRENT_ROLE"
                  output="Applied AI Scientist @ NavaInsight"
                  delay={6000}
                />
                <CodeLine
                  command="git log --oneline -1 education"
                  output="IIT Bombay • B.Tech + M.Tech • AI/ML Minor"
                  delay={8500}
                />
              </CodeBlock>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
