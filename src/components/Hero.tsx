import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import { profile, socialLinks } from "@/lib/portfolio";

export function Hero() {
  return (
    <section
      id="home"
      className="section-wrap min-h-screen pb-8 pt-28 lg:pt-32"
    >
      <div className="border-b border-[var(--line)] py-5" data-reveal>
        <div className="catalog-meta">
          <span>Software Engineering</span>
          <span>Cybersecurity</span>
          <span>Full-Stack Development</span>
          <span>Modern DevOps</span>
          <span>{profile.location}</span>
        </div>
      </div>

      <div className="catalog-panel mt-10" data-reveal>
        <div className="catalog-meta border-b border-[var(--line)] px-5 py-4 sm:px-7">
          <span>{profile.role}</span>
          <span>Information Assurance and Security</span>
          <span>Available Sep 2026</span>
        </div>

        <div className="px-5 py-12 sm:px-7 sm:py-16 lg:py-20">
          <p className="catalog-label mb-8">Portfolio 001</p>
          <h1 className="display-type max-w-[14ch]">{profile.name}</h1>
          <p className="mt-10 max-w-4xl text-balance text-3xl font-medium leading-none text-[var(--foreground)] sm:text-5xl lg:text-6xl">
            {profile.headline}
          </p>
        </div>

        <div className="grid border-t border-[var(--line)] lg:grid-cols-[1.2fr_0.8fr]">
          <div className="border-b border-[var(--line)] p-5 sm:p-7 lg:border-b-0 lg:border-r">
            <p className="body-copy max-w-3xl">{profile.subtitle}</p>
          </div>

          <div className="grid gap-6 p-5 sm:p-7">
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              <a href="#projects" className="catalog-link">
                View Projects
                <ArrowDown size={16} />
              </a>
              <a href="#contact" className="catalog-link">
                Contact Me
                <Mail size={16} />
              </a>
            </div>

            <div className="grid grid-cols-3 border border-[var(--line)]">
              {[
                ["07", "Projects"],
                ["20+", "Skills"],
                ["3.57", "CGPA"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="border-r border-[var(--line)] p-4 last:border-r-0"
                >
                  <p className="text-3xl font-bold leading-none text-[var(--foreground)]">
                    {value}
                  </p>
                  <p className="mt-2 text-xs font-semibold text-[var(--muted)]">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="catalog-link"
                  aria-label={link.label}
                >
                  {link.label}
                  <ArrowUpRight size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
