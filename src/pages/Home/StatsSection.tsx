import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const stats = [
  {
    num: '80+',
    label: 'Active Members',
    desc: 'Undergraduate & graduate students in computing.',
  },
  {
    num: '10+',
    label: 'Offers Landed',
    desc: 'Full-time & internship roles at top companies.',
  },
  {
    num: '10+',
    label: 'Annual Events',
    desc: 'Workshops, hackathons, and company sessions.',
  },
  {
    num: '100%',
    label: 'Free Membership',
    desc: 'Open to all GSU students passionate about tech.',
  },
];

export default function StatsSection() {
  return (
    <section style={{ background: '#ffffff', color: '#091024', padding: '100px 32px' }}>
      <div style={{ maxWidth: 1300, margin: '0 auto' }}>
        {/* Headline Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 48 }}
        >
          <h2
            style={{
              fontFamily: 'var(--display)',
              fontSize: 'clamp(32px, 5vw, 64px)',
              fontWeight: 400,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: 28,
              color: '#091024',
            }}
          >
            80+ active members & 95% placement rate{' '}
            <span style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 400, color: '#0039A6' }}>
              (that's over 50+ Black & Latinx engineers hired).
            </span>
          </h2>

          <Link
            to="/apply/member"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '14px 32px',
              borderRadius: 999,
              background: '#0039A6',
              color: '#ffffff',
              fontFamily: 'var(--mono)',
              fontSize: 12,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              transition: 'all 0.2s',
              fontWeight: 600,
            }}
          >
            Become a Member &rarr;
          </Link>
        </motion.div>

        {/* 4-Metric Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 24,
            paddingTop: 32,
          }}
        >
          {stats.map((st, i) => (
            <motion.div
              key={st.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{
                background: '#f8fafc',
                padding: '28px 24px',
                borderRadius: 0,
              }}
            >
              <div style={{ fontSize: 'clamp(32px, 3.5vw, 44px)', fontWeight: 600, color: '#091024', marginBottom: 4 }}>
                {st.num}
              </div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: '#0039A6', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8, fontWeight: 600 }}>
                {st.label}
              </div>
              <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.5, margin: 0 }}>
                {st.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
