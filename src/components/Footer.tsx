import { profile, socialLinks } from "@/lib/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-wrap pb-8 pt-8">
      <div className="catalog-panel grid min-w-0 text-sm font-semibold text-[var(--muted)] sm:grid-cols-[minmax(0,1fr)_auto]">
        <p className="min-w-0 break-words border-b border-[var(--line)] p-5 sm:border-b-0 sm:border-r sm:p-7">
          © {year} {profile.name}. Built with Next.js and Tailwind CSS.
        </p>
        <div className="grid grid-cols-3 sm:flex sm:items-center">
          {socialLinks.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="inverse-hover inline-flex h-16 min-w-0 items-center justify-center border-r border-[var(--line)] text-[var(--foreground)] transition last:border-r-0 sm:w-16"
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
