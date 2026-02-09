import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/resume";
import { Mail, Github, Linkedin, Send } from "lucide-react";

export function Contact() {
  return (
    <Section id="contact" className="pb-32">
      <SectionHeader
        title="contact()"
        subtitle="Let's build something intelligent together"
      />

      <div className="max-w-xl">
        <div className="font-mono text-sm mb-6">
          <span className="text-violet-400">async function</span>{" "}
          <span className="text-cyan-400">getInTouch</span>
          <span className="text-zinc-500">()</span>{" "}
          <span className="text-zinc-500">{"{"}</span>
          <br />
          <span className="text-zinc-400 pl-4">
            <span className="text-violet-400">return</span>{" "}
            <span className="text-amber-400">"Always open to collaboration"</span>;
          </span>
          <br />
          <span className="text-zinc-500">{"}"}</span>
        </div>

        <p className="text-zinc-400 mb-8">
          I'm always interested in discussing AI research, collaborating on
          projects, or exploring new opportunities. Feel free to reach out.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <a href={`mailto:${personalInfo.email}`} className="flex-1">
            <Button variant="default" size="lg" className="w-full bg-emerald-500 hover:bg-emerald-600 text-zinc-950">
              <Mail className="h-4 w-4" />
              Send Email
              <Send className="h-4 w-4" />
            </Button>
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button variant="outline" size="lg" className="w-full border-zinc-700 hover:border-emerald-500/50 hover:bg-emerald-500/10">
              <Github className="h-4 w-4" />
              GitHub
            </Button>
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button variant="outline" size="lg" className="w-full border-zinc-700 hover:border-cyan-500/50 hover:bg-cyan-500/10">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </Button>
          </a>
        </div>

        <p className="mt-8 text-sm text-emerald-400/70 font-mono">
          $ echo {personalInfo.email}
        </p>
      </div>
    </Section>
  );
}
