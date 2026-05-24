import { useState } from 'react';
import { testimonials } from '../data/stats';

export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];

  return (
    <section className="bg-white py-20">
      <div className="container-wide max-w-4xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-gsu-red">Member voices</p>
        <h2 className="mt-3 text-3xl sm:text-4xl">From the people who live it</h2>

        <div className="mt-10 rounded-2xl border border-gsu-light-gray bg-gsu-light-gray/30 p-8 sm:p-12">
          <p className="text-xl italic text-gsu-blue-steel sm:text-2xl">"{t.quote}"</p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <img
              src={t.image}
              alt={t.name}
              className="h-14 w-14 rounded-full object-cover ring-2 ring-gsu-blue"
              onError={(e) => ((e.currentTarget.style.visibility = 'hidden'))}
            />
            <div className="text-left">
              <div className="font-semibold text-gsu-blue">{t.name}</div>
              <div className="text-sm text-gsu-dark-gray">{t.year}</div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to testimonial ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === i ? 'w-8 bg-gsu-blue' : 'w-2 bg-gsu-med-gray hover:bg-gsu-dark-gray'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
