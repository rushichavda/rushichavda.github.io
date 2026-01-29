import { Section, SectionHeader } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/data/resume";
import { Briefcase, Building2 } from "lucide-react";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeader
        title="Experience"
        subtitle="From research labs to production systems"
      />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-800 md:left-[11px]" />

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 flex h-[22px] w-[22px] items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 md:left-0">
                {exp.type === "full-time" ? (
                  <Briefcase className="h-3 w-3 text-blue-500" />
                ) : (
                  <Building2 className="h-3 w-3 text-zinc-500" />
                )}
              </div>

              <Card>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-semibold text-zinc-50">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-blue-500">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={exp.type === "full-time" ? "accent" : "outline"}>
                      {exp.type === "full-time" ? "Full-time" : "Internship"}
                    </Badge>
                    <span className="text-xs text-zinc-500 font-mono">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <ul className="mt-4 space-y-2">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li
                      key={hIndex}
                      className="flex items-start gap-2 text-sm text-zinc-400"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-500" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
