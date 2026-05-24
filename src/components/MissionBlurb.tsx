import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function MissionBlurb() {
  return (
    <section
      style={{
        position: 'relative',
        padding: '100px 32px',
        zIndex: 1,
        background: 'var(--paper)',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 11,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--gsu-blue)',
              marginBottom: 20,
            }}
          >
            Our Mission
          </p>
          <h2
            style={{
              fontFamily: 'var(--display)',
              fontSize: 'clamp(28px, 3.5vw, 52px)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.2,
              color: 'var(--ink)',
              marginBottom: 28,
            }}
          >
            As a chartered ColorStack chapter at Georgia State University,
            we leverage Atlanta's thriving tech scene to create meaningful
            change in diversity across the industry.
          </h2>
          <Link
            to="/about"
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 12,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--gsu-blue)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              borderBottom: '1px solid var(--gsu-blue)',
              paddingBottom: 2,
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = '0.65')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = '1')}
          >
            Learn More →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
