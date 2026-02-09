import { Section, SectionHeader } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Terminal, Boxes, Cloud, Cpu } from "lucide-react";
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
  icon: typeof Terminal;
  items: SkillItem[];
  color: string;
}[] = [
  {
    title: "languages",
    icon: Terminal,
    items: [
      { name: "Python", icon: SiPython },
      { name: "SQL", icon: SiPostgresql },
      { name: "R", icon: SiR },
      { name: "MATLAB", icon: BsCodeSquare },
    ],
    color: "emerald",
  },
  {
    title: "frameworks",
    icon: Boxes,
    items: [
      { name: "PyTorch", icon: SiPytorch },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "LangChain", icon: SiLangchain },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Gradio", icon: SiOpenai },
    ],
    color: "cyan",
  },
  {
    title: "mlops",
    icon: Cloud,
    items: [
      { name: "Docker", icon: SiDocker },
      { name: "Linux", icon: SiLinux },
      { name: "GitHub", icon: SiGithub },
      { name: "Azure AI", icon: VscGraph },
      { name: "Spark", icon: SiApachespark },
    ],
    color: "violet",
  },
  {
    title: "domains",
    icon: Cpu,
    items: [
      { name: "LLMs", icon: TbBrain },
      { name: "RAG Systems", icon: TbShare3 },
      { name: "Computer Vision", icon: TbEye },
      { name: "NLP", icon: TbMessageCircle },
      { name: "Knowledge Graphs", icon: TbNetwork },
      { name: "GNNs", icon: VscGraph },
    ],
    color: "amber",
  },
];

const colorClasses = {
  emerald: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  cyan: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  violet: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  amber: "text-amber-400 bg-amber-500/10 border-amber-500/20",
};

const hoverColorClasses = {
  emerald: "hover:border-emerald-500/40 hover:text-emerald-400",
  cyan: "hover:border-cyan-500/40 hover:text-cyan-400",
  violet: "hover:border-violet-500/40 hover:text-violet-400",
  amber: "hover:border-amber-500/40 hover:text-amber-400",
};

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeader
        title="skills.json"
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
                <div className={`flex h-9 w-9 items-center justify-center rounded-lg border ${colorClasses[category.color as keyof typeof colorClasses]}`}>
                  <category.icon className="h-4 w-4" />
                </div>
                <h3 className="font-medium text-zinc-50 font-mono">
                  .{category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.items.map((item, iIndex) => (
                  <span
                    key={iIndex}
                    className={`inline-flex items-center gap-2 rounded border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 font-mono transition-all ${hoverColorClasses[category.color as keyof typeof hoverColorClasses]}`}
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
