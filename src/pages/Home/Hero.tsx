import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { heroSlides } from '../../data/heroSlides';

const AUTOPLAY_MS = 4500;

export default function Hero() {
  const [index, setIndex] = useState(0);
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
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '92vh',
          minHeight: 680,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          paddingBottom: 'clamp(40px, 8vh, 80px)',
        }}
      >
        {/* Background Image */}
        <img
          src={slide.image}
          alt={slide.headline.join(' ')}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: slide.objectPosition ?? 'center',
            display: 'block',
            filter: 'brightness(0.35) saturate(0.65)',
          }}
        />

        {/* Uniform Cool Blue Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(9, 16, 36, 0.95) 0%, rgba(9, 16, 36, 0.7) 50%, rgba(9, 16, 36, 0.4) 100%)',
          }}
        />

        {/* Left-Aligned Content Container */}
        <div
          className="container-wide"
          style={{
            position: 'relative',
            zIndex: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            textAlign: 'left',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
            {/* Title */}
            <h1
              style={{
                fontFamily: 'var(--display)',
                fontWeight: 600,
                fontSize: 'clamp(54px, 7vw, 110px)',
                lineHeight: 1.0,
                letterSpacing: '-0.04em',
                margin: '0 0 10px',
                color: '#ffffff',
              }}
            >
              ColorStack
            </h1>

            {/* GSU Lockup */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                marginBottom: 32,
              }}
            >
              <span
                style={{
                  fontFamily: 'Georgia, serif',
                  fontStyle: 'italic',
                  fontSize: 'clamp(20px, 2.5vw, 32px)',
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontWeight: 400,
                }}
              >
                at
              </span>
              <img
                src="/images/gsu-logo-official.svg"
                alt="Georgia State University"
                style={{
                  height: 'clamp(32px, 4.5vw, 52px)',
                  width: 'auto',
                  display: 'block',
                  filter: 'brightness(0) invert(1)',
                }}
              />
            </div>

            {/* Subtitle / Description */}
            <p
              style={{
                fontSize: 'clamp(16px, 1.4vw, 22px)',
                color: 'rgba(255, 255, 255, 0.85)',
                lineHeight: 1.5,
                maxWidth: 620,
                margin: '0 0 32px',
                fontWeight: 400,
              }}
            >
              {slide.subtitle}
            </p>



            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                gap: 16,
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
                  padding: '16px 36px',
                  background: '#0039A6',
                  color: '#ffffff',
                  borderRadius: 999,
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = '#1d56c9';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = '#0039A6';
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
                    padding: '16px 36px',
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
            </div>
          </div>
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
        <div
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
            Our Mission
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
            "As a chartered ColorStack chapter at Georgia State University, we leverage Atlanta's thriving tech scene to create meaningful change in diversity across the industry."
          </h2>
        </div>
      </div>
    </section>
  );
}

/* Carousel navigation arrows */
function CarouselArrow({ direction, onClick }: { direction: 'prev' | 'next'; onClick: () => void }) {
  const isPrev = direction === 'prev';
  return (
    <button
      type="button"
      aria-label={isPrev ? 'Previous banner' : 'Next banner'}
      onClick={onClick}
      style={{
        position: 'absolute',
        top: '50%',
        [isPrev ? 'left' : 'right']: 24,
        transform: 'translateY(-50%)',
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
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {isPrev ? (
          <path d="M15 18l-6-6 6-6" />
        ) : (
          <path d="M9 18l6-6-6-6" />
        )}
      </svg>
    </button>
  );
}
