import { useCallback, useEffect, useRef, useState, type TouchEvent } from 'react';

const SPIEL_URL = '/assets/ColorStack-GSU-Spiel.pdf';
const SLIDE_COUNT = 5;
const SLIDES = Array.from({ length: SLIDE_COUNT }, (_, i) => `/images/spiel/slide-${i + 1}.jpg`);

export default function Spiels() {
  // index of the slide open in the viewer, or null when the viewer is closed
  const [openAt, setOpenAt] = useState<number | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const next = useCallback(
    () => setOpenAt((i) => (i === null ? i : Math.min(i + 1, SLIDE_COUNT - 1))),
    []
  );
  const prev = useCallback(
    () => setOpenAt((i) => (i === null ? i : Math.max(i - 1, 0))),
    []
  );

  const close = useCallback(() => {
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    setOpenAt(null);
  }, []);

  const open = useCallback((index: number) => {
    setOpenAt(index);
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else {
      overlayRef.current?.requestFullscreen?.().catch(() => {});
    }
  }, []);

  // Try true-fullscreen as soon as the viewer opens. Browsers that refuse
  // (notably iOS Safari) still get the full-viewport overlay.
  const isOpen = openAt !== null;
  useEffect(() => {
    if (!isOpen) return;
    overlayRef.current?.requestFullscreen?.().catch(() => {});
  }, [isOpen]);

  // Keyboard navigation + lock background scroll while the viewer is open
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        next();
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prev();
      }
      if (e.key === 'f' || e.key === 'F') toggleFullscreen();
    };

    const onFsChange = () => setIsFullscreen(!!document.fullscreenElement);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    document.addEventListener('fullscreenchange', onFsChange);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
      document.removeEventListener('fullscreenchange', onFsChange);
    };
  }, [isOpen, close, next, prev, toggleFullscreen]);

  const onTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (e: TouchEvent) => {
    const start = touchStartX.current;
    const end = e.changedTouches[0]?.clientX;
    touchStartX.current = null;
    if (start === null || end === undefined) return;
    const dx = end - start;
    if (Math.abs(dx) < 45) return;
    if (dx < 0) next();
    else prev();
  };

  return (
    <>
      <section className="interior-hero-pad text-white" style={{ background: '#001f5c' }}>
        <div className="container-wide max-w-3xl text-center fade-in-up">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gsu-light-blue">Spiels</p>
          <h1 className="mt-3 text-3xl text-white sm:text-4xl">The ColorStack at GSU spiel</h1>
          <p className="mt-6 text-base text-white/85">
            The deck we run in classrooms and info sessions: who we are, what membership gets you,
            and how to join. The whole thing is below — no download needed.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button type="button" onClick={() => open(0)} className="btn-accent">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M8 21H5a2 2 0 0 1-2-2v-3M16 21h3a2 2 0 0 0 2-2v-3" />
              </svg>
              View fullscreen
            </button>
            <a href={SPIEL_URL} download className="btn-secondary">
              Download PDF
            </a>
          </div>
          <p className="mt-4 text-sm text-white/60" style={{ fontFamily: 'var(--mono)' }}>
            colorstackatgsu.com/spiels
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20" style={{ background: 'var(--paper)' }}>
        <div className="container-wide max-w-5xl">
          <div className="flex flex-col gap-6 sm:gap-10">
            {SLIDES.map((src, i) => (
              <figure key={src} className="fade-in-up" style={{ margin: 0, position: 'relative' }}>
                <button
                  type="button"
                  onClick={() => open(i)}
                  aria-label={`Open slide ${i + 1} of ${SLIDE_COUNT} fullscreen`}
                  style={{
                    display: 'block',
                    width: '100%',
                    padding: 0,
                    border: '1px solid var(--line-strong)',
                    background: 'var(--paper-warm)',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={src}
                    alt={`ColorStack at GSU spiel, slide ${i + 1}`}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    style={{ display: 'block', width: '100%', height: 'auto' }}
                  />
                </button>
                <figcaption
                  className="mt-3 flex items-center justify-between text-white/45"
                  style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.08em' }}
                >
                  <span>
                    {String(i + 1).padStart(2, '0')} / {String(SLIDE_COUNT).padStart(2, '0')}
                  </span>
                  <span className="uppercase sm:hidden">Tap to expand</span>
                  <span className="hidden uppercase sm:inline">Click to expand</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-white/55">
            Questions after reading it? Email{' '}
            <a
              href="mailto:official@colorstackatgsu.com"
              className="text-gsu-light-blue underline underline-offset-4"
            >
              official@colorstackatgsu.com
            </a>
            .
          </p>
        </div>
      </section>

      {openAt !== null && (
        <div
          ref={overlayRef}
          role="dialog"
          aria-modal="true"
          aria-label="Spiel presentation viewer"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            background: '#05070f',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 18px',
              color: 'rgba(255,255,255,0.7)',
              fontFamily: 'var(--mono)',
              fontSize: 12,
              letterSpacing: '0.08em',
            }}
          >
            <span>
              {String(openAt + 1).padStart(2, '0')} / {String(SLIDE_COUNT).padStart(2, '0')}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <button
                type="button"
                onClick={toggleFullscreen}
                aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
                title={isFullscreen ? 'Exit fullscreen' : 'Fullscreen (F)'}
                style={{ padding: 8, color: 'rgba(255,255,255,0.8)' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {isFullscreen ? (
                    <path d="M8 3v3a2 2 0 0 1-2 2H3M16 3v3a2 2 0 0 0 2 2h3M8 21v-3a2 2 0 0 0-2-2H3M16 21v-3a2 2 0 0 1 2-2h3" />
                  ) : (
                    <path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M8 21H5a2 2 0 0 1-2-2v-3M16 21h3a2 2 0 0 0 2-2v-3" />
                  )}
                </svg>
              </button>
              <button
                type="button"
                onClick={close}
                aria-label="Close viewer"
                style={{ padding: 8, color: 'rgba(255,255,255,0.8)' }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M6 6l12 12M6 18L18 6" />
                </svg>
              </button>
            </span>
          </div>

          <div
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            style={{
              position: 'relative',
              flex: 1,
              minHeight: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 12px 16px',
            }}
          >
            <img
              src={SLIDES[openAt]}
              alt={`ColorStack at GSU spiel, slide ${openAt + 1}`}
              style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
            />
            <ViewerArrow
              direction="prev"
              disabled={openAt === 0}
              onClick={() => setOpenAt((i) => (i === null ? i : Math.max(i - 1, 0)))}
            />
            <ViewerArrow
              direction="next"
              disabled={openAt === SLIDE_COUNT - 1}
              onClick={() => setOpenAt((i) => (i === null ? i : Math.min(i + 1, SLIDE_COUNT - 1)))}
            />
          </div>
        </div>
      )}
    </>
  );
}

function ViewerArrow({
  direction,
  disabled,
  onClick,
}: {
  direction: 'prev' | 'next';
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === 'prev' ? 'Previous slide' : 'Next slide'}
      style={{
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        [direction === 'prev' ? 'left' : 'right']: 12,
        padding: 12,
        borderRadius: 999,
        color: '#ffffff',
        background: 'rgba(5, 7, 15, 0.65)',
        border: '1px solid rgba(255,255,255,0.18)',
        backdropFilter: 'blur(6px)',
        opacity: disabled ? 0.25 : 1,
        cursor: disabled ? 'default' : 'pointer',
      }}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {direction === 'prev' ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
      </svg>
    </button>
  );
}
