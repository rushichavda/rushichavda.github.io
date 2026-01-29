export const personalInfo = {
  name: "Rushi Chavda",
  title: "Applied AI Scientist",
  tagline: "Building intelligent systems that matter",
  email: "chavdarushi5261@gmail.com",
  phone: "+91 70169 15018",
  location: "India",
  github: "https://github.com/rushichavda",
  linkedin: "https://www.linkedin.com/in/rushi-chavda-123ryc/",
  education: {
    institution: "Indian Institute of Technology, Bombay",
    degree: "B.Tech + M.Tech (Dual Degree)",
    minor: "Data Science and Artificial Intelligence",
    period: "2020 - 2025",
    department: "Centre of Machine Intelligence and Data Science (C-MinDS)",
  },
};

export const publications = [
  {
    title: "Classification of Diagnosed Social Media Text Related to Disease Using BERT and LightGBM",
    venue: "AMIA 23rd Annual Symposium, USA",
    year: "2023",
    description: "Pioneered top-performing NLP model in Social Media Mining for Health (SMM4H-23) shared task. Achieved 0.94 F1 Score using fine-tuned BERT embeddings with LightGBM pipeline.",
    highlight: "Awarded Letter of Recommendation from Director of NIT, Surat",
  },
  {
    title: "Continuous Emotional State Modelling",
    venue: "Proceedings of National Academy of Science, USA (Under Review)",
    year: "2023-24",
    description: "Predicted human emotional state using 9 physiological signals with Decision Tree Regressor. Achieved Avg. RMSE of 1.33 across generalizing test scenarios.",
    highlight: "Human-Computer Interaction Research",
  },
];

export const experience = [
  {
    company: "NavaInsight",
    role: "Applied AI Scientist",
    period: "Oct 2025 - Present",
    type: "full-time",
    highlights: [
      "Lead end-to-end development of AI-powered value-investment platform for hedge funds",
      "Build Graph RAG, Hybrid RAG pipelines, knowledge graphs, and GNN-based modelling",
      "Fine-tune LLMs on proprietary financial datasets for research and decision-support",
      "Own full-stack implementation from API design to cloud infrastructure",
    ],
  },
  {
    company: "IBM AI Research",
    role: "Research Intern",
    period: "Jun 2024 - Nov 2024",
    type: "internship",
    highlights: [
      "Novel soil moisture estimation using Prithvi-100 Geospatial Foundation Model",
      "Processed 3 years of satellite imagery from 40 soil sensors",
      "Achieved MAE of 0.0357, RMSE of 0.055 with U-Net baseline",
      "First-authored abstract under peer review at American Geophysical Union (AGU)",
    ],
  },
  {
    company: "Harvard University",
    role: "Gen AI for Hardware Research",
    period: "May 2024 - Jul 2024",
    type: "internship",
    highlights: [
      "Developed pipeline to annotate 200M token hardware research corpus",
      "Implemented GPT-4, GPT-4o, Llama3-8b, Mistral-7b evaluation",
      "Achieved 94% F1-Score using few-shot LLM evaluation",
      "Awarded LOR from Head Professor for exemplary performance",
    ],
  },
  {
    company: "Ernst & Young (EY)",
    role: "Gen AI Intern",
    period: "Jun 2023 - Aug 2023",
    type: "internship",
    highlights: [
      "Developed POC for Automatic ESG Reporting using fine-tuned LLM",
      "Reduced cloud hosting cost by 45% using LoRA fine-tuning",
      "Achieved 86% BERTScore and 81% correctness vs gold standards",
    ],
  },
  {
    company: "Reliance JIO",
    role: "Computer Vision Intern",
    period: "Jun 2022 - Aug 2022",
    type: "internship",
    highlights: [
      "Deployed AI-based perimeter security for large-scale events",
      "Implemented Number Plate Recognition system",
      "Enhanced accuracy to 84% using advanced image processing",
    ],
  },
];

export const projects = [
  {
    title: "InstiGPT",
    subtitle: "IIT Bombay's Exclusive Chatbot",
    description: "Led AI team of 8 to build RAG-based chatbot deployed for 20,000+ students and staff",
    metrics: ["6000 weekly users", "~3 sec response time", "Zero external cost"],
    tags: ["RAG", "Gemini", "FastAPI", "Full Stack"],
  },
  {
    title: "Drug Discovery using Generative AI",
    subtitle: "Course Project",
    description: "Implemented VAE, Conditional GAN, and Graph GAN for molecular generation",
    metrics: ["9% improved reconstruction loss", "SMILE to graph pipeline"],
    tags: ["PyTorch", "VAE", "GAN", "Drug Discovery"],
  },
  {
    title: "Medical Diagnosis using LLM",
    subtitle: "Master's Thesis (Ongoing)",
    description: "Creating nano-scale medical domain expert LLMs with IIT Bombay Trust Lab CEO",
    metrics: ["Cost-efficient inference", "Domain specialization"],
    tags: ["LLM", "Healthcare", "Research"],
  },
  {
    title: "Mortality Prediction of ICU Patients",
    subtitle: "Digital Health Informatics",
    description: "Developed mortality prediction using clinical notes and medications",
    metrics: ["0.92 AUC", "Clinical Bigbird LLM"],
    tags: ["NLP", "Healthcare", "Deep Learning"],
  },
  {
    title: "Lane Detection for Autonomous Vehicles",
    subtitle: "Computer Vision",
    description: "Built robust lane detection for harsh and low visibility conditions",
    metrics: ["90% IoU", "U-Net with CBAM"],
    tags: ["Computer Vision", "U-Net", "Autonomous Driving"],
  },
];

export const skills = {
  languages: ["Python", "SQL", "R", "MATLAB"],
  frameworks: ["PyTorch", "TensorFlow", "LangChain", "FastAPI", "Gradio"],
  mlops: ["Docker", "Linux", "GitHub", "Azure AI", "Apache Spark"],
  domains: [
    "Large Language Models",
    "RAG Systems",
    "Computer Vision",
    "NLP",
    "Knowledge Graphs",
    "GNNs",
  ],
};

export const achievements = [
  { metric: "926", label: "JEE Advanced AIR", subtext: "out of 200,000+" },
  { metric: "99.59", label: "JEE Mains %ile", subtext: "among 1M+ candidates" },
  { metric: "99.80", label: "Class 10 %ile", subtext: "Gujarat State Exam" },
];
