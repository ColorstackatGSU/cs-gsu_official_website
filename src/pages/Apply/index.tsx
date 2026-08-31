import { Link } from 'react-router-dom';

export default function ApplyLanding() {
  return (
    <>
      <section className="interior-hero-pad text-white" style={{ background: '#001f5c' }}>
        <div className="container-wide max-w-3xl text-center fade-in-up">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gsu-light-blue">Join us</p>
          <h1 className="mt-3 text-3xl text-white sm:text-4xl">Become a Member</h1>
          <p className="mt-6 text-base text-white/85">
            Open to all Georgia State students interested in tech. Free to join. Fill out the form and we'll
            get you onto the roster and into the Slack.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-wide grid gap-12 md:grid-cols-2">
          <div className="fade-in-up fade-delay-1">
            <h2 className="text-2xl">Who can join?</h2>
            <ul className="mt-6 space-y-3 text-gsu-blue-steel">
              <li>• Any Georgia State undergraduate or graduate student.</li>
              <li>• Majors welcome from CS, CIS, Math, Data Science, and beyond.</li>
              <li>• All experience levels, from first-time coders to seniors with multiple internships.</li>
            </ul>
            <h2 className="mt-10 text-2xl">What you'll get</h2>
            <ul className="mt-6 space-y-3 text-gsu-blue-steel">
              <li>• Access to the member Slack and event calendar.</li>
              <li>• Invitations to sponsor recruiting events and tech talks.</li>
              <li>• Mentorship matches with industry engineers and senior peers.</li>
              <li>• Resume reviews, mock interviews, and study sessions.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-gsu-light-gray bg-gsu-light-gray/30 p-8 fade-in-up fade-delay-2">
            <h3 className="text-xl">Become a Member</h3>
            <p className="mt-3 text-sm text-gsu-blue-steel">
              Fill out our membership form to get onto the roster and into the Slack. It's free and open to all
              GSU students.
            </p>
            <Link
              to="/apply/member"
              className="btn-primary mt-6 inline-flex w-full justify-center"
            >
              Fill Out Membership Form →
            </Link>

            <div className="mt-6 border-t border-gsu-light-gray pt-6">
              <h3 className="text-xl">Filled out the membership form?</h3>
              <p className="mt-3 text-sm text-gsu-blue-steel">
                Head to the member portal to upload your resume and complete your member profile.
              </p>
              <a
                href="https://member.colorstackatgsu.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary mt-6 inline-flex w-full justify-center"
              >
                Go to Member Portal →
              </a>
            </div>

            <div className="mt-6 border-t border-gsu-light-gray pt-6">
              <h3 className="text-xl">Register on PIN</h3>
            <p className="mt-3 text-sm text-gsu-blue-steel">
              Join our official organization on GSU's PIN to get added to the roster and receive event updates.
            </p>
            <a
              href="https://pin.gsu.edu/organization/colorstack"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 inline-flex w-full justify-center"
            >
              Join on PIN →
            </a>
            </div>

            <div className="mt-6 border-t border-gsu-light-gray pt-6">
              <h3 className="text-xl">Join ColorStack Nationally</h3>
              <p className="mt-3 text-sm text-gsu-blue-steel">
                Become a member of the national ColorStack community to access scholarships, job boards, and a network of Black and Latinx engineers across the country.
              </p>
              <a
                href="https://www.colorstack.org/member-application-requirements"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary mt-6 inline-flex w-full justify-center"
              >
                Apply to ColorStack National →
              </a>
            </div>

            <p className="mt-6 text-sm text-gsu-blue-steel">
              Questions? Email us at{' '}
              <a href="mailto:official@colorstackatgsu.com" className="underline">
                official@colorstackatgsu.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
