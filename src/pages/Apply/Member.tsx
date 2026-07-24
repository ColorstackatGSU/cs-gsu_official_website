export default function ApplyMember() {
  return (
    <>
      <section className="interior-hero-pad text-white" style={{ background: '#001f5c' }}>
        <div className="container-wide max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gsu-light-blue">Join us</p>
          <h1 className="mt-3 text-3xl text-white sm:text-4xl">Become a Member</h1>
          <p className="mt-6 text-base text-white/85">
            Open to all Georgia State students interested in tech. Free to join. Fill out the form below and
            we'll get you onto the roster and into the Slack.
          </p>
        </div>
      </section>

      <section className="form-section" style={{ padding: '60px 16px 80px' }}>
        <div className="form-embed-wrap">
          <iframe
            className="form-embed"
            src="https://docs.google.com/forms/d/e/1FAIpQLSd-2WU1sCB8dM9ZOra_CRPvB0Ezo2iNC0_eNkKY-drlWg3MtA/viewform?embedded=true"
            width="640"
            height="935"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            title="ColorStack at GSU — Membership Application"
            style={{ minHeight: 935, background: 'transparent' }}
            allowFullScreen
          >
            Loading…
          </iframe>
        </div>
      </section>
    </>
  );
}
