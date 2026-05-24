import { sponsors } from '../data/sponsors';

export default function SponsorStrip() {
  return (
    <section className="border-y border-gsu-light-gray bg-gsu-light-gray/40 py-10">
      <div className="container-wide">
        <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-gsu-dark-gray">
          Backed by industry leaders
        </p>
        <div className="mt-6 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {sponsors.map((s) => (
            <div
              key={s.name}
              className="flex h-14 items-center justify-center rounded-md bg-white px-4 text-center font-semibold text-gsu-blue-steel shadow-sm"
            >
              {s.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
