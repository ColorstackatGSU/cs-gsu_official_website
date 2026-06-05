import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { heroSlides } from '../../data/heroSlides';

// Time each banner stays on screen before auto-advancing (ms).
const AUTOPLAY_MS = 4500;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const count = heroSlides.length;

  const go = useCallback(
    (next: number) => setIndex(((next % count) + count) % count),
    [count],
  );

  // Autoplay: a fresh timeout per slide so the countdown restarts whenever the
  // slide changes (auto or manual). This keeps the dot fill and the advance in sync.
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
      style={{ position: 'relative', background: 'var(--ink)', color: 'white' }}
      aria-roledescription="carousel"
      aria-label="ColorStack at GSU announcements"
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '88vh',
          minHeight: 520,
          overflow: 'hidden',
        }}
      >
        {/* Crossfading background image per slide */}
        <AnimatePresence initial={false}>
          <motion.img
            key={slide.id}
            src={slide.image}
            alt={slide.headline.join(' ')}
            initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.06 }}
            animate={{ opacity: 1, scale: reduceMotion ? 1 : 1.16 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: reduceMotion ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] },
              // Slow, continuous zoom-in across the whole time the slide is visible.
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
              transformOrigin: 'center',
              willChange: 'transform, opacity',
              backfaceVisibility: 'hidden',
            }}
          />
        </AnimatePresence>

        {/* Animated color glow */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background:
              'radial-gradient(60% 50% at 20% 80%, rgba(0,82,165,0.35) 0%, transparent 60%), radial-gradient(50% 40% at 90% 20%, rgba(255,89,0,0.18) 0%, transparent 65%)',
            mixBlendMode: 'screen',
          }}
        />
        {/* Gradient overlay: dark at bottom for text legibility */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, rgba(10,14,26,0.25) 0%, rgba(10,14,26,0.1) 40%, rgba(10,14,26,0.75) 75%, rgba(10,14,26,0.92) 100%)',
          }}
        />

        {/* Slide text — re-mounts per slide (key) so the animation replays */}
        <div
          className={`hero-text-wrap${count > 1 ? ' with-dots' : ''}`}
          style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.4 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 11,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.65)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  marginBottom: 20,
                }}
              >
                <span style={{ width: 24, height: 1, background: 'rgba(255,255,255,0.5)', display: 'inline-block' }} />
                {slide.eyebrow}
              </motion.div>

              <motion.h1
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
                }}
                className="hero-headline"
                style={{
                  fontFamily: 'var(--display)',
                  fontSize: 'clamp(26px, 6.5vw, 64px)',
                  fontWeight: 700,
                  letterSpacing: '-0.04em',
                  lineHeight: 1.05,
                  color: 'white',
                  marginBottom: 20,
                  maxWidth: '14ch',
                }}
              >
                {slide.headline.map((word, i) => (
                  <span key={i} style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom', marginRight: '0.25em' }}>
                    <motion.span
                      variants={{
                        hidden: { y: '110%', opacity: 0 },
                        visible: { y: '0%', opacity: 1 },
                      }}
                      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                      style={{ display: 'inline-block' }}
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.32 }}
                className="hero-sub"
                style={{
                  fontSize: 'clamp(14px, 1.2vw, 18px)',
                  color: 'rgba(255,255,255,0.75)',
                  lineHeight: 1.6,
                  maxWidth: 500,
                  marginBottom: 28,
                }}
              >
                {slide.subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.44 }}
                className="hero-cta-row"
                style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}
              >
                <Link
                  to={slide.cta.to}
                  className="hero-cta"
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: 13,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    padding: '16px 32px',
                    background: 'var(--gsu-blue)',
                    color: 'white',
                    borderRadius: 8,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 10,
                    transition: 'background 0.2s, transform 0.2s',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = 'var(--gsu-blue-bright)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = 'var(--gsu-blue)';
                    (e.currentTarget as HTMLElement).style.transform = '';
                  }}
                >
                  {slide.cta.label}
                </Link>
                {slide.secondaryCta && (
                  <Link
                    to={slide.secondaryCta.to}
                    className="hero-cta"
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: 13,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      padding: '16px 32px',
                      background: 'rgba(255,255,255,0.12)',
                      color: 'white',
                      borderRadius: 8,
                      border: '1px solid rgba(255,255,255,0.25)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 10,
                      transition: 'background 0.2s',
                      backdropFilter: 'blur(8px)',
                    }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.2)')}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.12)')}
                  >
                    {slide.secondaryCta.label}
                  </Link>
                )}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel controls — only shown when there's more than one banner */}
        {count > 1 && (
          <>
            <CarouselArrow direction="prev" onClick={() => go(index - 1)} />
            <CarouselArrow direction="next" onClick={() => go(index + 1)} />

            {/* Progress dots */}
            <div
              role="tablist"
              aria-label="Choose banner"
              style={{
                position: 'absolute',
                bottom: 24,
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: 10,
                zIndex: 3,
              }}
            >
              {heroSlides.map((s, i) => (
                <button
                  key={s.id}
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Go to banner ${i + 1}: ${s.headline.join(' ')}`}
                  onClick={() => go(i)}
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    width: i === index ? 38 : 10,
                    height: 10,
                    borderRadius: 999,
                    border: 'none',
                    cursor: 'pointer',
                    background: i === index ? 'rgba(255,255,255,0.28)' : 'rgba(255,255,255,0.4)',
                    transition: 'width 0.3s ease, background 0.3s ease',
                    padding: 0,
                  }}
                >
                  {/* Time-elapsed indicator: a dark fill sweeps across the active dot */}
                  {i === index && !reduceMotion && (
                    <span
                      key={index}
                      className="dot-progress"
                      style={{ animationDuration: `${AUTOPLAY_MS}ms` }}
                    />
                  )}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

function CarouselArrow({ direction, onClick }: { direction: 'prev' | 'next'; onClick: () => void }) {
  const isPrev = direction === 'prev';
  // Refs let us style hover without re-rendering the parent.
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
        [isPrev ? 'left' : 'right']: 16,
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
