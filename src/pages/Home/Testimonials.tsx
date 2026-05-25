import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { testimonials } from '../../data/testimonials';

export default function Testimonials() {
  const [[i, dir], setState] = useState<[number, number]>([0, 0]);
  const t = testimonials[i];

  const go = (next: number) => {
    const direction = next > i ? 1 : -1;
    setState([(next + testimonials.length) % testimonials.length, direction]);
  };

  // Auto-advance every 7s
  useEffect(() => {
    const id = setInterval(() => {
      setState(([cur]) => [(cur + 1) % testimonials.length, 1]);
    }, 7000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-white py-20" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container-wide max-w-4xl text-center" style={{ position: 'relative' }}>
        {/* Heading entrance — slide up + stagger */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gsu-red">
            Member voices
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl">From the people who live it</h2>
        </motion.div>

        {/* Card stack */}
        <div style={{ position: 'relative', marginTop: 40 }}>
          {/* Offset accent card behind */}
          <motion.div
            aria-hidden
            initial={{ opacity: 0, x: 0, y: 0, rotate: 0 }}
            whileInView={{ opacity: 0.1, x: 14, y: 14, rotate: 1.5 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: 20,
              background: 'var(--gsu-blue)',
              zIndex: 0,
            }}
          />

          {/* Main card */}
          <div
            className="rounded-2xl border border-gsu-light-gray p-8 sm:p-12"
            style={{
              position: 'relative',
              zIndex: 1,
              background: 'var(--paper)',
              overflow: 'hidden',
              minHeight: 320,
            }}
          >
            {/* Giant decorative quote mark in the corner */}
            <motion.div
              aria-hidden
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              whileInView={{ opacity: 0.08, scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: 'absolute',
                top: -30,
                left: 20,
                fontFamily: 'var(--display)',
                fontSize: 220,
                lineHeight: 1,
                color: 'var(--gsu-blue)',
                userSelect: 'none',
                pointerEvents: 'none',
                fontWeight: 700,
              }}
            >
              &ldquo;
            </motion.div>

            {/* Sliding quote content */}
            <div style={{ position: 'relative', zIndex: 1 }}>
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={i}
                  custom={dir}
                  variants={{
                    enter: (d: number) => ({ opacity: 0, x: d * 60 }),
                    center: { opacity: 1, x: 0 },
                    exit: (d: number) => ({ opacity: 0, x: -d * 60 }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="text-xl italic text-gsu-blue-steel sm:text-2xl">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <div className="mt-8 flex items-center justify-center gap-4">
                    {/* Avatar with spring pop + rotate */}
                    <motion.img
                      key={`avatar-${i}`}
                      src={t.image}
                      alt={t.name}
                      className="h-14 w-14 rounded-full object-cover ring-2 ring-gsu-blue"
                      onError={(e) => (e.currentTarget.style.visibility = 'hidden')}
                      initial={{ scale: 0, rotate: -25 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        type: 'spring',
                        stiffness: 220,
                        damping: 14,
                        delay: 0.15,
                      }}
                    />
                    <motion.div
                      className="text-left"
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.25 }}
                    >
                      <div className="font-semibold text-gsu-blue">{t.name}</div>
                      <div className="text-sm text-gsu-dark-gray">{t.year}</div>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Prev/next controls */}
            <button
              aria-label="Previous testimonial"
              onClick={() => go(i - 1)}
              className="testimonial-arrow"
              style={{ left: 12 }}
            >
              ←
            </button>
            <button
              aria-label="Next testimonial"
              onClick={() => go(i + 1)}
              className="testimonial-arrow"
              style={{ right: 12 }}
            >
              →
            </button>
          </div>
        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to testimonial ${idx + 1}`}
              onClick={() => go(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === i ? 'w-8 bg-gsu-blue' : 'w-2 bg-gsu-med-gray hover:bg-gsu-dark-gray'
              }`}
            />
          ))}
        </div>
      </div>

      <style>{`
        .testimonial-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: white;
          border: 1px solid var(--line);
          color: var(--gsu-blue);
          font-size: 18px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 5;
          transition: all 0.2s;
          box-shadow: 0 4px 12px rgba(0,0,0,0.06);
        }
        .testimonial-arrow:hover {
          background: var(--gsu-blue);
          color: white;
          transform: translateY(-50%) scale(1.08);
          box-shadow: 0 8px 20px rgba(0,57,166,0.25);
        }
        @media (max-width: 640px) {
          .testimonial-arrow { width: 34px; height: 34px; font-size: 16px; }
        }
      `}</style>
    </section>
  );
}
