const stats = [
  { num: '120+', lbl: 'Members' },
  { num: '32', lbl: 'Events / yr' },
  { num: '14', lbl: 'E-board' },
  { num: '$50K+', lbl: 'In offers' },
];

export default function MissionBlurb() {
  return (
    <section
      style={{
        position: 'relative',
        padding: '120px 32px',
        zIndex: 1,
        background: 'var(--paper)',
      }}
    >
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <div className="section-eyebrow">
          <span className="num">01</span>
          About the chapter
        </div>

        <div className="about-grid">
          {/* Left: text */}
          <div className="reveal">
            <p
              style={{
                fontSize: 'clamp(20px, 1.8vw, 28px)',
                lineHeight: 1.4,
                letterSpacing: '-0.01em',
                fontWeight: 400,
              }}
            >
              We're a chartered ColorStack chapter at{' '}
              <span
                style={{
                  background:
                    'linear-gradient(120deg, rgba(0,57,166,0.18) 0%, rgba(0,57,166,0.18) 100%)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '100% 40%',
                  backgroundPosition: '0 88%',
                  padding: '0 4px',
                }}
              >
                Georgia State University
              </span>{' '}
              — a community of Black and Latinx students who want to build
              careers in tech, support each other, and{' '}
              <span
                style={{
                  background:
                    'linear-gradient(120deg, rgba(0,57,166,0.18) 0%, rgba(0,57,166,0.18) 100%)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '100% 40%',
                  backgroundPosition: '0 88%',
                  padding: '0 4px',
                }}
              >
                change who gets hired
              </span>{' '}
              in this industry.
              <br />
              <br />
              Founded in Atlanta, run by students. Open to anyone in computing.
            </p>
          </div>

          {/* Right: stat cards */}
          <div
            className="reveal"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 16,
            }}
          >
            {stats.map((s) => (
              <div
                key={s.lbl}
                style={{
                  border: '1px solid var(--line)',
                  borderRadius: 14,
                  padding: 24,
                  background: 'var(--paper)',
                  transition: 'border-color 0.3s',
                  cursor: 'default',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = 'var(--gsu-blue)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = 'var(--line)')
                }
              >
                <div
                  style={{
                    fontFamily: 'var(--display)',
                    fontSize: 48,
                    fontWeight: 600,
                    letterSpacing: '-0.03em',
                    color: 'var(--gsu-blue)',
                    lineHeight: 1,
                  }}
                >
                  {s.num}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: 11,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    opacity: 0.6,
                    marginTop: 8,
                  }}
                >
                  {s.lbl}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
