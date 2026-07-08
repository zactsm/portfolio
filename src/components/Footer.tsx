import { profile, socialLinks } from "@/lib/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-wrap pb-8 pt-8">
      <div className="catalog-panel grid text-sm font-semibold text-[var(--muted)] sm:grid-cols-[1fr_auto]">
        <p className="border-b border-[var(--line)] p-5 sm:border-b-0 sm:border-r sm:p-7">
          © {year} {profile.name}. Built with Next.js and Tailwind CSS.
        </p>
        <div className="flex items-center">
          {socialLinks.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="inline-flex h-16 w-16 items-center justify-center border-r border-[var(--line)] text-[var(--foreground)] transition last:border-r-0 hover:bg-[var(--surface-strong)] hover:text-[var(--background)]"
                aria-label={link.label}
              >
                <Icon size={17} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
