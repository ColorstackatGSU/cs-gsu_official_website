import { Link } from 'react-router-dom';

export default function GetInvolved() {
  return (
    <section
      style={{
        background: 'var(--ink)',
        color: 'white',
        position: 'relative',
        padding: '120px 32px',
        overflow: 'hidden',
        zIndex: 1,
      }}
    >
      <div
        className="grid-bg dark"
        style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.6 }}
        aria-hidden
      />
      <div className="cta-glow" aria-hidden />

      <div
        style={{
          maxWidth: 1400,
          margin: '0 auto',
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 32,
        }}
      >
        <div className="section-eyebrow" style={{ color: 'var(--gsu-blue-bright)' }}>
          <span
            className="num"
            style={{ background: 'var(--gsu-blue-bright)' }}
          >
            04
          </span>
          Ready?
        </div>

        <h2
          style={{
            fontFamily: 'var(--display)',
            fontSize: 'clamp(48px, 8vw, 120px)',
            fontWeight: 600,
            letterSpacing: '-0.04em',
            lineHeight: 0.95,
            maxWidth: '14ch',
          }}
        >
          Your{' '}
          <span style={{ color: 'var(--gsu-blue-bright)' }}>people</span> are
          <br />
          already{' '}
          <span
            style={{ WebkitTextStroke: '2px white', color: 'transparent' }}
          >
            here.
          </span>
        </h2>

        <p style={{ opacity: 0.7, maxWidth: '50ch', fontSize: 18, lineHeight: 1.5 }}>
          Membership is free. Open to all GSU students with an interest in
          technology. Apply once — you're in for the year.
        </p>

        <Link
          to="/become-a-member"
          className="btn-primary"
          style={{ padding: '20px 36px', fontSize: 14 }}
        >
          Join ColorStack GSU →
        </Link>
      </div>
    </section>
  );
}
