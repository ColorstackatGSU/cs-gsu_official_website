import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          el.style.transform = `translate3d(0, ${window.scrollY * -0.15}px, 0)`;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '100px 32px 80px',
        overflow: 'hidden',
        background: 'var(--paper)',
      }}
    >
      {/* Animated glow */}
      <div ref={glowRef} className="hero-glow" />

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: 1400,
          margin: '0 auto',
          width: '100%',
        }}
      >
        {/* Top meta row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: 60,
            flexWrap: 'wrap',
            gap: 24,
          }}
        >
          <div
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 11,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              opacity: 0.6,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span
              style={{
                width: 24,
                height: 1,
                background: 'currentColor',
                display: 'inline-block',
              }}
            />
            ColorStack Chapter — Est. 2024 / Atlanta
          </div>
          <div
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 11,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              opacity: 0.6,
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              textAlign: 'right',
            }}
          >
            <span>Active Members</span>
            <b
              style={{
                fontSize: 24,
                opacity: 1,
                color: 'var(--gsu-blue)',
                fontWeight: 600,
                letterSpacing: '-0.02em',
              }}
            >
              120+
            </b>
          </div>
        </div>

        {/* Mega headline */}
        <h1
          style={{
            fontFamily: 'var(--display)',
            fontSize: 'clamp(64px, 13vw, 220px)',
            fontWeight: 600,
            letterSpacing: '-0.05em',
            lineHeight: 0.85,
            marginBottom: 40,
            position: 'relative',
          }}
        >
          Black &amp; Latinx
          <br />
          <span
            style={{
              WebkitTextStroke: '2px var(--gsu-blue)',
              color: 'transparent',
            }}
          >
            computing
          </span>
          <br />
          at <span style={{ color: 'var(--gsu-blue)' }}>GSU</span>
          <span className="cursor-blink" aria-hidden />
        </h1>

        {/* Bottom row: sub + actions */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: 40,
            marginTop: 60,
          }}
        >
          <p
            style={{
              fontSize: 'clamp(16px, 1.4vw, 20px)',
              maxWidth: 540,
              opacity: 0.7,
              lineHeight: 1.5,
            }}
          >
            A community for underrepresented students in technology at Georgia
            State University — where we build careers, projects, and lifelong
            friendships.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link to="/become-a-member" className="btn-primary">
              Join the chapter →
            </Link>
            <Link to="/about" className="btn-secondary">
              Our story
            </Link>
          </div>
        </div>

        {/* Float tags */}
        <div className="float-tag" style={{ top: '22%', right: '8%' }}>
          Now recruiting
        </div>
        <div className="float-tag" style={{ bottom: '18%', left: '42%' }}>
          CS · CIS · DATA · MATH
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        Scroll
        <div className="scroll-indicator-bar" />
      </div>
    </section>
  );
}
