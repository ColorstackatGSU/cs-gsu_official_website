import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function MissionBlurb() {
  return (
    <section
      className="section-pad-lg"
      style={{
        position: 'relative',
        zIndex: 1,
        background: 'var(--paper-warm)',
        textAlign: 'center',
        overflow: 'hidden',
        borderTop: '4px solid var(--gsu-blue)',
      }}
    >
      {/* Subtle grid texture */}
      <div
        className="grid-bg"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.55,
          zIndex: 0,
        }}
        aria-hidden
      />

      {/* Soft blue glow */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          width: 700,
          height: 700,
          background:
            'radial-gradient(circle, rgba(0,57,166,0.08), transparent 65%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Corner brackets */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: 32,
          left: 32,
          width: 24,
          height: 24,
          borderTop: '2px solid var(--gsu-blue)',
          borderLeft: '2px solid var(--gsu-blue)',
          opacity: 0.5,
          zIndex: 1,
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: 32,
          right: 32,
          width: 24,
          height: 24,
          borderBottom: '2px solid var(--gsu-blue)',
          borderRight: '2px solid var(--gsu-blue)',
          opacity: 0.5,
          zIndex: 1,
        }}
      />

      <div style={{ maxWidth: 880, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {/* Eyebrow with accent line */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 14,
              marginBottom: 28,
            }}
          >
            <span
              aria-hidden
              style={{
                width: 32,
                height: 1,
                background: 'var(--gsu-blue)',
                opacity: 0.6,
              }}
            />
            <p
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 11,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--gsu-blue)',
                fontWeight: 600,
                margin: 0,
              }}
            >
              Our Mission
            </p>
            <span
              aria-hidden
              style={{
                width: 32,
                height: 1,
                background: 'var(--gsu-blue)',
                opacity: 0.6,
              }}
            />
          </div>

          {/* Decorative quote mark */}
          <div
            aria-hidden
            style={{
              fontFamily: 'var(--display)',
              fontSize: 88,
              lineHeight: 0.6,
              color: 'var(--gsu-blue)',
              opacity: 0.12,
              marginBottom: 4,
              userSelect: 'none',
            }}
          >
            &ldquo;
          </div>

          <h2
            style={{
              fontFamily: 'var(--display)',
              fontSize: 'clamp(26px, 3.2vw, 46px)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.18,
              color: 'var(--ink)',
              marginBottom: 36,
            }}
          >
            As a chartered ColorStack chapter at Georgia State University, we
            leverage Atlanta&apos;s thriving tech scene to create{' '}
            <span style={{ color: 'var(--gsu-blue)' }}>meaningful change</span>{' '}
            in diversity across the industry.
          </h2>

          <Link
            to="/about"
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 12,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--gsu-blue)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '12px 24px',
              border: '1px solid var(--gsu-blue)',
              borderRadius: 4,
              fontWeight: 600,
              transition: 'all 0.2s',
              background: 'transparent',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = 'var(--gsu-blue)';
              el.style.color = 'white';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = 'transparent';
              el.style.color = 'var(--gsu-blue)';
            }}
          >
            Learn More <span aria-hidden>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
