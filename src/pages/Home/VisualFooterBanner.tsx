import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function VisualFooterBanner() {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: 480,
        overflow: 'hidden',
        background: '#091024',
      }}
    >
      {/* Full-bleed B&W background image */}
      <img
        src="/images/events/atl-social-mixer-bw.jpg"
        alt="ColorStack GSU Event Banner"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'grayscale(100%) contrast(1.15)',
          display: 'block',
        }}
      />

      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(9, 16, 36, 0.65)',
        }}
      />

      {/* Centered Editorial Pill Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 24,
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 16,
            background: 'linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(9,16,36,0.92) 100%)',
            backgroundColor: 'rgba(9, 16, 36, 0.85)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.35), 0 16px 40px rgba(0, 0, 0, 0.5)',
            padding: '14px 32px',
            borderRadius: 999,
            maxWidth: '100%',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <span style={{ fontSize: 'clamp(13px, 1.5vw, 17px)', color: '#ffffff', fontWeight: 400 }}>
            Build your future in computing with{' '}
            <span style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 400, color: '#97CAEB' }}>
              ColorStack GSU.
            </span>
          </span>
          <Link
            to="/apply/member"
            style={{
              padding: '11px 24px',
              borderRadius: 999,
              background: '#0039A6',
              color: '#ffffff',
              fontFamily: 'var(--mono)',
              fontSize: 12,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              fontWeight: 600,
              transition: 'all 0.2s',
              whiteSpace: 'nowrap',
            }}
          >
            Join Us &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
