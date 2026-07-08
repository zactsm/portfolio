"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems, profile } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-y border-[var(--line)] bg-[var(--background)]">
      <nav className="grid h-20 grid-cols-[1fr_auto] md:grid-cols-[2fr_repeat(5,1fr)_1fr_2fr]">
        <a
          href="#home"
          className="flex items-center border-r border-[var(--line)] px-4 text-2xl font-bold text-[var(--foreground)] md:px-7"
          aria-label="Go to hero section"
          onClick={() => setIsOpen(false)}
        >
          {profile.name}
          <sup className="ml-0.5 text-xs">TM</sup>
        </a>

        {navItems.map((item, index) => (
          <a
            key={item.href}
            href={item.href}
            className={cn(
              "hidden items-end border-r border-[var(--line)] px-4 pb-4 text-xs font-bold text-[var(--foreground)] transition hover:bg-[var(--surface-strong)] hover:text-[var(--background)] md:flex",
              index === 0 && "bg-[var(--surface-strong)] text-[var(--background)]",
            )}
          >
            <span className="flex w-full items-end justify-between gap-2">
              {item.label}
              <span className="text-[0.58rem]">{String(index + 1).padStart(2, "0")}</span>
            </span>
          </a>
        ))}

        <a
          href={`mailto:${profile.email}`}
          className="hidden items-end justify-center border-r border-[var(--line)] px-4 pb-4 text-xs font-bold text-[var(--muted)] transition hover:bg-[var(--surface-strong)] hover:text-[var(--background)] md:flex"
        >
          Contact
        </a>

        <div className="hidden items-end px-7 pb-4 text-xs font-semibold text-[var(--muted)] md:flex">
          No styles selected
        </div>

        <button
          type="button"
          className="flex h-20 w-20 items-center justify-center border-l border-[var(--line)] text-[var(--foreground)] transition hover:bg-[var(--surface-strong)] hover:text-[var(--background)] md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <div
        className={cn(
          "grid overflow-hidden border-t border-[var(--line)] transition-[grid-template-rows,opacity] duration-300 md:hidden",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="min-h-0">
          <div className="grid">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="border-b border-[var(--line)] px-4 py-4 text-sm font-bold text-[var(--foreground)] transition hover:bg-[var(--surface-strong)] hover:text-[var(--background)]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
