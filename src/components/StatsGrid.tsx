import { stats } from '../data/stats';

export default function StatsGrid() {
  return (
    <section className="bg-gsu-blue py-20 text-white">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl text-white sm:text-4xl">Our impact, by the numbers</h2>
          <p className="mt-3 text-white/80">
            Real outcomes for real students. Updated each semester.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/15 bg-white/5 p-6 text-center backdrop-blur"
            >
              <div className="font-display text-4xl font-extrabold text-gsu-vibrant sm:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 text-sm font-medium text-white/85">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
