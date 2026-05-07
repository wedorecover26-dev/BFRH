const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Our Program", href: "#program" },
  { label: "Contact Us", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-brown-dark py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="text-lg font-bold text-white">
              Brighter Futures Recovery Homes
            </p>
            <p className="mt-1 text-sm text-cream/50">
              Where recovery transforms into lasting independence.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-6" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-cream/60 hover:text-gold-light transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Contact + copyright */}
        <div className="mt-8 border-t border-white/10 pt-8 flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-cream/50">
            <a
              href="tel:3166655226"
              className="hover:text-gold-light transition-colors"
            >
              (316) 665-5226
            </a>
            <a
              href="mailto:wedorecover26@betterfuture26.com"
              className="hover:text-gold-light transition-colors"
            >
              wedorecover26@betterfuture26.com
            </a>
          </div>
          <p className="text-sm text-cream/40">
            &copy; {new Date().getFullYear()} Brighter Futures Recovery Homes.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
