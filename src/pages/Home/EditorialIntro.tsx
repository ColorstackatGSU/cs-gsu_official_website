import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function EditorialIntro() {
  return (
    <section style={{ position: 'relative', background: '#091024', color: '#ffffff', padding: '100px 32px', overflow: 'hidden' }}>
      {/* Top Horizontal Grid Lines */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 36,
          backgroundImage: 'repeating-linear-gradient(to bottom, rgba(255, 255, 255, 0.06) 0px, rgba(255, 255, 255, 0.06) 1px, transparent 1px, transparent 12px)',
          pointerEvents: 'none',
        }}
      />

      {/* Bottom Horizontal Grid Lines */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 36,
          backgroundImage: 'repeating-linear-gradient(to bottom, rgba(255, 255, 255, 0.06) 0px, rgba(255, 255, 255, 0.06) 1px, transparent 1px, transparent 12px)',
          pointerEvents: 'none',
        }}
      />
      <div style={{ maxWidth: 1300, margin: '0 auto' }}>
        {/* Large Editorial Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: 'var(--display)',
            fontSize: 'clamp(32px, 5.5vw, 68px)',
            fontWeight: 400,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: 60,
            color: '#ffffff',
          }}
        >
          Where community meets{' '}
          <span style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 400, color: '#97CAEB' }}>
            opportunity.
          </span>
        </motion.h2>

        {/* 2-Column Asymmetric Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 48,
            alignItems: 'center',
          }}
        >
          {/* Left Column: Statement & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3
              style={{
                fontSize: 'clamp(22px, 2.4vw, 32px)',
                fontWeight: 500,
                lineHeight: 1.3,
                marginBottom: 16,
                color: '#ffffff',
                letterSpacing: '-0.02em',
              }}
            >
              We are officially kicking off the semester!
            </h3>
            <p style={{ fontSize: 16, color: '#94a3b8', lineHeight: 1.6, marginBottom: 28, fontWeight: 300 }}>
              We are officially kicking off the semester! Meet the new executive board, learn about our upcoming workshops, panels, and networking events, and discover how ColorStack can support your journey into the tech industry.
            </p>
            <Link
              to="/involvement"
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
              See all events &rarr;
            </Link>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ position: 'relative' }}
          >
            <div
              style={{
                borderRadius: 0,
                overflow: 'hidden',
                border: '2.5px solid #ffffff',
                maxWidth: 440,
                margin: '0 auto',
              }}
            >
              <div style={{ overflow: 'hidden', position: 'relative' }}>
                <img
                  src="/images/events/kickoff-fall-2026.png"
                  alt="ColorStack GSU Fall 2026 Kickoff Flyer"
                  style={{
                    display: 'block',
                    width: '100%',
                    height: 'auto',
                    clipPath: 'inset(10% 0 10% 0)',
                    margin: '-10% 0',
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
