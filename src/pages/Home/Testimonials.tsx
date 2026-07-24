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
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: '#f0f2f5',
        color: '#091024',
        padding: '80px 32px 60px',
      }}
    >
      <div style={{ maxWidth: 720, margin: '0 auto', position: 'relative' }}>
        {/* Quote card */}
        <div
          style={{
            position: 'relative',
            background: '#ffffff',
            borderRadius: 16,
            padding: 'clamp(32px, 5vw, 56px)',
            boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.04)',
            border: '1px solid rgba(0, 0, 0, 0.06)',
            minHeight: 280,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Large decorative quote mark */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              top: 12,
              left: 24,
              fontFamily: 'Georgia, serif',
              fontSize: 160,
              lineHeight: 1,
              color: '#c5cfe0',
              userSelect: 'none',
              pointerEvents: 'none',
              fontWeight: 700,
              opacity: 0.6,
            }}
          >
            &ldquo;
          </div>

          {/* Sliding quote content */}
          <div style={{ position: 'relative', zIndex: 2, width: '100%', textAlign: 'center' }}>
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={i}
                custom={dir}
                variants={{
                  enter: (d: number) => ({ opacity: 0, x: d * 40 }),
                  center: { opacity: 1, x: 0 },
                  exit: (d: number) => ({ opacity: 0, x: -d * 40 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Quote text */}
                <p
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontStyle: 'italic',
                    fontSize: 'clamp(18px, 2.4vw, 24px)',
                    color: '#1a1a2e',
                    lineHeight: 1.55,
                    fontWeight: 400,
                    maxWidth: 600,
                    margin: '0 auto 32px',
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Member info row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
                  {/* Circular Avatar */}
                  <motion.img
                    key={`avatar-${i}`}
                    src={t.image}
                    alt={t.name}
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '2px solid #e8ecf1',
                    }}
                    onError={(e) => (e.currentTarget.style.visibility = 'hidden')}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  />
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontWeight: 700, color: '#0a0a2e', fontSize: 15 }}>{t.name}</div>
                    <div
                      style={{
                        fontSize: 13,
                        color: '#6b7280',
                        marginTop: 1,
                      }}
                    >
                      {t.year}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Arrow buttons — positioned outside the card on desktop */}
        <button
          aria-label="Previous testimonial"
          onClick={() => go(i - 1)}
          style={{
            position: 'absolute',
            top: '50%',
            left: -56,
            transform: 'translateY(-50%)',
            width: 44,
            height: 44,
            borderRadius: '50%',
            background: '#ffffff',
            border: '1px solid #e0e0e0',
            color: '#333',
            fontSize: 18,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            transition: 'all 0.2s',
            zIndex: 5,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#f5f5f5';
            e.currentTarget.style.transform = 'translateY(-50%) scale(1.06)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#ffffff';
            e.currentTarget.style.transform = 'translateY(-50%)';
          }}
        >
          &larr;
        </button>
        <button
          aria-label="Next testimonial"
          onClick={() => go(i + 1)}
          style={{
            position: 'absolute',
            top: '50%',
            right: -56,
            transform: 'translateY(-50%)',
            width: 44,
            height: 44,
            borderRadius: '50%',
            background: '#ffffff',
            border: '1px solid #e0e0e0',
            color: '#333',
            fontSize: 18,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            transition: 'all 0.2s',
            zIndex: 5,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#f5f5f5';
            e.currentTarget.style.transform = 'translateY(-50%) scale(1.06)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#ffffff';
            e.currentTarget.style.transform = 'translateY(-50%)';
          }}
        >
          &rarr;
        </button>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 28 }}>
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to testimonial ${idx + 1}`}
              onClick={() => go(idx)}
              style={{
                width: idx === i ? 28 : 10,
                height: 10,
                borderRadius: 999,
                transition: 'all 0.3s',
                background: idx === i ? '#0039A6' : '#c5cfe0',
                border: 'none',
                cursor: 'pointer',
              }}
            />
          ))}
        </div>
      </div>

      {/* Responsive: move arrows inside on small screens */}
      <style>{`
        @media (max-width: 860px) {
          /* Move arrow buttons inside the container on smaller screens */
          button[aria-label="Previous testimonial"] {
            left: 8px !important;
          }
          button[aria-label="Next testimonial"] {
            right: 8px !important;
          }
        }
      `}</style>
    </section>
  );
}
