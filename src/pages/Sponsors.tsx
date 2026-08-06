const PACKET_URL = '/assets/Sponsorship-Packet.pdf';

export default function Sponsors() {
  return (
    <>
      <section className="interior-hero-pad text-white" style={{ background: '#001f5c' }}>
        <div className="container-wide max-w-3xl text-center fade-in-up">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gsu-light-blue">Sponsors</p>
          <h1 className="mt-3 text-3xl text-white sm:text-4xl">Partner with ColorStack at GSU</h1>
          <p className="mt-6 text-base text-white/85">
            Reach a pipeline of motivated Black and Latinx computing students in Atlanta and shape the future of the industry.
          </p>
          <a href="mailto:official@colorstackatgsu.com" className="btn-accent mt-8">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-10 6L2 7" />
            </svg>
            Email us to sponsor
          </a>
          <p className="mt-3 text-sm text-white/60" style={{ fontFamily: 'var(--mono)' }}>
            official@colorstackatgsu.com
          </p>
        </div>
      </section>

      <section className="py-20" style={{ background: 'var(--paper)' }}>
        <div className="container-wide max-w-4xl">
          <div className="text-center fade-in-up">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-gsu-light-blue">Sponsorship Packet</p>
            <h2 className="mt-3 text-2xl text-white sm:text-3xl">What partnering with us looks like</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base text-white/75">
              Tiers, benefits, and chapter reach. Everything you need to bring a partnership to your team.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href={PACKET_URL} target="_blank" rel="noopener noreferrer" className="btn-accent">
                Open packet
              </a>
              <a href={PACKET_URL} download className="btn-secondary">
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: 'var(--paper-warm)' }}>
        <div className="container-wide">
          <h2 className="text-center text-2xl text-white fade-in-up fade-delay-1">Our current partners</h2>
          <div className="mt-10 flex items-center justify-center fade-in-up fade-delay-2">
            <div
              className="rounded-md border border-gsu-med-gray px-12 py-10 text-center font-semibold text-white/80"
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 18,
                letterSpacing: '0.15em',
              }}
            >
              TBA
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
