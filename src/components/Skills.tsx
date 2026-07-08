import { skillGroups } from "@/lib/portfolio";
import { SectionHeading } from "@/components/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="section-wrap py-8">
      <div className="catalog-panel">
        <div className="p-5 sm:p-7">
          <SectionHeading
            eyebrow="Skills"
            title="A focused toolkit for modern web development."
            description="The stack is intentionally practical: strong frontend foundations, enough backend awareness to ship useful apps, and tools that support clean design-to-deploy workflows."
          />
        </div>

        <div className="grid border-t border-[var(--line)] md:grid-cols-3">
          {skillGroups.map((group, index) => (
            <article
              key={group.title}
              className="border-b border-[var(--line)] p-5 transition hover:bg-[rgba(245,243,208,0.04)] md:border-b-0 md:border-r md:last:border-r-0 sm:p-7"
              data-reveal
            >
              <div className="catalog-meta mb-14">
                <span>{group.title}</span>
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>

              <h3 className="text-5xl font-medium leading-none text-[var(--foreground)] sm:text-6xl">
                {group.title}
              </h3>

              <div className="mt-10 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-[var(--line)] px-3 py-2 text-sm font-bold text-[var(--foreground)] transition hover:bg-[var(--surface-strong)] hover:text-[var(--background)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
