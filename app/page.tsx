import Link from "next/link";

export default function HomePage() {
  return (
    <div className="relative flex flex-col bg-cream">
      {/* ── Hero ── */}
      <section className="hero-section min-h-screen flex items-center justify-center px-6 py-28 md:py-36">
        {/* Ornamental border frame */}
        <div className="ornamental-frame">
          <div className="corner corner-tl" />
          <div className="corner corner-tr" />
          <div className="corner corner-bl" />
          <div className="corner corner-br" />
        </div>

        <div className="text-center max-w-2xl mx-auto relative z-10">
          <p className="animate-fade-in-up text-coral uppercase tracking-[0.35em] text-xs md:text-sm font-semibold mb-8">
            Please join us for
          </p>

          <h2 className="animate-fade-in-up-delay font-script text-[2rem] md:text-[2.75rem] text-charcoal-light leading-none mb-4">
            the wedding of
          </h2>

          <h1 className="animate-fade-in-up-delay font-serif text-[4.5rem] md:text-[7.5rem] lg:text-[9rem] font-normal text-charcoal leading-[0.85] tracking-[-0.02em]">
            Laura
          </h1>

          <p className="animate-fade-in-up-delay-2 font-script text-[2.5rem] md:text-[3.5rem] text-charcoal-light my-2 md:my-3 leading-none">
            &amp;
          </p>

          <h1 className="animate-fade-in-up-delay-2 font-serif text-[4.5rem] md:text-[7.5rem] lg:text-[9rem] font-normal text-charcoal leading-[0.85] tracking-[-0.02em] mb-14 md:mb-16">
            John
          </h1>

          <div className="animate-fade-in-up-delay-3 decorative-divider max-w-[200px] mx-auto mb-12">
            <span className="text-gold-muted">&#10047;</span>
          </div>

          <div className="animate-fade-in-up-delay-3 space-y-3 mb-14 md:mb-16">
            <p className="font-serif text-xl md:text-2xl text-charcoal tracking-[0.02em]">
              September 19<sup className="text-[0.6em]">TH</sup>, 2026 &nbsp;at&nbsp; 2:30PM
            </p>
            <div className="h-px w-10 bg-border-soft mx-auto my-4" />
            <p className="text-stone-warm uppercase tracking-[0.25em] text-xs">
              Topstays Private Residences
            </p>
            <p className="text-stone-warm uppercase tracking-[0.25em] text-xs">
              Nyali, Mombasa
            </p>
            <p className="text-stone-mid italic text-sm mt-5">
              Attire: Dress to Impress
            </p>
          </div>

          <div className="animate-fade-in-up-delay-4">
            <Link href="/rsvp" className="btn-primary">
              RSVP
            </Link>
          </div>
        </div>
      </section>

      {/* ── Event Details ── */}
      <section className="details-section py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="mb-4">
            <span className="section-tag">Celebrating Our Love</span>
          </div>
          <h2 className="font-serif text-3xl md:text-[2.75rem] text-charcoal mb-4 leading-tight">
            Event Details
          </h2>
          <div className="decorative-divider max-w-[120px] mx-auto mb-14">
            <span className="text-gold-muted text-xs">&#10047;</span>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="event-card space-y-4">
              <div className="w-px h-8 bg-border-soft mx-auto" />
              <h3 className="font-serif text-xl text-charcoal">
                Ceremony
              </h3>
              <p className="text-stone-warm text-sm leading-[1.8]">
                2:30 PM
                <br />
                Topstays Private Residences
                <br />
                Nyali, Mombasa
              </p>
            </div>

            <div className="event-card space-y-4">
              <div className="w-px h-8 bg-border-soft mx-auto" />
              <h3 className="font-serif text-xl text-charcoal">
                Reception
              </h3>
              <p className="text-stone-warm text-sm leading-[1.8]">
                Following the ceremony
                <br />
                Dinner, drinks &amp; dancing
                <br />
                under the stars
              </p>
            </div>

            <div className="event-card space-y-4">
              <div className="w-px h-8 bg-border-soft mx-auto" />
              <h3 className="font-serif text-xl text-charcoal">
                Dress Code
              </h3>
              <p className="text-stone-warm text-sm leading-[1.8]">
                Dress to Impress
              </p>
            </div>
          </div>

          <div className="mt-20">
            <p className="text-stone-warm text-sm mb-8 leading-relaxed">
              We would be honored by your presence.
              <br />
              Kindly RSVP by August 19th, 2026.
            </p>
            <Link href="/rsvp" className="btn-outline">
              Respond Now
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-cream py-14 text-center border-t border-border-soft">
        <div className="decorative-divider max-w-24 mx-auto mb-6">
          <span className="text-gold-muted text-xs">&#10047;</span>
        </div>
        <p className="font-script text-3xl text-charcoal-light leading-none">
          Laura &amp; John
        </p>
        <p className="text-stone-mid text-xs mt-3 tracking-[0.35em] uppercase">
          19 &middot; 09 &middot; 2026
        </p>
      </footer>
    </div>
  );
}
