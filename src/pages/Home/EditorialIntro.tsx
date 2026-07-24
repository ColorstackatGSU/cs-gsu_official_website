import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function EditorialIntro() {
  return (
    <section style={{ background: '#091024', color: '#ffffff', padding: '100px 32px' }}>
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
              500+ Black and Latinx computing students connected across GSU.
            </h3>
            <p style={{ fontSize: 16, color: '#94a3b8', lineHeight: 1.6, marginBottom: 28, fontWeight: 300 }}>
              Transforming collegiate talent into software engineering leadership through workshops, mentorship, and career pipelines.
            </p>
            <Link
              to="/about"
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
              Explore our impact &rarr;
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
            <div style={{ borderRadius: 0, overflow: 'hidden', aspectRatio: '4 / 3' }}>
              <img
                src="/images/student_page_img.jpg"
                alt="ColorStack GSU Students"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
