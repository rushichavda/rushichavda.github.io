import { Section, SectionHeader } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { personalInfo, achievements } from "@/data/resume";
import { GraduationCap, Brain, Target } from "lucide-react";

export function About() {
  return (
    <Section id="about">
      <SectionHeader
        title="About"
        subtitle="Building AI systems that create real-world impact"
      />

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <p className="text-zinc-400 leading-relaxed">
            I'm an Applied AI Scientist with a dual degree from{" "}
            <span className="text-zinc-50">IIT Bombay</span>,
            specializing in Machine Learning and Artificial Intelligence. My work
            spans from cutting-edge research at{" "}
            <span className="text-zinc-50">IBM Research</span> and{" "}
            <span className="text-zinc-50">Harvard</span> to
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
              <GraduationCap className="h-5 w-5 text-blue-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-zinc-50">
                  {personalInfo.education.institution}
                </p>
                <p className="text-sm text-zinc-400">
                  {personalInfo.education.degree}
                </p>
                <p className="text-sm text-zinc-500">
                  Minor: {personalInfo.education.minor}
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-4">
          <div className="grid gap-4">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center">
                <p className="text-3xl font-bold text-zinc-50 font-mono">
                  {achievement.metric}
                </p>
                <p className="text-sm font-medium text-zinc-400">
                  {achievement.label}
                </p>
                <p className="text-xs text-zinc-500">
                  {achievement.subtext}
                </p>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="text-center">
              <Brain className="h-6 w-6 mx-auto mb-2 text-blue-500" />
              <p className="text-sm font-medium text-zinc-50">2 Publications</p>
              <p className="text-xs text-zinc-500">AMIA, PNAS</p>
            </Card>
            <Card className="text-center">
              <Target className="h-6 w-6 mx-auto mb-2 text-blue-500" />
              <p className="text-sm font-medium text-zinc-50">10+ Internships</p>
              <p className="text-xs text-zinc-500">IBM, Harvard, EY</p>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
}
