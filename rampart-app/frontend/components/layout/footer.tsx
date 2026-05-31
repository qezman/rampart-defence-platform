import Link from 'next/link'
import { NAV_LINKS, CONTACT } from '@/lib/constants'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-near-black)', borderTop: '1px solid var(--border-light)' }}>
      <div className="section-inner px-[var(--gutter)] mx-auto py-16">
        {/* Main row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12" style={{ borderBottom: '1px solid var(--border-light)' }}>
          {/* Brand */}
          <div>
            <p className="font-semibold text-[var(--text-white)] text-[17px] mb-3">
              Rampart Defence Engineering
            </p>
            <p className="type-caption text-[var(--text-secondary)] leading-relaxed max-w-[220px]">
              Armoured vehicle sales, repair, and refurbishment. Civilian and military clients.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="type-label text-[var(--text-tertiary)] mb-4">Navigation</p>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="type-caption text-[var(--text-secondary)] hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="type-label text-[var(--text-tertiary)] mb-4">Contact</p>
            <div className="flex flex-col gap-2">
              <a href={`mailto:${CONTACT.email}`} className="type-caption text-[var(--text-secondary)] hover:text-white transition-colors">
                {CONTACT.email}
              </a>
              <a href={`tel:${CONTACT.phone}`} className="type-caption text-[var(--text-secondary)] hover:text-white transition-colors">
                {CONTACT.phone}
              </a>
              <p className="type-caption text-[var(--text-secondary)]">{CONTACT.address}</p>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-8">
          <p className="type-caption text-[var(--text-tertiary)]">
            © {new Date().getFullYear()} Rampart Defence Engineering. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="type-caption text-[var(--text-tertiary)] hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="type-caption text-[var(--text-tertiary)] hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/export-compliance" className="type-caption text-[var(--text-tertiary)] hover:text-white transition-colors">
              Export Compliance Notice
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
