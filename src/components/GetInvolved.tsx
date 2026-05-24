import { Link } from 'react-router-dom';

type Card = {
  title: string;
  body: string;
  cta: string;
  to: string;
  accent: string;
  external?: boolean;
};

const cards: Card[] = [
  {
    title: 'Become a Member',
    body: 'Open to all GSU students who want a community in tech.',
    cta: 'Apply',
    to: '/become-a-member',
    accent: 'bg-gsu-blue text-white',
  },
  {
    title: 'Sponsor Us',
    body: 'Partner with us to reach top underrepresented talent at GSU.',
    cta: 'Get in touch',
    to: '/sponsors',
    accent: 'bg-gsu-red text-white',
  },
  {
    title: 'Join the Slack',
    body: 'Real-time conversation, opportunities, and study sessions.',
    cta: 'Request invite',
    to: '/become-a-member',
    accent: 'bg-gsu-cool-blue text-white',
  },
  {
    title: 'Contact Us',
    body: "Questions, collab ideas, or speaking opportunities — we're listening.",
    cta: 'Email',
    to: 'mailto:colorstackgsu@gmail.com',
    accent: 'bg-gsu-blue-steel text-white',
    external: true,
  },
];

export default function GetInvolved() {
  return (
    <section className="bg-gsu-light-gray/40 py-20">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl">Get involved</h2>
          <p className="mt-3 text-gsu-blue-steel">Pick a door — they all lead into the community.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div key={c.title} className={`flex flex-col rounded-2xl p-6 shadow-sm ${c.accent}`}>
              <h3 className="text-xl text-white">{c.title}</h3>
              <p className="mt-3 flex-1 text-sm text-white/90">{c.body}</p>
              {c.external ? (
                <a href={c.to} className="mt-6 inline-flex items-center font-semibold text-white underline-offset-4 hover:underline">
                  {c.cta} →
                </a>
              ) : (
                <Link to={c.to} className="mt-6 inline-flex items-center font-semibold text-white underline-offset-4 hover:underline">
                  {c.cta} →
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
