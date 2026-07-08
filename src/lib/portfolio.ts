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
  liveLabel?: string;
  githubLabel?: string;
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
  name: "Muazzam Hazmi",
  role: "Software Engineer",
  email: "muazzamhazmiii@gmail.com",
  github: "https://github.com/zactsm",
  linkedin: "https://linkedin.com/in/muazzam-hazmi",
  headline: "Building secure web platforms, cloud-backed systems, and practical user experiences.",
  subtitle:
    "I am an IT graduate specializing in software engineering and cybersecurity, with hands-on experience across React, PHP, Flutter, MySQL, Docker, Cloudflare, and Google Cloud Platform.",
  location: "Shah Alam, Selangor, Malaysia",
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
    title: "Secure Web Apps",
    description:
      "Full-stack applications with authentication, payload sanitization, database-backed user flows, and practical security hardening.",
    icon: Layers3,
  },
  {
    title: "System Recovery",
    description:
      "Hands-on support experience with troubleshooting, MySQL recovery, data integrity checks, and production issue handling.",
    icon: Code2,
  },
  {
    title: "Cloud Delivery",
    description:
      "Experience deploying Dockerized apps, Cloudflare-protected systems, and Google Cloud Platform backend services.",
    icon: Rocket,
  },
];

export const projects: Project[] = [
  {
    name: "FF Portal",
    description:
      "A full-stack financial learning portal featuring Google OAuth 2.0, gamified progression, quizzes, referrals, analytics, secure MySQL-backed user management, and a Gemini RAG AI chatbot for contextual financial queries.",
    stack: ["React", "PHP", "MySQL", "Docker", "Cloudflare WAF", "Gemini API"],
    liveUrl: `mailto:${profile.email}?subject=FF%20Portal%20demo%20request`,
    githubUrl: profile.github,
    liveLabel: "Request Demo",
    githubLabel: "GitHub Profile",
  },
  {
    name: "Survey Emailer",
    description:
      "An admin-driven email automation workflow for Be$MART Financial Literacy M3 and M6 surveys, importing Excel student data, queueing recipient batches, sending emails asynchronously, and reporting university-wise delivery and eligibility analytics.",
    stack: ["PHP", "MySQL", "Excel Import", "Worker Queues", "Analytics"],
    liveUrl: `mailto:${profile.email}?subject=Survey%20Emailer%20demo%20request`,
    githubUrl: profile.github,
    liveLabel: "Request Demo",
    githubLabel: "GitHub Profile",
  },
  {
    name: "AR Real Estate",
    description:
      "A final-year mobile and cloud ecosystem for AR property viewing, built with Flutter and Dart, integrated with Google ARCore for 3D walkthroughs, backed by PHP services on Google Cloud Platform and Aiven for MySQL.",
    stack: ["Flutter", "Dart", "Google ARCore", "PHP", "Google Cloud", "Aiven MySQL"],
    liveUrl: `mailto:${profile.email}?subject=AR%20Real%20Estate%20demo%20request`,
    githubUrl: profile.github,
    liveLabel: "Request Demo",
    githubLabel: "GitHub Profile",
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
      "React.js",
      "Vite",
      "Flutter",
      "Dart",
    ],
  },
  {
    title: "Backend / Database",
    icon: Database,
    skills: [
      "PHP",
      "Laravel",
      "REST API Development",
      "MySQL",
      "Database Administration",
      "SQL",
    ],
  },
  {
    title: "Tools",
    icon: TerminalSquare,
    skills: [
      "Docker",
      "Git",
      "GitHub",
      "Google Cloud Platform",
      "Cloudflare WAF",
      "Android Studio",
      "Microsoft Project",
    ],
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    period: "Mar 2026 - Expected Sep 2026",
    title: "IT Support Assistant - FF Studios Sdn. Bhd.",
    description:
      "Developed a Docker-containerized full-stack financial learning portal with React, PHP, MySQL, Google OAuth 2.0, and a custom Gemini RAG AI chatbot. Supported infrastructure hardening through penetration testing, Cloudflare WAF, and MySQL recovery for 2,000+ user profiles.",
    tags: ["React", "PHP", "MySQL", "Docker", "Cloudflare"],
  },
  {
    period: "Nov 2025 - Expected Sep 2026",
    title: "Project Planner - Ingens Insignia Sdn. Bhd.",
    description:
      "Managed construction and M&E schedules for an RM4M+ JKR renovation project, monitoring progress, analyzing variances, and keeping project timelines and budgets aligned.",
    tags: ["Microsoft Project", "Scheduling", "Progress Tracking"],
  },
  {
    period: "Oct 2022 - Expected Oct 2026",
    title: "Bachelor of Information Technology (Hons) - IIUM",
    description:
      "Pursuing Information Assurance and Security with a 3.57 CGPA, combining software engineering, cybersecurity, database systems, cloud deployment, and secure application development.",
    tags: ["Information Assurance", "Cybersecurity", "3.57 CGPA"],
  },
];

export const currentFocus = [
  "Software engineering",
  "Cybersecurity",
  "Full-stack development",
  "Cloud-backed systems",
];

export const replaceableContent = [
  "Profile, socials, projects, skills, and timeline content are managed in src/lib/portfolio.ts",
  "Public project URLs can be added when live demos or repositories are available",
  "Contact links use email, GitHub, and LinkedIn from the profile object",
];
