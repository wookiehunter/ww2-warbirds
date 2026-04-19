'use client';

import Link from 'next/link';
import { useState } from 'react';

const links = [
  { href: '/aircraft', label: 'Aircraft' },
  { href: '/timeline', label: 'Timeline' },
  { href: '/theaters', label: 'Theatres' },
  { href: '/about', label: 'About' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-olive-700/60 bg-ink-950/85 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-3 group">
          <span className="font-display text-xl tracking-brutal text-brass-400 uppercase">
            Contrails
          </span>
          <span className="text-bone-300/40 font-serif italic">&</span>
          <span className="font-display text-xl tracking-brutal text-bone-100 uppercase">
            Cordite
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="link-vintage font-display uppercase tracking-brutal text-sm text-bone-100/85 hover:text-brass-400"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-bone-100 p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <>
                <path d="M3 6h18" /><path d="M3 12h18" /><path d="M3 18h18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-olive-700/40 bg-ink-950">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display uppercase tracking-brutal text-sm text-bone-100/85 hover:text-brass-400 py-1"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
