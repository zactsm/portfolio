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
            title="Featured builds with realistic product direction."
            description="These placeholder projects are structured like real portfolio entries, so you can replace the links and copy as your work grows."
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
