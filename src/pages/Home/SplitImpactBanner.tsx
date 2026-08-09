import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function SplitImpactBanner() {
  return (
    <section style={{ background: '#091024', color: '#ffffff', padding: '100px 32px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div style={{ maxWidth: 1300, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 56,
            alignItems: 'center',
          }}
        >
          {/* Left Column: Huge Statement + Pill Button */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              style={{
                fontFamily: 'var(--display)',
                fontSize: 'clamp(28px, 4vw, 52px)',
                fontWeight: 400,
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                marginBottom: 32,
                color: '#ffffff',
              }}
            >
              More than $10 million of tech offers secured{' '}
              <span style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 400, color: '#97CAEB' }}>
                (ColorStack at GSU supports your career path).
              </span>
            </h2>

            <Link
              to="/apply/member"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '12px 28px',
                borderRadius: 999,
                background: 'transparent',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                fontFamily: 'var(--mono)',
                fontSize: 12,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                transition: 'all 0.2s',
                fontWeight: 400,
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = '#ffffff')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.4)')}
            >
              Get in touch &rarr;
            </Link>
          </motion.div>

          {/* Right Column: Layered Square Photos with Inset Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ position: 'relative' }}
          >
            {/* Main Background Image */}
            <div style={{ borderRadius: 0, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.15)', aspectRatio: '1 / 1' }}>
              <img
                src="/images/events/atl-social-mixer.png"
                alt="ColorStack GSU Leader"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>

            {/* Layered Quote Box */}
            <div
              style={{
                position: 'absolute',
                bottom: 24,
                right: 24,
                maxWidth: 240,
                background: 'rgba(9, 16, 36, 0.92)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.2)',
                padding: '16px 20px',
                borderRadius: 0,
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
              }}
            >
              <p style={{ fontSize: 11, color: '#cbd5e1', lineHeight: 1.4, margin: 0 }}>
                100+ offers secured at Google, Microsoft, Meta, and top startups.
              </p>
              <span style={{ fontSize: 10, color: '#97CAEB', fontFamily: 'var(--mono)', display: 'block', marginTop: 6, fontWeight: 600 }}>
                colorstackgsu.org
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
