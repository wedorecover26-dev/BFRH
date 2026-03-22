export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Gradient background — sunrise/sunset warmth */}
      <div className="absolute inset-0 bg-gradient-to-br from-brown-dark via-brown to-amber" />
      <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/80 via-transparent to-gold/20" />

      {/* Decorative radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/15 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-32 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Your Recovery Journey
          <span className="block text-gold-light mt-2">Starts Here</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cream/80 sm:text-xl">
          Where Recovery Transforms Into a Lifetime of Dignity, Purpose, and
          Lasting Independence.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-base font-semibold text-brown-dark shadow-lg hover:bg-gold-light transition-colors focus:outline-none focus:ring-2 focus:ring-gold-light focus:ring-offset-2 focus:ring-offset-brown-dark"
          >
            Get In Touch
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-full border-2 border-cream/30 px-8 py-3.5 text-base font-semibold text-cream hover:border-gold-light hover:text-gold-light transition-colors focus:outline-none focus:ring-2 focus:ring-gold-light focus:ring-offset-2 focus:ring-offset-brown-dark"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent" />
    </section>
  );
}
