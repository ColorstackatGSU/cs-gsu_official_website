export default function ApplyEBoard() {
  return (
    <>
      <section className="interior-hero-pad bg-gsu-blue text-white">
        <div className="container-wide max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gsu-light-blue">Leadership</p>
          <h1 className="mt-3 text-3xl text-white sm:text-4xl">Apply for the E-Board</h1>
          <p className="mt-6 text-base text-white/85">
            Help lead the chapter. Apply for an executive board position and shape events, partnerships, and the
            community. Fill out the form below.
          </p>
        </div>
      </section>

      <section className="section-pad-md bg-white">
        <div className="form-embed-wrap">
          <iframe
            className="form-embed"
            src="https://docs.google.com/forms/d/e/1FAIpQLScysyFeD_dgbZosYSTY9lvH51bwO2u89Z3Ebqw9cN5Rz5_zIg/viewform?embedded=true"
            height={2014}
            title="ColorStack at GSU — E-Board Application"
            loading="lazy"
          >
            Loading…
          </iframe>
        </div>
      </section>
    </>
  );
}
