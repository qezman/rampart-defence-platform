"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/constants";
import PillButton from "@/components/ui/pill-button";
import { cn } from "@/lib/utils/cn";

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 h-14"
      style={{
        background: "rgba(29,29,31,0.72)",
        backdropFilter: "saturate(180%) blur(20px)",
        WebkitBackdropFilter: "saturate(180%) blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div
        className="flex items-center justify-between h-full px-6 mx-auto"
        style={{ maxWidth: "var(--max-width-wide)" }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-[var(--text-white)] font-semibold text-[15px] tracking-normal hover:text-white transition-colors"
        >
          Rampart Defence
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-[12px] font-normal transition-colors",
                pathname === link.href
                  ? "text-[var(--accent-dark-bg)]"
                  : "text-white/80 hover:text-white",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <PillButton
            href="/contact"
            variant="primary"
            className="text-[12px] py-[6px] px-4"
            id="nav-cta"
          >
            Submit Enquiry
          </PillButton>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white/80 hover:text-white p-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-[1.5px] bg-current mb-[5px]" />
          <span className="block w-5 h-[1.5px] bg-current mb-[5px]" />
          <span className="block w-5 h-[1.5px] bg-current" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden absolute top-11 left-0 right-0 py-4"
          style={{
            background: "rgba(29,29,31,0.95)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-3 text-[15px] text-white/80 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="px-6 pt-3">
            <PillButton
              href="/contact"
              variant="primary"
              fullWidth
              id="nav-mobile-cta"
            >
              Submit Enquiry
            </PillButton>
          </div>
        </div>
      )}
    </header>
  );
}
