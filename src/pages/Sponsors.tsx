export default function Sponsors() {
  return (
    <>
      <section className="interior-hero-pad bg-gsu-blue text-white">
        <div className="container-wide max-w-3xl text-center fade-in-up">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gsu-light-blue">Sponsors</p>
          <h1 className="mt-3 text-3xl text-white sm:text-4xl">Partner with ColorStack at GSU</h1>
          <p className="mt-6 text-base text-white/85">
            Reach a pipeline of motivated Black and Latinx computing students in Atlanta and shape the future of the industry.
          </p>
          <a href="mailto:colorstackgsu@gmail.com" className="btn-accent mt-8">
            Become a sponsor
          </a>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-wide">
          <h2 className="text-center text-2xl fade-in-up fade-delay-1">Our current partners</h2>
          <div className="mt-10 flex items-center justify-center fade-in-up fade-delay-2">
            <div
              className="rounded-md border border-gsu-light-gray bg-white px-12 py-10 text-center font-semibold text-gsu-blue-steel"
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
