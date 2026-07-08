import { projects } from "@/lib/portfolio";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="section-wrap py-8">
      <div className="catalog-panel">
        <div className="p-5 sm:p-7">
          <SectionHeading
            eyebrow="Projects"
            title="Featured builds from web, automation, and mobile AR work."
            description="Selected projects from internship, automation, and final-year development work, focused on secure user flows, useful admin tooling, and cloud-backed application architecture."
          />
        </div>

        <div className="border-t border-[var(--line)]">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
