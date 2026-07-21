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
            title="Featured builds across web, mobile AR, enterprise tooling, and AI platforms."
            description="Selected engineering projects spanning full-stack web platforms, mobile AR applications, IT support ticketing systems, healthcare portals, and automated survey data workflows."
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
