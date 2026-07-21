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
      "A comprehensive Malay-language financial education portal combining structured learning modules, interactive videos, articles, and gamified elements (quizzes, XP, levels, and leaderboards). Features an integrated Gemini AI chatbot for financial guidance and instant quiz explanations, YouTube channel content integration, Google OAuth sign-in, and an extensive admin dashboard for content management, user reporting, and moderation.",
    stack: ["React 19", "PHP 8.4", "MariaDB", "Gemini AI API", "Vite", "Docker", "Framer Motion"],
    liveUrl: `mailto:${profile.email}?subject=Portal%20FF%20demo%20request`,
    githubUrl: profile.github,
    liveLabel: "Request Demo",
    githubLabel: "GitHub Profile",
  },
  {
    name: "MediSync",
    description:
      "A modern full-stack healthcare synchronization and caregiver delegation platform. Enables real-time medical checklist tracking, daily medication adherence logging with low-refill alerts, an AI clinical term simplifier, a secure medical document vault backed by Supabase storage, caregiver delegation via unique sync codes (MS-...), and emergency SOS / public ICE profile routes (ICE-...) for first responders.",
    stack: ["Laravel 13", "React 19", "Inertia.js", "PostgreSQL", "Supabase", "Tailwind CSS", "Google Maps API"],
    liveUrl: `mailto:${profile.email}?subject=MediSync%20demo%20request`,
    githubUrl: profile.github,
    liveLabel: "Request Demo",
    githubLabel: "GitHub Profile",
  },
  {
    name: "VIZARE",
    description:
      "A cutting-edge Augmented Reality (AR) real estate mobile application built with Flutter, enabling home buyers to inspect interactive 3D property models (.glb) in AR. Features a 3-tier multi-role system (Homebuyer, Homeowner, Admin) with property management workflows, map-based location search via Google Maps, real-time Firestore inquiry messaging, EmailJS alerts, and serverless Vercel API routes backed by Supabase.",
    stack: ["Flutter", "Dart", "AR / 3D (.glb)", "Supabase", "Firebase", "Vercel", "Google Maps API"],
    liveUrl: `mailto:${profile.email}?subject=VIZARE%20demo%20request`,
    githubUrl: profile.github,
    liveLabel: "Request Demo",
    githubLabel: "GitHub Profile",
  },
  {
    name: "FFTicket",
    description:
      "An enterprise IT support ticketing solution combining a PHP 8 REST API backend with a C# .NET 8 WPF desktop management client designed using the MVVM pattern. Features end-to-end ticket lifecycle tracking, secure document/image attachment handling, automated Telegram Bot alerts with forum thread integration, and JWT bearer authentication.",
    stack: ["PHP 8", "REST API", "C# .NET 8", "WPF / MVVM", "MySQL", "JWT", "Telegram Bot API"],
    liveUrl: `mailto:${profile.email}?subject=FFTicket%20demo%20request`,
    githubUrl: profile.github,
    liveLabel: "Request Demo",
    githubLabel: "GitHub Profile",
  },
  {
    name: "FFGroceryTrack + Android",
    description:
      "A dual-platform grocery inventory and expense reimbursement ecosystem comprising a PHP Laravel web management portal and a Flutter cross-platform mobile app. Streamlines inventory stock tracking, restock lists, role-based access control (Superadmin, Stocker, User), reimbursement claim (Tuntutan) submissions with receipt attachments, offline caching, and audit logging.",
    stack: ["Laravel", "Flutter", "PHP", "MySQL", "REST API", "Docker", "Role-Based Access"],
    liveUrl: `mailto:${profile.email}?subject=FFGroceryTrack%20demo%20request`,
    githubUrl: profile.github,
    liveLabel: "Request Demo",
    githubLabel: "GitHub Profile",
  },
  {
    name: "FFSpotless",
    description:
      "A mobile-first Progressive Web Application (PWA) built for operational and cleaning checklist management. Features instant task completion tracking, real-time status updates, UTC-to-local timezone conversion (Kuala Lumpur time), offline-capable Vite PWA service worker precaching, and master-admin authentication hardened for Hostinger cloud deployment.",
    stack: ["Laravel 13", "Inertia.js", "React", "PWA / Service Worker", "MySQL", "Vite", "Docker"],
    liveUrl: `mailto:${profile.email}?subject=FFSpotless%20demo%20request`,
    githubUrl: profile.github,
    liveLabel: "Request Demo",
    githubLabel: "GitHub Profile",
  },
  {
    name: "Survey Emailer",
    description:
      "An automated student financial literacy survey & email orchestration platform built for the Be$MART initiative (M0 Pre/Post, M3, M6 surveys). Features Excel data import using PhpSpreadsheet, automated batch email queuing with PHPMailer, university-wide completion tracking, custom questionnaire set builders, and backward-compatible legacy PHP endpoint routing.",
    stack: ["Laravel 12", "PHP 8.2", "MySQL", "PhpSpreadsheet", "PHPMailer", "Queue Workers", "Analytics"],
    liveUrl: `mailto:${profile.email}?subject=Survey%20Emailer%20demo%20request`,
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
      "TypeScript",
      "JavaScript",
      "SQL",
      "C#",
      "Java",
      "C",
    ],
  },
  {
    title: "Frontend & Mobile",
    icon: Sparkles,
    skills: [
      "React.js",
      "Inertia.js",
      "Flutter",
      "Vite",
      "Tailwind CSS",
      "PWA",
      "Framer Motion / GSAP",
      "HTML5 / CSS3",
    ],
  },
  {
    title: "Backend & Database",
    icon: Database,
    skills: [
      "Laravel",
      "REST APIs",
      "MySQL / MariaDB",
      "PostgreSQL",
      "Supabase",
      "Firebase Firestore",
      "JWT Authentication",
    ],
  },
  {
    title: "Cloud, DevOps & APIs",
    icon: TerminalSquare,
    skills: [
      "Docker / Docker Compose",
      "Google Cloud Platform",
      "Vercel",
      "Cloudflare WAF",
      "Gemini AI API",
      "Google Maps API",
      "Telegram Bot API",
      "Git / GitHub",
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
