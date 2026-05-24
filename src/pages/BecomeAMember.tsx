export default function BecomeAMember() {
  return (
    <>
      <section className="bg-gsu-blue py-20 text-white">
        <div className="container-wide max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gsu-light-blue">Join us</p>
          <h1 className="mt-3 text-4xl text-white sm:text-5xl">Become a Member</h1>
          <p className="mt-6 text-lg text-white/85">
            Open to all Georgia State students interested in tech. Free to join — fill out the form and we'll
            get you onto the roster and into the Slack.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-wide grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl">Who can join?</h2>
            <ul className="mt-6 space-y-3 text-gsu-blue-steel">
              <li>• Any Georgia State undergraduate or graduate student.</li>
              <li>• Majors welcome from CS, CIS, Math, Data Science, and beyond.</li>
              <li>• All experience levels — first-time coders to seniors with multiple internships.</li>
            </ul>
            <h2 className="mt-10 text-3xl">What you'll get</h2>
            <ul className="mt-6 space-y-3 text-gsu-blue-steel">
              <li>• Access to the member Slack and event calendar.</li>
              <li>• Invitations to sponsor recruiting events and tech talks.</li>
              <li>• Mentorship matches with industry engineers and senior peers.</li>
              <li>• Resume reviews, mock interviews, and study sessions.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-gsu-light-gray bg-gsu-light-gray/30 p-8">
            <h3 className="text-2xl">Membership form</h3>
            <p className="mt-3 text-sm text-gsu-blue-steel">
              The official member form will live here. For now, email us and we'll add you to the list.
            </p>
            <a href="mailto:colorstackgsu@gmail.com?subject=ColorStack%20GSU%20Membership" className="btn-primary mt-6 w-full">
              Email us to join
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
