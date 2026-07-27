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
          <span>Featured {String(index + 1).padStart(2, "0")}</span>
          <span>{project.stack.length} technologies</span>
        </div>

        <h3 className="section-type max-w-xl">
          {project.name}
        </h3>
        <p className="body-copy mt-8 max-w-3xl">{project.description}</p>
      </div>

      <div className="p-5 sm:p-7">
        <div className="catalog-meta mb-6">
          <span>Stack</span>
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
    </article>
  );
}
