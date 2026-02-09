import { Section, SectionHeader } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Code, Boxes, Cloud, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import {
  SiPython,
  SiPostgresql,
  SiR,
  SiPytorch,
  SiTensorflow,
  SiDocker,
  SiLinux,
  SiGithub,
  SiApachespark,
  SiFastapi,
  SiOpenai,
  SiLangchain,
} from "react-icons/si";
import { TbBrain, TbEye, TbMessageCircle, TbShare3, TbNetwork } from "react-icons/tb";
import { VscGraph } from "react-icons/vsc";
import { BsCodeSquare } from "react-icons/bs";
import type { IconType } from "react-icons";

interface SkillItem {
  name: string;
  icon?: IconType;
}

const skillCategories: {
  title: string;
  icon: typeof Code;
  items: SkillItem[];
}[] = [
  {
    title: "Languages",
    icon: Code,
    items: [
      { name: "Python", icon: SiPython },
      { name: "SQL", icon: SiPostgresql },
      { name: "R", icon: SiR },
      { name: "MATLAB", icon: BsCodeSquare },
    ],
  },
  {
    title: "Frameworks",
    icon: Boxes,
    items: [
      { name: "PyTorch", icon: SiPytorch },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "LangChain", icon: SiLangchain },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Gradio", icon: SiOpenai },
    ],
  },
  {
    title: "MLOps & Tools",
    icon: Cloud,
    items: [
      { name: "Docker", icon: SiDocker },
      { name: "Linux", icon: SiLinux },
      { name: "GitHub", icon: SiGithub },
      { name: "Azure AI", icon: VscGraph },
      { name: "Spark", icon: SiApachespark },
    ],
  },
  {
    title: "AI Domains",
    icon: Sparkles,
    items: [
      { name: "LLMs", icon: TbBrain },
      { name: "RAG Systems", icon: TbShare3 },
      { name: "Computer Vision", icon: TbEye },
      { name: "NLP", icon: TbMessageCircle },
      { name: "Knowledge Graphs", icon: TbNetwork },
      { name: "GNNs", icon: VscGraph },
    ],
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
                    className="inline-flex items-center gap-2 rounded-md border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-sm text-zinc-400 transition-colors hover:border-blue-500/40 hover:text-blue-400"
                  >
                    {item.icon && <item.icon className="h-4 w-4" />}
                    {item.name}
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
