import { ArrowUpRight, Github, Globe2, Mail } from "lucide-react";
import { profile } from "@/lib/portfolio";
import { SectionHeading } from "@/components/SectionHeading";

const links = [
  { label: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "LinkedIn", href: profile.linkedin, icon: Globe2 },
];

export function Contact() {
  return (
    <section id="contact" className="section-wrap py-8">
      <div className="catalog-panel" data-reveal>
        <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
          <div className="border-b border-[var(--line)] p-5 sm:p-7 lg:border-b-0 lg:border-r">
            <SectionHeading
              eyebrow="Contact"
              title="Open to software engineering and IT opportunities."
              description="Available to commence employment in September 2026. Reach out by email, GitHub, or LinkedIn for roles, collaborations, or project discussions."
            />
          </div>

          <div className="grid">
            {links.map((link) => {
              const Icon = link.icon;
              const isExternal = link.href.startsWith("http");

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  className="inverse-hover group flex items-center justify-between gap-4 border-b border-[var(--line)] p-5 transition sm:p-7"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[var(--line)] text-[var(--foreground)] transition group-hover:border-[var(--background)] group-hover:text-[var(--background)]">
                      <Icon size={18} />
                    </span>
                    <span className="truncate text-lg font-bold">
                      {link.label}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={17}
                    className="shrink-0 transition"
                  />
                </a>
              );
            })}

            <a
              href={`mailto:${profile.email}`}
              className="button-base button-primary m-5 sm:m-7"
            >
              Email Me
              <Mail size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
