"use client";

import { useState, type FormEvent } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Frontend-only for now — no backend submission
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-20 sm:py-28 bg-cream-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-dark">
            Contact Us
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brown-dark sm:text-4xl">
            Take the First Step
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-charcoal-light">
            Whether you&rsquo;re ready to start your journey or just have
            questions, we&rsquo;re here for you. Reach out — no judgment, just
            support.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-lg font-bold text-brown-dark">
                Get in Touch
              </h3>
              <p className="mt-2 text-charcoal-light">
                Reach out to our team. We&rsquo;re happy to
                answer any questions about our program.
              </p>
            </div>

            <div className="space-y-5">
              <ContactDetail
                icon="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                label="Phone"
                href="tel:3166655226"
                text="(316) 665-5226"
              />
              <ContactDetail
                icon="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                label="Email"
                href="mailto:wedorecover@betterfuture26.com"
                text="wedorecover@betterfuture26.com"
              />
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="rounded-2xl bg-white border border-cream-dark p-8 text-center sm:p-12">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/20">
                  <svg
                    className="h-7 w-7 text-gold-dark"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-bold text-brown-dark">
                  Thank You
                </h3>
                <p className="mt-2 text-charcoal-light">
                  Your message has been received. We&rsquo;ll be in touch soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl bg-white border border-cream-dark p-8 shadow-sm sm:p-10"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-brown-dark"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="mt-2 block w-full rounded-lg border border-cream-dark bg-cream/50 px-4 py-3 text-charcoal placeholder:text-charcoal-light/50 focus:border-gold focus:ring-2 focus:ring-gold/30 focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-brown-dark"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="mt-2 block w-full rounded-lg border border-cream-dark bg-cream/50 px-4 py-3 text-charcoal placeholder:text-charcoal-light/50 focus:border-gold focus:ring-2 focus:ring-gold/30 focus:outline-none transition-colors"
                      placeholder="(555) 555-5555"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-brown-dark"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="mt-2 block w-full rounded-lg border border-cream-dark bg-cream/50 px-4 py-3 text-charcoal placeholder:text-charcoal-light/50 focus:border-gold focus:ring-2 focus:ring-gold/30 focus:outline-none transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-brown-dark"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="mt-2 block w-full rounded-lg border border-cream-dark bg-cream/50 px-4 py-3 text-charcoal placeholder:text-charcoal-light/50 focus:border-gold focus:ring-2 focus:ring-gold/30 focus:outline-none transition-colors resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-6 w-full rounded-full bg-gold px-8 py-3.5 text-base font-semibold text-brown-dark shadow hover:bg-gold-light transition-colors focus:outline-none focus:ring-2 focus:ring-gold-light focus:ring-offset-2 sm:w-auto"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactDetail({
  icon,
  label,
  href,
  text,
}: {
  icon: string;
  label: string;
  href: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/15">
        <svg
          className="h-5 w-5 text-gold-dark"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
        </svg>
      </div>
      <div>
        <p className="text-sm font-semibold text-brown-dark">{label}</p>
        <a
          href={href}
          className="text-charcoal-light hover:text-gold-dark transition-colors break-all"
        >
          {text}
        </a>
      </div>
    </div>
  );
}
