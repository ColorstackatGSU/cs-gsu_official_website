import { sponsors } from '../data/sponsors';

const tiers = [
  {
    name: 'Platinum',
    price: '$5,000+',
    perks: ['Logo on home page', 'Dedicated tech talk slot', 'Resume book access', 'Recruiting event sponsorship'],
    accent: 'bg-gsu-blue text-white',
  },
  {
    name: 'Gold',
    price: '$2,500',
    perks: ['Logo on sponsors page', 'Tech talk slot', 'Resume book access'],
    accent: 'bg-gsu-cool-blue text-white',
  },
  {
    name: 'Silver',
    price: '$1,000',
    perks: ['Logo on sponsors page', 'Resume book access'],
    accent: 'bg-gsu-blue-steel text-white',
  },
];

export default function Sponsors() {
  return (
    <>
      <section className="bg-gsu-blue py-20 text-white">
        <div className="container-wide max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gsu-light-blue">Sponsors</p>
          <h1 className="mt-3 text-4xl text-white sm:text-5xl">Partner with ColorStack at GSU</h1>
          <p className="mt-6 text-lg text-white/85">
            Reach a pipeline of motivated, underrepresented computing students in Atlanta — and shape the future of the industry.
          </p>
          <a href="mailto:colorstackgsu@gmail.com" className="btn-accent mt-8">
            Become a sponsor
          </a>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-wide">
          <h2 className="text-center text-3xl">Our current partners</h2>
          <div className="mt-10 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 md:grid-cols-4">
            {sponsors.map((s) => (
              <div
                key={s.name}
                className="flex h-16 items-center justify-center rounded-md border border-gsu-light-gray bg-white px-4 text-center font-semibold text-gsu-blue-steel"
              >
                {s.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gsu-light-gray/40 py-20">
        <div className="container-wide">
          <h2 className="text-center text-3xl">Sponsorship tiers</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {tiers.map((t) => (
              <div key={t.name} className={`rounded-2xl p-8 shadow-sm ${t.accent}`}>
                <h3 className="text-white">{t.name}</h3>
                <p className="mt-1 text-3xl font-extrabold text-white">{t.price}</p>
                <ul className="mt-6 space-y-2 text-sm text-white/90">
                  {t.perks.map((p) => (
                    <li key={p}>✓ {p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
