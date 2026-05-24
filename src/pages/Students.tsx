import { testimonials } from '../data/stats';

export default function Students() {
  return (
    <>
      <section className="bg-gsu-blue py-20 text-white">
        <div className="container-wide max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gsu-light-blue">Students</p>
          <h1 className="mt-3 text-4xl text-white sm:text-5xl">Meet our members</h1>
          <p className="mt-6 text-lg text-white/85">
            A glimpse of the GSU students building, breaking, and shipping with ColorStack.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-wide grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <article key={t.name} className="overflow-hidden rounded-2xl bg-gsu-light-gray/40 shadow-sm">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={t.image} alt={t.name} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="p-6">
                <h3 className="text-lg">{t.name}</h3>
                <p className="text-sm text-gsu-red">{t.year}</p>
                <p className="mt-3 text-sm italic text-gsu-blue-steel">"{t.quote}"</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
