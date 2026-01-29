import { Section, SectionHeader } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/resume";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeader
        title="Projects"
        subtitle="Selected work in AI and machine learning"
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="group h-full flex flex-col">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-zinc-50 group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    {project.subtitle}
                  </p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <p className="mt-3 text-sm text-zinc-400 flex-1">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.metrics.map((metric, mIndex) => (
                  <span
                    key={mIndex}
                    className="text-xs text-blue-500 font-mono"
                  >
                    {metric}
                    {mIndex < project.metrics.length - 1 && (
                      <span className="text-zinc-700 ml-2">|</span>
                    )}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag, tIndex) => (
                  <Badge key={tIndex} variant="default">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
