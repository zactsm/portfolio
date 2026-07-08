import { currentFocus, highlights } from "@/lib/portfolio";
import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  return (
    <section id="about" className="section-wrap py-8">
      <div className="catalog-panel">
        <div className="grid border-b border-[var(--line)] lg:grid-cols-[1.1fr_0.9fr]">
          <div className="border-b border-[var(--line)] p-5 sm:p-7 lg:border-b-0 lg:border-r">
            <SectionHeading
              eyebrow="About"
              title="Secure systems, practical software, and polished delivery."
              description="I work across web, mobile, database, and infrastructure tasks, with a strong interest in software engineering and cybersecurity. My experience includes full-stack portals, AR mobile development, cloud-hosted backends, data recovery, and production hardening."
            />
          </div>

          <div className="grid" data-reveal>
            {currentFocus.map((item, index) => (
              <div
                key={item}
                className="flex items-center justify-between border-b border-[var(--line)] p-5 last:border-b-0 sm:p-7"
              >
                <span className="text-3xl font-medium leading-none text-[var(--foreground)] sm:text-5xl">
                  {item}
                </span>
                <span className="catalog-label">{String(index + 1).padStart(2, "0")}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3">
          {highlights.map((item, index) => (
            <article
              key={item.title}
              className="border-b border-[var(--line)] p-5 transition hover:bg-[rgba(245,243,208,0.04)] md:border-b-0 md:border-r md:last:border-r-0 sm:p-7"
              data-reveal
            >
              <div className="catalog-meta mb-12">
                <span>{item.title}</span>
                <span>0{index + 1}</span>
              </div>
              <h3 className="text-4xl font-medium leading-none text-[var(--foreground)]">
                {item.title}
              </h3>
              <p className="mt-6 leading-7 text-[var(--muted)]">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
