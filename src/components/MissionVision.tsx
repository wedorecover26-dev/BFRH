export default function MissionVision() {
  return (
    <section className="py-20 sm:py-28 bg-brown-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-light">
            What Drives Us
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our Mission &amp; Vision
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* Mission card */}
          <div className="rounded-2xl bg-brown/50 border border-white/10 p-8 sm:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/20">
              <svg
                className="h-6 w-6 text-gold-light"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </div>
            <h3 className="mt-6 text-xl font-bold text-white">Our Mission</h3>
            <p className="mt-4 text-base leading-relaxed text-cream/70">
              To provide a safe, structured, and compassionate home where
              individuals in recovery can heal, rediscover purpose, and build a
              foundation for independence. By fostering accountability, dignity,
              and peer support, we empower residents to achieve lasting sobriety
              and a healthy, fulfilling life.
            </p>
          </div>

          {/* Vision card */}
          <div className="rounded-2xl bg-brown/50 border border-white/10 p-8 sm:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/20">
              <svg
                className="h-6 w-6 text-gold-light"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178zM15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="mt-6 text-xl font-bold text-white">Our Vision</h3>
            <p className="mt-4 text-base leading-relaxed text-cream/70">
              To inspire a world where sobriety is the gateway to rediscovering
              one&rsquo;s worth and achieving lifelong personal growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
