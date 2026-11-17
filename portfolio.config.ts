import type { IconType } from 'react-icons';
import {
  VscAccount,
  VscCode,
  VscEdit,
  VscGithubAlt,
  VscFiles,
  VscMail,
  VscSettings,
  VscDatabase,
  VscCloud,
} from 'react-icons/vsc';
import {
  SiPython, SiPytorch, SiHuggingface,
  SiDocker, SiGit, SiFlask,
} from 'react-icons/si';

import { Project } from '@/types';

// Everything personal about the portfolio lives here. Edit this file to make
// the template your own; pages and components read from it.

export const profile = {
  name: 'Rambod Azimi',
  role: 'AI/ML Researcher & Software Developer',
  currentPosition: 'AI Data Engineer at SoftSim',
  location: 'Montréal, Canada',
  siteUrl: 'https://rambodazimi.github.io/vscode-portfolio/',
  ogImage: 'https://avatars.githubusercontent.com/u/59399542?v=4',
  repository: 'https://github.com/rambodazimi/vscode-portfolio',
  githubUsername: 'rambodazimi',
  metaDescription: 'Rambod Azimi — AI Data Engineer at SoftSim and McGill software engineering graduate. Research in efficient LLMs, knowledge distillation, and computer vision.',
  ogDescription: 'Efficient AI research and practical software: explore my publications, projects, and experience.',
  keywords: ['Rambod Azimi', 'AI researcher', 'machine learning', 'KD-LoRA', 'knowledge distillation', 'computer vision', 'McGill', 'SoftSim'],
  intro: 'I work on efficient AI and practical software — from adapting language models to understanding images. AI Data Engineer at SoftSim, with a background in software engineering at McGill.',
  bio: [
    'I’m an AI/ML researcher and software developer based in Montréal, and an AI Data Engineer at SoftSim. I graduated from McGill University with a Bachelor of Software Engineering in 2024.',
    'My research spans efficient language models and computer vision. I explore knowledge distillation, parameter-efficient fine-tuning, and generative models, with research experience at Quantiphi, Mila, McGill, and the National Research Council Canada.',
    'I build LLM-powered applications with agentic workflows, retrieval-augmented generation, and scalable backend infrastructure. My work includes AI services at QSnxt, the ScholaRef research platform, and 41Prompts.',
  ],
  beyondCode: 'Bachelor of Software Engineering, McGill University · 2020–2024 · CGPA: 3.67/4. Academic tutor in mathematics and programming, and recipient of McGill’s 2023 Tomlinson Engagement Award for Mentoring.',
};

export interface Social {
  id: string;
  handle: string;
  href: string;
}

export const socials: Social[] = [
  { id: 'email', handle: 'rambod.azm@gmail.com', href: 'mailto:rambod.azm@gmail.com' },
  { id: 'github', handle: 'rambodazimi', href: 'https://github.com/rambodazimi' },
  { id: 'linkedin', handle: 'rambod-azimi', href: 'https://www.linkedin.com/in/rambod-azimi/' },
  { id: 'scholar', handle: 'Google Scholar', href: 'https://scholar.google.com/citations?user=1yhGHxMAAAAJ&hl=en' },
  { id: 'huggingface', handle: 'rambodazimi', href: 'https://huggingface.co/rambodazimi' },
  { id: 'website', handle: 'Research website', href: 'https://rambodazimi.github.io/' },
];

export const getSocial = (id: string) => socials.find(s => s.id === id);

export interface Experience {
  role: string;
  company?: string;
  period: string;
  highlights?: string[];
  description?: string;
}

export const experience: Experience[] = [
  { role: 'AI Data Engineer', company: 'SoftSim Technologies', period: 'Present' },
  {
    role: 'AI Software Developer', company: 'QSnxt', period: 'October 2025–October 2026',
    highlights: [
      'Designed and deployed a RAG pipeline with MongoDB ingestion, multimodal preprocessing, and query orchestration using Ollama LLM/VLM models.',
      'Developed Flask APIs for text-to-speech, speech-to-text, translation, and expense analysis.',
    ],
  },
  {
    role: 'Machine Learning Researcher', company: 'National Research Council Canada × McGill University', period: 'October 2024–October 2025',
    highlights: [
      'Optimized image-based neural networks for uncertainty reduction and model calibration.',
      'Used GANs, VAEs, diffusion models, and U-Net variants to simulate uncertainty in photonic device fabrication.',
    ],
  },
  {
    role: 'Research Engineer Intern', company: 'Quantiphi Analytics', period: 'February–July 2025',
    highlights: [
      'Built an LLM distillation pipeline supporting SeqKD, multitask learning, and ORPO, with distributed training and experiment tracking.',
      'Integrated rationale-augmented datasets through preprocessing workflows using Kubeflow and BigQuery.',
    ],
  },
  {
    role: 'Machine Learning Researcher', company: 'Mila – Quebec AI Institute', period: 'April–December 2024',
    highlights: [
      'Built an agentic AI system to evaluate excavator operator performance and answer documentation-based queries.',
      'Implemented parameter-efficient LLM fine-tuning and knowledge distillation methods.',
    ],
  },
  { role: 'Research Assistant', company: 'McGill University', period: 'January–October 2024', description: 'Applied segmentation networks and model ensembles to photonic fabrication prediction.' },
  { role: 'Research Assistant', company: 'McGill University', period: 'May–August 2024', description: 'Explored real-time object tracking and mapping for dashcam scene understanding.' },
  {
    role: 'Information Technology Intern', company: 'Walter Surface Technologies', period: 'May–August 2023',
    highlights: [
      'Developed an AI-powered invoice processing system with Python and Azure to streamline order management.',
      'Built data pipelines integrating SQL, BigQuery, and Azure Data Lake.',
    ],
  },
  {
    role: 'Network Engineer Intern', company: 'Ericsson', period: 'May–August 2022',
    highlights: [
      'Collaborated on disaster planning, CIQ and intake validation, and automation tools.',
      'Automated network data handling with Python and Bash.',
    ],
  },
];

export const startupExperience: Experience[] = [
  {
    role: 'Founding Engineer', company: 'ScholaRef', period: 'Startup experience',
    highlights: [
      'Architected an academic research platform with more than 20 specialized AI agents.',
      'Built Flask APIs and MongoDB RAG pipelines supporting millions of documents, with local Ollama models and Celery task processing.',
      'Developed multi-reviewer simulation, OpenAlex/Crossref paper retrieval, structured reports, and Stripe integration.',
    ],
  },
  {
    role: 'Co-Founder & CTO', company: '41Prompts', period: 'Startup experience',
    highlights: [
      'Launched a browser-based AI prompt optimization assistant with real-time suggestions.',
      'Built a modular architecture for LLM backends, prompt chaining, and testing workflows.',
      'Deployed cloud services with scalable APIs, caching, and Docker pipelines.',
    ],
  },
];

// Your skills, shown as installed extensions in the Extensions view. Each one
// gets a detail page at /extensions/<id>.
export interface Extension {
  id: string;
  name: string;
  publisher: string;
  category: string;
  icon: IconType;
  // Brand color for the icon
  color: string;
  // One-liner shown in the extensions list
  description: string;
  // Longer write-up shown on the extension's detail page
  details?: string;
  // Shown where VS Code shows the version, e.g. "4 years"
  experience?: string;
}

// Skills from Rambod's May 2026 résumé. Each is also an explorable editor extension.
const skillGroups: { category: string; icon: IconType; color: string; names: string[]; description: string }[] = [
  { category: 'Programming', icon: SiPython, color: '#3776ab', names: ['Python', 'SQL', 'Java', 'C/C++', 'Bash', 'JavaScript', 'HTML/CSS'], description: 'Programming languages used across software engineering, automation, and research.' },
  { category: 'AI & LLM Engineering', icon: SiHuggingface, color: '#ffd21e', names: ['PyTorch', 'TensorFlow', 'Transformers', 'PEFT', 'RAG', 'Prompt Engineering', 'Agentic Workflows'], description: 'Building intelligent applications with language models, retrieval, and efficient adaptation.' },
  { category: 'Data & ML', icon: SiPytorch, color: '#ee4c2c', names: ['Scikit-learn', 'Pandas', 'NumPy', 'OpenCV', 'VAEs', 'GANs', 'Feature Engineering', 'Model Evaluation'], description: 'Data preparation, generative modeling, computer vision, and experimental evaluation.' },
  { category: 'LLMOps & MLOps', icon: SiDocker, color: '#2496ed', names: ['Docker', 'Kubernetes', 'MLflow', 'Weights & Biases', 'Airflow', 'Kubeflow', 'CI/CD Pipelines'], description: 'Reproducible training, workflow orchestration, experiment tracking, and deployment.' },
  { category: 'Backend & Systems', icon: SiFlask, color: '#ffffff', names: ['Flask', 'FastAPI', 'Django', 'REST APIs', 'Microservices', 'Async Processing', 'System Design'], description: 'Designing APIs and backend systems for scalable AI-powered applications.' },
  { category: 'Cloud & Infrastructure', icon: VscCloud, color: '#58a6ff', names: ['AWS', 'GCP', 'BigQuery', 'PostgreSQL', 'Data Pipelines', 'Distributed Systems'], description: 'Cloud infrastructure and data systems for production and research workloads.' },
  { category: 'Tools & DevOps', icon: SiGit, color: '#f05032', names: ['Git', 'GitLab', 'Bitbucket', 'Linux/Unix', 'Postman', 'Pytest', 'Selenium', 'Jira'], description: 'Version control, testing, development environments, and team collaboration.' },
  { category: 'Applied at Work', icon: VscDatabase, color: '#47a248', names: ['MongoDB', 'Ollama', 'Celery', 'Microsoft Azure', 'Azure Data Lake'], description: 'Technologies applied in RAG systems, asynchronous AI services, and data pipelines.' },
];

const skillIds: Record<string, string> = { 'C/C++': 'cpp', 'HTML/CSS': 'html-css', 'Linux/Unix': 'linux' };

export const extensions: Extension[] = skillGroups.flatMap(group =>
  group.names.map(name => ({
    id: skillIds[name] ?? name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, ''),
    name,
    publisher: 'Rambod Azimi',
    category: group.category,
    icon: group.icon,
    color: group.color,
    description: group.description,
    details: `${name} is part of my ${group.category.toLowerCase()} toolkit. ${group.description}`,
  }))
);

export const getExtension = (id: string) => extensions.find(e => e.id === id);

// Extension names grouped by category, in the order they're listed above
export const skills = extensions.reduce<Record<string, string[]>>(
  (groups, { category, name }) => {
    (groups[category] ??= []).push(name);
    return groups;
  },
  {}
);

export const publications = [
  {
    id: 'gen-fab', year: '2026', venue: 'Structural and Multidisciplinary Optimization',
    title: 'Gen-Fab: A Variation-Aware Generative Model for Predicting Fabrication Variations in Nanophotonic Devices',
    description: 'A conditional generative model that predicts diverse photonic fabrication outcomes and models their uncertainty.',
    authors: 'Rambod Azimi, Yuri Grinberg, Dan-Xia Xu, and Odile Liboiron-Ladouceur',
    url: 'https://link.springer.com/article/10.1007/s00158-026-04272-3',
  },
  {
    id: 'semu-net', year: '2025', venue: 'IEEE/CVF WACV',
    title: 'SEMU-Net: A Segmentation-Based Corrector for Fabrication Process Variations of Nanophotonics with Microscopic Images',
    description: 'A segmentation approach to correcting fabrication variations in nanophotonic devices using microscopic imagery.',
    authors: 'Rambod Azimi, Yijian Kong, Dusan Gostimirovic, James J. Clark, and Odile Liboiron-Ladouceur',
    url: 'https://arxiv.org/abs/2411.16973',
  },
  {
    id: 'kd-lora', year: '2024', venue: 'NeurIPS ENLSP Workshop · PMLR',
    title: 'KD-LoRA: A Hybrid Approach to Efficient Fine-Tuning with LoRA and Knowledge Distillation',
    description: 'Combining low-rank adaptation and knowledge distillation to make language-model fine-tuning more resource-efficient.',
    authors: 'Rambod Azimi, Rishav Rishav, Marek Teichmann, and Samira Ebrahimi Kahou',
    url: 'https://proceedings.mlr.press/v262/azimi24a.html',
  },
];

export const writing = publications.map(paper => ({ name: `${paper.id === 'kd-lora' ? 'KD-LoRA' : paper.id === 'semu-net' ? 'SEMU-Net' : 'Gen-Fab'} · ${paper.year}`, href: paper.url }));

export const projects: Project[] = [
  { title: 'KD-LoRA', description: 'Official implementation of my research combining LoRA and knowledge distillation for efficient language-model fine-tuning.', logo: '/logos/code.svg', link: 'https://github.com/rambodazimi/KD-LoRA', slug: 'kd-lora' },
  { title: 'Dashcam Object Tracking', description: 'Analyzing dashcam footage to track moving and parked cars, pedestrians, and the surrounding scene.', logo: '/logos/code.svg', link: 'https://github.com/rambodazimi/Dashcam-Object-Tracking-System', slug: 'dashcam' },
  { title: 'AI Game Agent', description: 'An artificial intelligence game-agent project implemented in Python.', logo: '/logos/code.svg', link: 'https://github.com/rambodazimi/AI-Game-Agent', slug: 'ai-game-agent' },
  { title: 'OS Simulation', description: 'An operating-system simulation with shell commands, demand paging, and process scheduling.', logo: '/logos/code.svg', link: 'https://github.com/rambodazimi/OS-simulation', slug: 'os-simulation' },
  { title: 'Arena Ticketing System', description: 'A Java and database course project for arena ticketing, developed for COMP 421.', logo: '/logos/code.svg', link: 'https://github.com/rambodazimi/Arena-Ticketing-System', slug: 'arena-ticketing' },
];

export interface Route {
  path: string;
  label: string;
  // Activity bar and command palette icon
  icon: IconType;
  // Where the route's icon sits in the activity bar, if at all
  activityBar?: 'top' | 'bottom';
  // Second key of the "G <key>" navigation chord
  shortcut?: string;
  // Routes with a file appear in the explorer and tabs bar
  file?: {
    name: string;
    icon: string;
  };
}

export const routes: Route[] = [
  {
    path: '/',
    label: 'Home',
    icon: VscFiles,
    activityBar: 'top',
    shortcut: 'h',
    file: { name: 'home.tsx', icon: '/logos/react_icon.svg' },
  },
  {
    path: '/about',
    label: 'About',
    icon: VscAccount,
    activityBar: 'bottom',
    shortcut: 'a',
    file: { name: 'about.html', icon: '/logos/html_icon.svg' },
  },
  {
    path: '/contact',
    label: 'Contact',
    icon: VscMail,
    activityBar: 'top',
    shortcut: 'c',
    file: { name: 'contact.css', icon: '/logos/css_icon.svg' },
  },
  {
    path: '/projects',
    label: 'Projects',
    icon: VscCode,
    activityBar: 'top',
    shortcut: 'p',
    file: { name: 'projects.js', icon: '/logos/js_icon.svg' },
  },
  {
    path: '/articles',
    label: 'Research',
    icon: VscEdit,
    activityBar: 'top',
    shortcut: 'r',
    file: { name: 'research.json', icon: '/logos/json_icon.svg' },
  },
  {
    path: '/github',
    label: 'GitHub',
    icon: VscGithubAlt,
    activityBar: 'top',
    shortcut: 'g',
    file: { name: 'github.md', icon: '/logos/markdown_icon.svg' },
  },
  {
    path: '/settings',
    label: 'Settings',
    icon: VscSettings,
    activityBar: 'bottom',
    shortcut: 's',
  },
];

export const fileRoutes = routes.filter(
  (route): route is Route & { file: NonNullable<Route['file']> } =>
    route.file !== undefined
);
