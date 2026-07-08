import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/lib/portfolio";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article
      className="catalog-row grid transition hover:bg-[rgba(245,243,208,0.04)] lg:grid-cols-[1.1fr_0.9fr]"
      data-reveal
    >
      <div className="border-b border-[var(--line)] p-5 sm:p-7 lg:border-b-0 lg:border-r">
        <div className="catalog-meta mb-12">
          <span>Featured 0{index + 1}</span>
          <span>{project.stack.length} technologies</span>
        </div>

        <h3 className="section-type max-w-[9ch]">
          {project.name}
        </h3>
        <p className="body-copy mt-8 max-w-3xl">{project.description}</p>
      </div>

      <div className="flex flex-col justify-between gap-14 p-5 sm:p-7">
        <div>
          <div className="catalog-meta mb-6">
            <span>Stack</span>
            <span>Portfolio Links</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="border border-[var(--line)] px-3 py-2 text-xs font-bold text-[var(--foreground)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="catalog-link"
          >
            Live Demo
            <ArrowUpRight size={16} />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="catalog-link"
          >
            GitHub
            <Github size={16} />
          </a>
        </div>
      </div>
    </article>
  );
}
