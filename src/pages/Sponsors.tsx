import SponsorMarquee, { type SponsorLogo } from '../components/SponsorMarquee';

const PACKET_URL = '/assets/Sponsorship-Packet.pdf';

const SPONSORS: SponsorLogo[] = [
  { alt: 'NVIDIA', src: '/images/sponsors/nvidia.png', href: 'https://www.nvidia.com' },
  { alt: 'Amazon Web Services', src: '/images/sponsors/aws.png', href: 'https://aws.amazon.com' },
  { alt: 'PrizePicks', src: '/images/sponsors/prizepicks.png', href: 'https://www.prizepicks.com' },
  { alt: 'Equifax', src: '/images/sponsors/equifax.png', href: 'https://www.equifax.com' },
  // Tall crest rather than a wide wordmark, so it needs more height to read at the same size.
  {
    alt: 'U.S. Soccer',
    src: '/images/sponsors/us-soccer.png',
    href: 'https://www.ussoccer.com',
    sizeClassName: 'max-h-[72px] sm:max-h-20',
  },
];

export default function Sponsors() {
  return (
    <>
      <section className="interior-hero-pad text-white" style={{ background: 'var(--paper)' }}>
        <div className="container-wide max-w-3xl text-center fade-in-up">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-white">Sponsors</p>
          <h1 className="mt-3 text-3xl text-white sm:text-4xl">Partner with ColorStack at GSU</h1>
          <p className="mt-6 text-base text-white/85">
            Reach a pipeline of motivated Black and Latinx computing students in Atlanta and shape the future of the industry.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-sm text-white/75">
            Check out our <span className="font-semibold text-gsu-light-blue">Sponsorship Packet</span> below for tiers, benefits, and chapter reach.
          </p>
          
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="mailto:official@colorstackatgsu.com" className="btn-accent">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-10 6L2 7" />
              </svg>
              Email us to sponsor
            </a>
            <a href={PACKET_URL} target="_blank" rel="noopener noreferrer" className="btn-accent">
              Open packet
            </a>
            <a href={PACKET_URL} download className="btn-secondary !border-white/40 !text-white hover:!border-gsu-light-blue hover:!text-gsu-light-blue">
              Download PDF
            </a>
          </div>
          <p className="mt-4 text-sm text-white/60" style={{ fontFamily: 'var(--mono)' }}>
            official@colorstackatgsu.com
          </p>
        </div>
      </section>

      <section className="py-20" style={{ background: 'var(--paper-warm)' }}>
        <div className="container-wide text-center">
          <h2 className="text-2xl text-white font-bold fade-in-up fade-delay-1">Our current partners</h2>
        </div>
        <div className="mt-10 fade-in-up fade-delay-2">
          <SponsorMarquee logos={SPONSORS} speed={40} />
        </div>
      </section>
    </>
  );
}
