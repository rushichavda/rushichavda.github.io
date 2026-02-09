import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypingEffectProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  cursor?: boolean;
}

export function TypingEffect({
  text,
  className = "",
  speed = 100,
  delay = 0,
  cursor = true,
}: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const startTyping = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(startTyping);
  }, [delay]);

  useEffect(() => {
    if (!isTyping) return;

    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [displayedText, isTyping, text, speed]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={className}>
      {displayedText}
      {cursor && (
        <motion.span
          className="inline-block w-[3px] h-[1em] ml-1 bg-emerald-400 align-middle"
          style={{ opacity: showCursor ? 1 : 0 }}
        />
      )}
    </span>
  );
}

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
}

export function CodeBlock({ children, className = "" }: CodeBlockProps) {
  return (
    <div className={`font-mono text-sm ${className}`}>
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-zinc-800">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-2 text-xs text-zinc-500">~/portfolio</span>
      </div>
      {children}
    </div>
  );
}

export function CodeLine({
  prompt = "$",
  command,
  output,
  delay = 0
}: {
  prompt?: string;
  command: string;
  output?: string;
  delay?: number;
}) {
  const [showOutput, setShowOutput] = useState(false);

  useEffect(() => {
    if (output) {
      const timeout = setTimeout(() => {
        setShowOutput(true);
      }, delay + command.length * 50 + 500);
      return () => clearTimeout(timeout);
    }
  }, [output, delay, command.length]);

  return (
    <div className="mb-2">
      <div className="flex items-center gap-2">
        <span className="text-emerald-400">{prompt}</span>
        <TypingEffect
          text={command}
          delay={delay}
          speed={50}
          cursor={!output || !showOutput}
          className="text-zinc-300"
        />
      </div>
      {showOutput && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-zinc-500 pl-4 mt-1"
        >
          {output}
        </motion.div>
      )}
    </div>
  );
}
