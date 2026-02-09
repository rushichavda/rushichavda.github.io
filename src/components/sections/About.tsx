import { Section, SectionHeader } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { personalInfo, achievements } from "@/data/resume";
import { GraduationCap, Brain, Code } from "lucide-react";

export function About() {
  return (
    <Section id="about">
      <SectionHeader
        title="about()"
        subtitle="Building AI systems that create real-world impact"
      />

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <div className="font-mono text-sm text-zinc-500 mb-4">
            <span className="text-violet-400">/**</span>
            <br />
            <span className="text-zinc-400 pl-2">* Applied AI Scientist passionate about</span>
            <br />
            <span className="text-zinc-400 pl-2">* intelligent systems and real-world impact</span>
            <br />
            <span className="text-violet-400">*/</span>
          </div>

          <p className="text-zinc-400 leading-relaxed">
            I'm an Applied AI Scientist with a dual degree from{" "}
            <span className="text-emerald-400 font-mono">IIT_Bombay</span>,
            specializing in Machine Learning and Artificial Intelligence. My work
            spans from cutting-edge research at{" "}
            <span className="text-cyan-400 font-mono">IBM_Research</span> and{" "}
            <span className="text-cyan-400 font-mono">Harvard</span> to
            building production AI systems at startups.
          </p>

          <p className="text-zinc-400 leading-relaxed">
            Currently, I'm leading AI development at NavaInsight, architecting
            Graph RAG systems and knowledge graphs for hedge fund analytics. My
            research interests include LLM optimization, multimodal learning, and
            domain-specific AI applications in healthcare and finance.
          </p>

          <Card accent>
            <div className="flex items-start gap-4">
              <GraduationCap className="h-5 w-5 text-emerald-400 mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-zinc-50 font-mono">
                  {personalInfo.education.institution}
                </p>
                <p className="text-sm text-zinc-400">
                  {personalInfo.education.degree}
                </p>
                <p className="text-sm text-emerald-400/70 font-mono">
                  // Minor: {personalInfo.education.minor}
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-4">
          <div className="grid gap-4">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center">
                <p className="text-3xl font-bold text-emerald-400 font-mono">
                  {achievement.metric}
                </p>
                <p className="text-sm font-medium text-zinc-300">
                  {achievement.label}
                </p>
                <p className="text-xs text-zinc-500 font-mono">
                  // {achievement.subtext}
                </p>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="text-center">
              <Brain className="h-6 w-6 mx-auto mb-2 text-cyan-400" />
              <p className="text-sm font-medium text-zinc-50">2 Publications</p>
              <p className="text-xs text-zinc-500 font-mono">AMIA, PNAS</p>
            </Card>
            <Card className="text-center">
              <Code className="h-6 w-6 mx-auto mb-2 text-violet-400" />
              <p className="text-sm font-medium text-zinc-50">10+ Internships</p>
              <p className="text-xs text-zinc-500 font-mono">IBM, Harvard, EY</p>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
}
