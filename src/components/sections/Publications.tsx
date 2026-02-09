import { Section, SectionHeader } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { publications } from "@/data/resume";
import { FileCode, Award } from "lucide-react";

export function Publications() {
  return (
    <Section id="publications">
      <SectionHeader
        title="publications[]"
        subtitle="Peer-reviewed research in AI and healthcare"
      />

      <div className="grid gap-6">
        {publications.map((pub, index) => (
          <Card key={index} className="relative overflow-hidden">
            <div
              className="absolute top-0 right-0 h-32 w-32 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"
              style={{ backgroundColor: "rgba(16, 185, 129, 0.05)" }}
            />

            <div className="relative">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <FileCode className="h-5 w-5 text-emerald-400" />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-semibold text-zinc-50 leading-tight">
                      {pub.title}
                    </h3>
                    <Badge variant="accent" className="shrink-0">
                      {pub.year}
                    </Badge>
                  </div>

                  <p className="mt-1 text-sm text-cyan-400 font-mono">
                    {pub.venue}
                  </p>

                  <p className="mt-3 text-sm text-zinc-400">
                    {pub.description}
                  </p>

                  {pub.highlight && (
                    <div className="mt-4 flex items-center gap-2 text-xs text-emerald-400/70 font-mono">
                      <Award className="h-3.5 w-3.5" />
                      {pub.highlight}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
