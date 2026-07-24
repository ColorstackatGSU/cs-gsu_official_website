import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Connect',
    desc: 'Join our Slack & chapter network to build lasting peer relationships.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Learn',
    desc: 'Technical workshops, mock interviews, and resume breakdowns.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Grow',
    desc: '1-on-1 mentorship with industry engineers & senior student peers.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Land',
    desc: 'Secure internships & full-time roles at top tech companies.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
];

export default function ProcessGrid() {
  return (
    <section style={{ background: '#ffffff', color: '#091024', padding: '100px 32px' }}>
      <div style={{ maxWidth: 1300, margin: '0 auto' }}>
        {/* Top Header */}
        <div style={{ marginBottom: 48 }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/about"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '10px 22px',
                borderRadius: 999,
                background: '#f1f5f9',
                color: '#091024',
                fontFamily: 'var(--mono)',
                fontSize: 12,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                marginBottom: 20,
                transition: 'all 0.2s',
                fontWeight: 600,
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = '#e2e8f0';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = '#f1f5f9';
              }}
            >
              How it works &rarr;
            </Link>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: 'var(--display)',
              fontSize: 'clamp(32px, 5vw, 64px)',
              fontWeight: 400,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: '#091024',
            }}
          >
            Empower your journey{' '}
            <span style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 400, color: '#0039A6' }}>
              (expand your network).
            </span>
          </motion.h2>
        </div>

        {/* 4-Column Container Step Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 24,
          }}
        >
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                background: '#091024',
                borderRadius: 0,
                padding: 32,
              }}
            >
              <div
                style={{
                  marginBottom: 24,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}
              >
                {s.icon}
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 600, color: '#ffffff', margin: '0 0 6px 0' }}>
                {s.title}
              </h3>
              <p style={{ fontSize: 13, color: '#94a3b8', lineHeight: 1.55, margin: 0 }}>
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
