import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Connect',
    desc: 'Join our Slack & chapter network to build lasting peer relationships.',
    image: '/images/67133ca88dea988c2acca64c_summit group photo.jpg',
  },
  {
    num: '02',
    title: 'Learn',
    desc: 'Technical workshops, mock interviews, and resume breakdowns.',
    image: '/images/620cee9e7c4ce00022bd325a_ColorStack home hero-min.jpg',
  },
  {
    num: '03',
    title: 'Grow',
    desc: '1-on-1 mentorship with industry engineers & senior student peers.',
    image: '/images/67c77e5e4c5aac70963df60e_ColorStack-Annual-Summit-D2-Chloe-Jackman-Photography-2024-272_websize.jpg',
  },
  {
    num: '04',
    title: 'Land',
    desc: 'Secure internships & full-time roles at top tech companies.',
    image: '/images/1.jpg',
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
                  width: '100%',
                  height: 180,
                  overflow: 'hidden',
                  background: '#1e293b',
                }}
              >
                <img
                  src={s.image}
                  alt={s.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
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
