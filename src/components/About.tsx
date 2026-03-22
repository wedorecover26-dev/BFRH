export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-dark">
              Who We Are
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-brown-dark sm:text-4xl">
              Built on Experience. Driven by Purpose.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-charcoal-light">
              Brighter Futures Recovery Homes is a recovery home by people that
              have walked the path and wish to help others on their journey with
              our experiences and ideals. Focusing on independence,
              accountability, growth, and dignity.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-charcoal-light">
              We understand the courage it takes to start over because
              we&rsquo;ve been there. Our peer-led approach means you&rsquo;ll be
              supported by people who truly understand what you&rsquo;re going
              through — not just professionally, but personally.
            </p>

            {/* Values */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { label: "Independence", icon: "M12 3v18m-6-6l6 6 6-6" },
                { label: "Accountability", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
                { label: "Growth", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
                { label: "Dignity", icon: "M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342" },
              ].map((value) => (
                <div key={value.label} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/15">
                    <svg
                      className="h-5 w-5 text-gold-dark"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d={value.icon} />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-brown">{value.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative element */}
          <div className="flex items-center justify-center" aria-hidden="true">
            <div className="relative h-80 w-80 lg:h-96 lg:w-96">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold/30 to-amber/20 rotate-3" />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-brown/10 to-gold/25 -rotate-3" />
              <div className="absolute inset-6 rounded-2xl bg-cream-dark flex items-center justify-center">
                <svg
                  className="h-24 w-24 text-gold/60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={0.75}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2m0 0a7 7 0 017 7H5a7 7 0 017-7zm-9 9h18M6.34 6.34l1.42 1.42M17.66 6.34l-1.42 1.42M3 18h18"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
