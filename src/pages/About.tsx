import { eboard } from '../data/eboard';

export default function About() {
  return (
    <>
      <section className="bg-gsu-blue py-20 text-white">
        <div className="container-wide max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gsu-light-blue">About us</p>
          <h1 className="mt-3 text-4xl text-white sm:text-5xl">Who we are</h1>
          <p className="mt-6 text-lg text-white/85">
            ColorStack at Georgia State is a chapter of the national ColorStack organization — a community of
            Black, Latinx, and underrepresented students pursuing degrees and careers in computing.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-wide max-w-4xl">
          <h2 className="text-3xl">Our story</h2>
          <p className="mt-6 leading-relaxed text-gsu-blue-steel">
            Founded by GSU students who saw a gap in community and opportunity for students of color in the
            College of Arts & Sciences computing programs, ColorStack at GSU grew quickly into a hub for
            mentorship, technical growth, and lifelong friendships. We partner with Georgia State faculty,
            alumni, and a growing network of corporate sponsors to put real opportunities in front of our members.
          </p>
        </div>
      </section>

      <section className="bg-gsu-light-gray/40 py-20">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl sm:text-4xl">Meet the E-Board</h2>
            <p className="mt-3 text-gsu-blue-steel">The students keeping the lights on this year.</p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {eboard.map((m) => (
              <article key={m.name} className="overflow-hidden rounded-2xl bg-white shadow-sm">
                <div className="aspect-square overflow-hidden bg-gsu-light-blue/30">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl">{m.name}</h3>
                  <p className="text-sm font-semibold text-gsu-red">{m.role}</p>
                  <a href={`mailto:${m.email}`} className="mt-2 inline-block text-sm text-gsu-cool-blue hover:underline">
                    {m.email}
                  </a>
                  <p className="mt-4 text-sm leading-relaxed text-gsu-blue-steel">{m.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
