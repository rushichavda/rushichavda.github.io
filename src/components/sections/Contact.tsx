import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/resume";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <Section id="contact" className="pb-32">
      <SectionHeader
        title="Get in Touch"
        subtitle="Let's build something intelligent together"
      />

      <div className="max-w-xl">
        <p className="text-zinc-400 mb-8">
          I'm always interested in discussing AI research, collaborating on
          projects, or exploring new opportunities. Feel free to reach out.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <a href={`mailto:${personalInfo.email}`}>
            <Button variant="default" size="lg" className="w-full whitespace-nowrap">
              <Mail className="h-4 w-4" />
              Send an Email
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg" className="w-full whitespace-nowrap">
              <Github className="h-4 w-4" />
              GitHub
            </Button>
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg" className="w-full whitespace-nowrap">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </Button>
          </a>
        </div>

        <p className="mt-8 text-sm text-zinc-500 font-mono">
          {personalInfo.email}
        </p>
      </div>
    </Section>
  );
}
