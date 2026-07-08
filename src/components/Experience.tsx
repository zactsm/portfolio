import { experienceItems } from "@/lib/portfolio";
import { SectionHeading } from "@/components/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="section-wrap py-8">
      <div className="catalog-panel">
        <div className="p-5 sm:p-7">
          <SectionHeading
            eyebrow="Experience / Learning"
            title="A practical learning path built around shipping real interfaces."
            description="This section works whether you have formal work experience yet or are still building your first professional portfolio."
          />
        </div>

        <div className="border-t border-[var(--line)]">
          {experienceItems.map((item, index) => (
            <article
              key={item.title}
              className="catalog-row grid transition hover:bg-[rgba(245,243,208,0.04)] lg:grid-cols-[260px_1fr_0.45fr]"
              data-reveal
            >
              <div className="border-b border-[var(--line)] p-5 lg:border-b-0 lg:border-r sm:p-7">
                <p className="catalog-label">{item.period}</p>
                <p className="mt-3 text-5xl font-medium leading-none text-[var(--foreground)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
              </div>

              <div className="border-b border-[var(--line)] p-5 lg:border-b-0 lg:border-r sm:p-7">
                <h3 className="text-4xl font-medium leading-none text-[var(--foreground)] sm:text-6xl">
                  {item.title}
                </h3>
                <p className="body-copy mt-6 max-w-3xl">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap content-start gap-2 p-5 sm:p-7">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-[var(--line)] px-3 py-2 text-xs font-bold text-[var(--foreground)]"
                  >
                    {tag}
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
