"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Our Program", href: "#program" },
  { label: "Contact Us", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-brown-dark/95 shadow-lg backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between sm:h-20">
          {/* Logo / org name */}
          <a href="#home" className="flex items-center gap-2 group">
            <SunriseIcon className="h-8 w-8 text-gold-light transition-transform group-hover:scale-110" />
            <span className="text-lg font-bold text-white leading-tight">
              Brighter Futures
              <span className="block text-xs font-normal text-gold-light tracking-wide">
                Recovery Homes
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-cream/80 hover:text-gold-light transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:3166655226"
              className="text-sm font-semibold text-gold-light hover:text-gold transition-colors flex items-center gap-1.5"
            >
              <PhoneIcon className="h-4 w-4" />
              (316) 665-5226
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-2 text-cream/80 hover:text-gold-light transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          className="md:hidden bg-brown-dark/95 backdrop-blur-sm border-t border-white/10"
          aria-label="Mobile navigation"
        >
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-base font-medium text-cream/90 hover:text-gold-light transition-colors py-1"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:3166655226"
              className="block text-base font-semibold text-gold-light py-1"
            >
              (316) 665-5226
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

function SunriseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2m0 0a7 7 0 017 7H5a7 7 0 017-7zm-9 9h18M6.34 6.34l1.42 1.42M17.66 6.34l-1.42 1.42M3 18h18"
      />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    </svg>
  );
}
