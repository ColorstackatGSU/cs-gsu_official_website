import GetInvolved from '../components/GetInvolved';

export default function Involvement() {
  return (
    <>
      <section className="bg-gsu-blue py-20 text-white">
        <div className="container-wide max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gsu-light-blue">Involvement</p>
          <h1 className="mt-3 text-4xl text-white sm:text-5xl">Where you can plug in</h1>
          <p className="mt-6 text-lg text-white/85">
            Workshops, professional development, mentorship, and a community Slack you can drop into any day of the week.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-wide grid items-center gap-12 md:grid-cols-2">
          <img
            src="/images/involvement/kickoff-event.png"
            alt="ColorStack at GSU kickoff event"
            className="rounded-2xl shadow-md"
          />
          <div>
            <h2 className="text-3xl">Semester programming</h2>
            <p className="mt-4 leading-relaxed text-gsu-blue-steel">
              Every semester we host a kickoff event, weekly study jams, technical workshops with our corporate
              partners, and a closing showcase. Members get early access to sponsor recruiting events and 1:1
              mentorship matches with industry engineers.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-gsu-blue-steel">
              <li>• Weekly study + coding sessions</li>
              <li>• Sponsor-led tech talks and recruiting nights</li>
              <li>• Mock interview marathons before recruiting season</li>
              <li>• Resume reviews with alumni engineers</li>
            </ul>
          </div>
        </div>
      </section>

      <GetInvolved />
    </>
  );
}
