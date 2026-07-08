import {
  Code2,
  Database,
  Github,
  Globe2,
  Layers3,
  Mail,
  Rocket,
  Sparkles,
  TerminalSquare,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Profile = {
  name: string;
  role: string;
  email: string;
  github: string;
  linkedin: string;
  headline: string;
  subtitle: string;
  location: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type Highlight = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Project = {
  name: string;
  description: string;
  stack: string[];
  liveUrl: string;
  githubUrl: string;
};

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

export type ExperienceItem = {
  period: string;
  title: string;
  description: string;
  tags: string[];
};

export const profile: Profile = {
  name: "Muazzam",
  role: "Software Engineer",
  email: "muazzamhazmiii@gmail.com",
  github: "https://github.com/zactsm",
  linkedin: "https://linkedin.com/in/muazzam-hazmi",
  headline: "Building modern web apps with clean interfaces and sharp performance.",
  subtitle:
    "I create responsive, practical web experiences with React, Next.js, TypeScript, and Tailwind CSS. My focus is simple: polished UI, reliable code, and fast deployment.",
  location: "Malaysia",
};

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = [
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "LinkedIn", href: profile.linkedin, icon: Globe2 },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
];

export const highlights: Highlight[] = [
  {
    title: "Responsive Design",
    description:
      "Interfaces that hold up across phones, tablets, laptops, and wide displays.",
    icon: Layers3,
  },
  {
    title: "Clean Code",
    description:
      "Typed, component-driven implementation with readable structure and reusable data.",
    icon: Code2,
  },
  {
    title: "Fast Deployment",
    description:
      "Vercel-ready builds with a focus on smooth delivery and maintainable updates.",
    icon: Rocket,
  },
];

export const projects: Project[] = [
  {
    name: "TaskFlow Studio",
    description:
      "A task management workspace with project boards, priority tags, quick filters, and a focused dashboard for daily planning.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
    liveUrl: "https://example.com/taskflow",
    githubUrl: "https://github.com/yourusername/taskflow",
  },
  {
    name: "Portfolio System",
    description:
      "A polished personal portfolio with reusable sections, smooth scrolling, strong project cards, and a performance-conscious dark UI.",
    stack: ["Next.js", "Tailwind CSS", "GSAP", "Vercel"],
    liveUrl: "https://example.com/portfolio",
    githubUrl: "https://github.com/yourusername/portfolio",
  },
  {
    name: "LaunchPad SaaS",
    description:
      "A modern SaaS landing page concept with conversion-focused sections, responsive pricing blocks, and clean product messaging.",
    stack: ["Next.js", "TypeScript", "Figma", "Vercel"],
    liveUrl: "https://example.com/launchpad",
    githubUrl: "https://github.com/yourusername/launchpad",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: Sparkles,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend / Database",
    icon: Database,
    skills: ["Node.js", "Supabase", "PostgreSQL"],
  },
  {
    title: "Tools",
    icon: TerminalSquare,
    skills: ["Git", "GitHub", "Vercel", "Figma"],
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    period: "Current",
    title: "Built frontend projects with React and Next.js",
    description:
      "Created component-based interfaces that emphasize reusable layouts, modern styling, and responsive behavior.",
    tags: ["React", "Next.js", "Components"],
  },
  {
    period: "Practice",
    title: "Practiced responsive UI and accessibility",
    description:
      "Focused on layouts that scan well, buttons and links that are clear, and interfaces that remain usable across screen sizes.",
    tags: ["Responsive UI", "Accessibility", "Tailwind"],
  },
  {
    period: "Deployment",
    title: "Deployed projects with Vercel",
    description:
      "Prepared frontend projects for production using clean builds, sensible metadata, and Vercel-friendly structure.",
    tags: ["Vercel", "Performance", "Production"],
  },
];

export const currentFocus = [
  "Frontend development",
  "Clean UI systems",
  "Performance-minded interfaces",
  "Practical web applications",
];

export const replaceableContent = [
  "Name, role, email, GitHub, and LinkedIn in src/lib/portfolio.ts",
  "Project names, descriptions, demo links, and repository links",
  "Skills, timeline items, and about section focus areas",
];
