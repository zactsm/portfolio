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
  name: "Muazzam",
  role: "Software Engineer",
  email: "muazzamhazmiii@gmail.com",
  github: "https://github.com/zactsm",
  linkedin: "https://linkedin.com/in/muazzam-hazmi",
  headline: "Building secure web platforms, cloud-backed systems, and practical user experiences.",
  subtitle:
    "IT graduate specializing in full-stack software engineering, cybersecurity, and modern DevOps practices. Experienced in developing secure web and cross-platform mobile applications using React, PHP, and Flutter. Skilled in architecting scalable backends, managing databases, modernizing deployment workflows through containerization, and enforcing strict data security protocols.",
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
      "Full-stack applications with authentication, payload sanitization, database-backed user flows, and security hardening via Cloudflare WAF and custom security headers.",
    icon: Layers3,
  },
  {
    title: "DevOps & Recovery",
    description:
      "Containerized deployment workflows with Docker, achieving 99.9% environment consistency, plus MySQL disaster recovery restoring 100% data integrity for 2,000+ user profiles.",
    icon: Code2,
  },
  {
    title: "Cloud Delivery",
    description:
      "Experience deploying Dockerized apps, Cloudflare-protected systems, and Google Cloud Platform backend services with serverless edge request handling.",
    icon: Rocket,
  },
];

export const projects: Project[] = [
  {
    name: "Portal FF",
    description:
      "A full-stack financial literacy web portal built with React, PHP, and MySQL, integrating a custom Gemini AI chatbot that automated over 5,000+ manual inquiries per month and reduced average response time by 95%. Features secure API endpoints and database services establishing a modular architecture that reliably scales to support 1,000+ user sessions.",
    stack: ["React", "PHP", "MySQL", "Docker", "Cloudflare WAF", "Gemini API"],
    liveUrl: `mailto:${profile.email}?subject=Portal%20FF%20demo%20request`,
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
      "A cross-platform AR mobile application built with Flutter 3.44.5 and Google ARCore for immersive 3D property walkthroughs. Secured with Role-Based Access Control (RBAC) across 3-tiered user roles, successfully managing 2.4K+ serverless edge requests and 100MB+ in data transfers, validated via formal UAT with 30 respondents.",
    stack: ["Flutter", "Dart", "Google ARCore", "PHP", "Google Cloud", "Aiven MySQL"],
    liveUrl: `mailto:${profile.email}?subject=AR%20Real%20Estate%20demo%20request`,
    githubUrl: profile.github,
    liveLabel: "Request Demo",
    githubLabel: "GitHub Profile",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    icon: Code2,
    skills: [
      "PHP",
      "Dart",
      "JavaScript",
      "SQL",
      "C#",
      "VBA",
      "Java",
      "C",
    ],
  },
  {
    title: "Frontend",
    icon: Sparkles,
    skills: [
      "React.js",
      "Vite",
      "Flutter",
      "HTML/CSS",
    ],
  },
  {
    title: "Backend / Database",
    icon: Database,
    skills: [
      "Laravel",
      "REST API Development",
      "MySQL",
      "Database Administration",
    ],
  },
  {
    title: "Cloud, Tools & APIs",
    icon: TerminalSquare,
    skills: [
      "Google Cloud Platform (App Engine)",
      "Docker",
      "Git/GitHub",
      "Microsoft Project",
      "Android Studio",
    ],
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    period: "Mar 2026 - Expected Sep 2026",
    title: "IT Support Assistant - FF Studios Sdn. Bhd.",
    description:
      "Containerized core internal platforms using Docker, reducing manual server configuration time by 70% and achieving 99.9% environment consistency across dev/prod pipelines. Hardened infrastructure against XSS and SQL injection threats by deploying Cloudflare WAF and custom security headers, neutralizing 50+ potential malicious requests monthly. Executed a critical MySQL disaster recovery operation, restoring 100% data integrity for 2,000+ user profiles within 48 hours.",
    tags: ["Docker", "Cloudflare WAF", "MySQL", "DevOps", "Security"],
  },
  {
    period: "Nov 2025 - Expected Sep 2026",
    title: "Project Planner - Ingens Insignia Sdn. Bhd.",
    description:
      "Overcame strict multi-campus scheduling constraints for the RM4.51M JKR renovation project at Sunway Putra Tower by baseline-architecting a detailed 195-day tracking timeline across all structural, partition, ceiling, and finishing phases. Mitigated project delay risks by managing physical and financial S-Curves through Microsoft Project, tracking a progressive baseline target from 0.02% initialization to 92.37%+ execution milestones, effectively monitoring a milestone budget up to RM2.84M.",
    tags: ["Microsoft Project", "Scheduling", "S-Curves", "Progress Tracking"],
  },
  {
    period: "Oct 2022 - Expected Oct 2026",
    title: "Bachelor of Information Technology (Hons) - IIUM",
    description:
      "Pursuing Information Assurance and Security with a 3.57 CGPA at International Islamic University Malaysia (IIUM), Gombak, Selangor. Co-authored and presented an IEEE paper at the 2024 IEEE 14th Symposium on Computer Applications & Industrial Electronics (ISCAIE), Penang, Malaysia.",
    tags: ["Information Assurance", "Cybersecurity", "3.57 CGPA", "IEEE Publication"],
  },
];

export const currentFocus = [
  "Software engineering",
  "Cybersecurity",
  "Full-stack development",
  "Modern DevOps",
];

export const replaceableContent = [
  "Profile, socials, projects, skills, and timeline content are managed in src/lib/portfolio.ts",
  "Public project URLs can be added when live demos or repositories are available",
  "Contact links use email, GitHub, and LinkedIn from the profile object",
];
