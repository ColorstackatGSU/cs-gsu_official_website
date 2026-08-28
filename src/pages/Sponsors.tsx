const PACKET_URL = '/assets/Sponsorship-Packet.pdf';

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
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 fade-in-up fade-delay-2">
            <div className="border border-gsu-med-gray bg-white/5 p-8 flex flex-col items-center justify-center w-64 h-36">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#76B900" className="w-16 h-16 mb-2" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M1.635 7.146S3.08 5.012 5.97 4.791v-.774C2.77 4.273 0 6.983 0 6.983s1.57 4.536 5.97 4.952v-.824c-3.23-.406-4.335-3.965-4.335-3.965M5.97 9.475v.753c-2.44-.435-3.118-2.972-3.118-2.972S4.023 5.958 5.97 5.747v.828h-.004c-1.021-.123-1.82.83-1.82.83s.448 1.607 1.824 2.07M6 2l-.03 2.017A7 7 0 0 1 6.252 4c3.637-.123 6.007 2.983 6.007 2.983s-2.722 3.31-5.557 3.31q-.39-.002-.732-.065v.883q.292.039.61.04c2.638 0 4.546-1.348 6.394-2.943.307.246 1.561.842 1.819 1.104-1.757 1.47-5.852 2.657-8.173 2.657a7 7 0 0 1-.65-.034V14H16l.03-12zm-.03 3.747v-.956a6 6 0 0 1 .282-.015c2.616-.082 4.332 2.248 4.332 2.248S8.73 9.598 6.743 9.598c-.286 0-.542-.046-.773-.123v-2.9c1.018.123 1.223.572 1.835 1.593L9.167 7.02s-.994-1.304-2.67-1.304a5 5 0 0 0-.527.031"/>
              </svg>
              <span className="font-bold tracking-wider text-sm uppercase" style={{ color: '#76B900' }}>NVIDIA</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
