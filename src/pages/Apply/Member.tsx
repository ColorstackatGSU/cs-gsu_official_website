export default function ApplyMember() {
  return (
    <>
      <section className="interior-hero-pad text-white" style={{ background: '#001f5c' }}>
        <div className="container-wide max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gsu-light-blue">Join us</p>
          <h1 className="mt-3 text-3xl text-white sm:text-4xl">Become a Member</h1>
          <p className="mt-6 text-base text-white/85">
            Open to all Georgia State students interested in tech. Free to join. Fill out the form below and
            we'll get you onto the roster and into the Discord.
          </p>
        </div>
      </section>

      <section className="form-section" style={{ padding: '60px 16px 80px' }}>
        <div className="form-embed-wrap form-embed-member">
          <iframe
            className="form-embed"
            src="https://docs.google.com/forms/d/e/1FAIpQLSd-2WU1sCB8dM9ZOra_CRPvB0Ezo2iNC0_eNkKY-drlWg3MtA/viewform?embedded=true"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            title="ColorStack at GSU Membership Application"
            style={{ background: 'transparent' }}
            allowFullScreen
          >
            Loading…
          </iframe>
        </div>

        {/* Submitting the form is not the end, and the page cannot tell anybody so at the
            moment they submit: the form is on Google's origin and sends no postMessage, so
            there is no supported way to be told it happened. So the next step is written
            out here from the moment the page opens, where it reads correctly whether they
            see it before submitting or after. */}
        <div className="form-next">
          <p className="form-next-eyebrow">After you submit</p>
          <h2 className="form-next-title">Set up your member account</h2>
          <p className="form-next-body">
            We email you a 6-digit code straight away, to both addresses you gave us. Check spam
            if it has not arrived in a minute. Then set up your account on the member portal: that
            is where your profile lives, where you upload the resume we share with our sponsors,
            and where you see what the chapter has coming up.
          </p>
          <a
            className="btn-accent"
            href="https://members.colorstackatgsu.com/activate"
            target="_blank"
            rel="noopener noreferrer"
          >
            Set up my account ↗
          </a>
        </div>
      </section>
    </>
  );
}
