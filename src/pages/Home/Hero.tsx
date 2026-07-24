import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { heroSlides } from '../../data/heroSlides';

const AUTOPLAY_MS = 4500;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const count = heroSlides.length;

  const go = useCallback(
    (next: number) => setIndex(((next % count) + count) % count),
    [count],
  );

  useEffect(() => {
    if (count <= 1) return;
    const id = window.setTimeout(() => {
      setIndex((prev) => (prev + 1) % count);
    }, AUTOPLAY_MS);
    return () => window.clearTimeout(id);
  }, [index, count]);

  const slide = heroSlides[index];

  return (
    <section
      style={{ position: 'relative', background: '#091024', color: 'white' }}
      aria-roledescription="carousel"
      aria-label="ColorStack at GSU announcements"
    >
      {/* Hero Image Block */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '88vh',
          minHeight: 640,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Background Image */}
        <AnimatePresence initial={false}>
          <motion.img
            key={slide.id}
            src={slide.image}
            alt={slide.headline.join(' ')}
            initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.05 }}
            animate={{ opacity: 1, scale: reduceMotion ? 1 : 1.12 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: reduceMotion ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] },
              scale: { duration: reduceMotion ? 0 : (AUTOPLAY_MS + 1500) / 1000, ease: 'linear' },
            }}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: slide.objectPosition ?? 'center',
              display: 'block',
              filter: 'brightness(0.65) saturate(0.65)',
            }}
          />
        </AnimatePresence>

        {/* Uniform Cool Blue Overlay (Sudden Cutoff at Bottom) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(9, 16, 36, 0.55)',
          }}
        />

        {/* Center Region: Simplified & Prominent ColorStack Headline */}
        <div
          style={{
            position: 'relative',
            zIndex: 5,
            maxWidth: 1000,
            textAlign: 'center',
            padding: '0 24px',
            transform: 'translateY(-20px)',
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              {/* Enlarged, Important Looking Title */}
              <h1
                style={{
                  fontFamily: "'Noto Sans', sans-serif",
                  fontSize: 'clamp(46px, 8.2vw, 98px)',
                  fontWeight: 400,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.04,
                  color: '#ffffff',
                  textAlign: 'center',
                  margin: 0,
                }}
              >
                Welcome to{' '}
                <span style={{ fontWeight: 400, color: '#ffffff' }}>
                  ColorStack at GSU
                </span>
              </h1>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Region of Hero Image: Subtext & Action Buttons */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            left: 0,
            right: 0,
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            padding: '0 24px',
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              fontSize: 'clamp(14px, 1.2vw, 17px)',
              color: '#ffffff',
              lineHeight: 1.5,
              maxWidth: 580,
              margin: '0 auto 22px',
              fontWeight: 400,
            }}
          >
            {slide.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              display: 'flex',
              gap: 14,
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Link
              to={slide.cta.to}
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 12,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                padding: '15px 36px',
                background: '#FDB532',
                color: '#091024',
                borderRadius: 999,
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = '#fca815';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = '#FDB532';
                (e.currentTarget as HTMLElement).style.transform = '';
              }}
            >
              {slide.cta.label}
            </Link>
            {slide.secondaryCta && (
              <Link
                to={slide.secondaryCta.to}
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 12,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  padding: '15px 36px',
                  background: 'transparent',
                  color: 'white',
                  borderRadius: 999,
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                  fontWeight: 500,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = '#ffffff';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.4)';
                  (e.currentTarget as HTMLElement).style.transform = '';
                }}
              >
                {slide.secondaryCta.label}
              </Link>
            )}
          </motion.div>
        </div>

        {/* Carousel controls */}
        {count > 1 && (
          <>
            <CarouselArrow direction="prev" onClick={() => go(index - 1)} />
            <CarouselArrow direction="next" onClick={() => go(index + 1)} />
          </>
        )}
      </div>

      {/* Slogan Banner Under The Image */}
      <div
        style={{
          background: '#091024',
          padding: '72px 24px',
          textAlign: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: 1040, margin: '0 auto' }}
        >
          <p
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 11,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'rgba(255, 255, 255, 0.7)',
              marginBottom: 18,
              fontWeight: 600,
            }}
          >
            Our Vision &amp; Slogan
          </p>
          <h2
            style={{
              fontFamily: 'var(--display)',
              fontSize: 'clamp(24px, 4.2vw, 46px)',
              fontWeight: 400,
              lineHeight: 1.3,
              color: '#ffffff',
              letterSpacing: '-0.02em',
              margin: 0,
            }}
          >
            &ldquo;Empowering Black &amp; Latinx students to{' '}
            <span style={{ fontWeight: 400, color: '#ffffff' }}>
              turn passion into opportunity
            </span>{' '}
            and lead in technology.&rdquo;
          </h2>
        </motion.div>
      </div>
    </section>
  );
}

function CarouselArrow({ direction, onClick }: { direction: 'prev' | 'next'; onClick: () => void }) {
  const isPrev = direction === 'prev';
  const ref = useRef<HTMLButtonElement>(null);
  return (
    <button
      ref={ref}
      type="button"
      className="carousel-arrow"
      aria-label={isPrev ? 'Previous banner' : 'Next banner'}
      onClick={onClick}
      onMouseEnter={() => ref.current && (ref.current.style.background = 'rgba(0,0,0,0.55)')}
      onMouseLeave={() => ref.current && (ref.current.style.background = 'rgba(0,0,0,0.3)')}
      style={{
        position: 'absolute',
        top: '50%',
        [isPrev ? 'left' : 'right']: 24,
        transform: 'translateY(-50%)',
        zIndex: 3,
        width: 44,
        height: 44,
        borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.25)',
        background: 'rgba(0,0,0,0.3)',
        backdropFilter: 'blur(8px)',
        color: 'white',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background 0.2s',
      }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {isPrev ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
      </svg>
    </button>
  );
}
