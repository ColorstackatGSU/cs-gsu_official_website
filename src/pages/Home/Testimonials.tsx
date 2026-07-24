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
    <section style={{ position: 'relative', overflow: 'hidden', background: '#091024', color: '#ffffff', padding: '100px 32px' }}>
      <div className="container-wide max-w-4xl text-center" style={{ position: 'relative' }}>
        {/* Heading entrance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p style={{ fontFamily: 'var(--mono)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(255, 255, 255, 0.7)', fontWeight: 600 }}>
            Member voices
          </p>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 400, letterSpacing: '-0.03em', color: '#ffffff', marginTop: 12 }}>
            From the people who live it.
          </h2>
        </motion.div>

        {/* Card container */}
        <div style={{ position: 'relative', marginTop: 44 }}>
          {/* Main Editorial Quote Card */}
          <div
            className="p-8 sm:p-14"
            style={{
              position: 'relative',
              zIndex: 1,
              background: '#ffffff',
              borderRadius: 0,
              overflow: 'hidden',
              minHeight: 340,
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.35)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* Giant decorative quote mark in background */}
            <div
              aria-hidden
              style={{
                position: 'absolute',
                top: -20,
                left: 24,
                fontFamily: 'Georgia, serif',
                fontSize: 220,
                lineHeight: 1,
                color: '#091024',
                opacity: 0.06,
                userSelect: 'none',
                pointerEvents: 'none',
                fontWeight: 700,
              }}
            >
              &ldquo;
            </div>

            {/* Sliding quote content */}
            <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={i}
                  custom={dir}
                  variants={{
                    enter: (d: number) => ({ opacity: 0, x: d * 50 }),
                    center: { opacity: 1, x: 0 },
                    exit: (d: number) => ({ opacity: 0, x: -d * 50 }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Quote text */}
                  <p
                    style={{
                      fontFamily: 'Georgia, serif',
                      fontSize: 'clamp(20px, 2.6vw, 30px)',
                      color: '#091024',
                      lineHeight: 1.45,
                      fontWeight: 400,
                      maxWidth: 720,
                      margin: '0 auto 36px',
                    }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {/* Member info row */}
                  <div className="flex items-center justify-center gap-4">
                    {/* Square Avatar */}
                    <motion.img
                      key={`avatar-${i}`}
                      src={t.image}
                      alt={t.name}
                      style={{
                        width: 52,
                        height: 52,
                        borderRadius: 0,
                        objectFit: 'cover',
                      }}
                      onError={(e) => (e.currentTarget.style.visibility = 'hidden')}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.35, delay: 0.15 }}
                    />
                    <div className="text-left">
                      <div style={{ fontWeight: 600, color: '#091024', fontSize: 16 }}>{t.name}</div>
                      <div
                        style={{
                          fontSize: 12,
                          color: '#64748b',
                          fontFamily: 'var(--mono)',
                          letterSpacing: '0.06em',
                          textTransform: 'uppercase',
                          marginTop: 2,
                        }}
                      >
                        {t.year}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Prev/next controls */}
            <button
              aria-label="Previous testimonial"
              onClick={() => go(i - 1)}
              className="testimonial-arrow"
              style={{ left: 16 }}
            >
              &larr;
            </button>
            <button
              aria-label="Next testimonial"
              onClick={() => go(i + 1)}
              className="testimonial-arrow"
              style={{ right: 16 }}
            >
              &rarr;
            </button>
          </div>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to testimonial ${idx + 1}`}
              onClick={() => go(idx)}
              style={{
                height: 4,
                borderRadius: 999,
                transition: 'all 0.3s',
                width: idx === i ? 32 : 8,
                background: idx === i ? '#ffffff' : 'rgba(255, 255, 255, 0.25)',
                border: 'none',
                cursor: 'pointer',
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        .testimonial-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          border-radius: 999px;
          background: #f1f5f9;
          border: none;
          color: #091024;
          font-size: 18px;
          font-weight: 400;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 5;
          transition: all 0.2s;
        }
        .testimonial-arrow:hover {
          background: #091024;
          color: #ffffff;
          transform: translateY(-50%) scale(1.08);
        }
        @media (max-width: 640px) {
          .testimonial-arrow { width: 36px; height: 36px; font-size: 16px; }
        }
      `}</style>
    </section>
  );
}
