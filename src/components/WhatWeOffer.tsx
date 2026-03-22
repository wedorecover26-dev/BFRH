const offerings = [
  {
    title: "Safe, Structured Environment",
    description:
      "A stable, substance-free home where you can focus entirely on your recovery and personal development.",
    icon: "M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819",
  },
  {
    title: "Peer Support & Accountability",
    description:
      "Live alongside others who share your commitment to sobriety. Our community fosters mutual encouragement and honest accountability.",
    icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z",
  },
  {
    title: "Independence & Personal Growth",
    description:
      "We help you build the life skills, confidence, and routines needed to thrive on your own — not just survive.",
    icon: "M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342",
  },
  {
    title: "Path to Lasting Sobriety",
    description:
      "Recovery is a journey, not a destination. We walk alongside you to help build a foundation for a healthy, fulfilling life.",
    icon: "M12 3v2m0 0a7 7 0 017 7H5a7 7 0 017-7zm-9 9h18M6.34 6.34l1.42 1.42M17.66 6.34l-1.42 1.42M3 18h18",
  },
];

export default function WhatWeOffer() {
  return (
    <section id="program" className="py-20 sm:py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-dark">
            Our Program
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brown-dark sm:text-4xl">
            What We Offer
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-charcoal-light">
            A comprehensive, compassionate approach to recovery housing — built
            around the needs of people rebuilding their lives.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {offerings.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white border border-cream-dark p-8 transition-shadow hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-amber/10">
                <svg
                  className="h-6 w-6 text-gold-dark"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={item.icon}
                  />
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-bold text-brown-dark">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-charcoal-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
