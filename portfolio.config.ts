import type { IconType } from 'react-icons';
import {
  VscAccount,
  VscCode,
  VscEdit,
  VscGithubAlt,
  VscFiles,
  VscMail,
  VscSettings,
} from 'react-icons/vsc';
import {
  SiPython, SiPytorch, SiTensorflow, SiHuggingface, SiScikitlearn,
  SiCplusplus, SiPostgresql, SiFlask, SiDocker, SiGit, SiLinux,
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
    'I enjoy connecting experiments to working software, including AI agents, retrieval-augmented generation, backend services, and automation.',
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
  { role: 'Research Engineer Intern', company: 'Quantiphi', period: 'February–July 2025', description: 'Worked on knowledge distillation and generative models for efficient inference, data generation, and domain adaptation.' },
  { role: 'Research Assistant · Machine Learning', company: 'National Research Council Canada × McGill University', period: 'October 2024–August 2025', description: 'Studied fabrication variability in photonic devices using generative models and uncertainty estimation.' },
  { role: 'Collaborating Researcher', company: 'Mila – Quebec AI Institute', period: 'April–December 2024', description: 'Investigated efficient language-model adaptation, including LoRA and knowledge distillation, and worked on AI agents for simulator evaluation.' },
  { role: 'Research Assistant', company: 'McGill University', period: 'January–October 2024', description: 'Applied segmentation networks and model ensembles to photonic fabrication prediction.' },
  { role: 'Research Assistant', company: 'McGill University', period: 'May–August 2024', description: 'Explored real-time object tracking and mapping for dashcam scene understanding.' },
  { role: 'Information Technology Intern', company: 'Walter Surface Technologies', period: 'May–August 2023', description: 'Developed automation tools for document recognition, barcodes, and OCR.' },
  { role: 'Network Engineer Intern', company: 'Ericsson', period: 'May–August 2022', description: 'Supported RF network quality through data validation and analysis.' },
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

export const extensions: Extension[] = [
  { id: 'python', name: 'Python', publisher: 'Python Software Foundation', category: 'Languages', icon: SiPython, color: '#3776ab', description: 'Research experiments, machine learning pipelines, and backend automation.' },
  { id: 'cpp', name: 'C / C++', publisher: 'ISO', category: 'Languages', icon: SiCplusplus, color: '#659ad2', description: 'Systems programming, memory management, and performance-oriented development.' },
  { id: 'pytorch', name: 'PyTorch', publisher: 'PyTorch Foundation', category: 'Machine Learning', icon: SiPytorch, color: '#ee4c2c', description: 'Deep learning experiments, model training, and knowledge distillation.' },
  { id: 'tensorflow', name: 'TensorFlow', publisher: 'Google', category: 'Machine Learning', icon: SiTensorflow, color: '#ff6f00', description: 'Neural networks and computer vision models.' },
  { id: 'transformers', name: 'Transformers', publisher: 'Hugging Face', category: 'Machine Learning', icon: SiHuggingface, color: '#ffd21e', description: 'Language models, LoRA fine-tuning, and model sharing.', details: 'My KD-LoRA work combines low-rank adaptation with knowledge distillation. My Hugging Face profile hosts fine-tuned models for NLP benchmarks.' },
  { id: 'scikit-learn', name: 'scikit-learn', publisher: 'scikit-learn', category: 'Machine Learning', icon: SiScikitlearn, color: '#f7931e', description: 'Classical machine learning, evaluation, and data analysis.' },
  { id: 'postgresql', name: 'SQL / PostgreSQL', publisher: 'PostgreSQL', category: 'Backend & Data', icon: SiPostgresql, color: '#4169e1', description: 'Relational data modeling and database-backed applications.' },
  { id: 'flask', name: 'Flask', publisher: 'Pallets', category: 'Backend & Data', icon: SiFlask, color: '#ffffff', description: 'Python APIs and web services for software projects.' },
  { id: 'docker', name: 'Docker', publisher: 'Docker', category: 'Tools', icon: SiDocker, color: '#2496ed', description: 'Reproducible environments and containerized applications.' },
  { id: 'git', name: 'Git', publisher: 'Software Freedom Conservancy', category: 'Tools', icon: SiGit, color: '#f05032', description: 'Version control for research code and collaborative software development.' },
  { id: 'linux', name: 'Linux', publisher: 'Linux community', category: 'Tools', icon: SiLinux, color: '#fcc624', description: 'Development environments, shell scripting, and systems tooling.' },
];

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
