import { Section, SectionHeader } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { skills } from "@/data/resume";
import { Code, Boxes, Cloud, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    items: skills.languages,
  },
  {
    title: "Frameworks",
    icon: Boxes,
    items: skills.frameworks,
  },
  {
    title: "MLOps & Tools",
    icon: Cloud,
    items: skills.mlops,
  },
  {
    title: "AI Domains",
    icon: Sparkles,
    items: skills.domains,
  },
];

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeader
        title="Skills"
        subtitle="Technologies and domains I work with"
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10">
                  <category.icon className="h-4 w-4 text-blue-500" />
                </div>
                <h3 className="font-medium text-zinc-50">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.items.map((item, iIndex) => (
                  <span
                    key={iIndex}
                    className="inline-flex items-center rounded-md border border-zinc-800 bg-zinc-950 px-2.5 py-1 text-sm text-zinc-400 transition-colors hover:border-zinc-600 hover:text-zinc-50"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
