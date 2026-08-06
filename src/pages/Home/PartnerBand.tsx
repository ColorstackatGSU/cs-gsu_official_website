import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const benefits = [
  {
    title: 'Brand visibility',
    desc: 'Info sessions, tech talks, and event sponsorship in front of 80+ engaged members.',
  },
  {
    title: 'Direct recruiting',
    desc: 'Resume referrals and on-campus recruiting events with driven Black and Latinx CS talent.',
  },
  {
    title: 'Talent pipeline',
    desc: 'Early access to interns and new-grad candidates coming out of Georgia State.',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function PartnerBand() {
  return (
    <section
      style={{
        background: '#091024',
        color: '#ffffff',
        padding: '100px 32px',
      }}
    >
      <div
        style={{
          maxWidth: 1300,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 56,
          alignItems: 'center',
        }}
      >
        {/* Left: message + CTAs */}
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
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#97CAEB',
              marginBottom: 16,
              fontWeight: 600,
            }}
          >
            For Partners
          </p>
          <h2
            style={{
              fontFamily: 'var(--display)',
              fontSize: 'clamp(30px, 4vw, 52px)',
              fontWeight: 400,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: '#ffffff',
              marginBottom: 20,
            }}
          >
            Recruit from Atlanta&apos;s{' '}
            <span style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 400, color: '#97CAEB' }}>
              rising tech talent.
            </span>
          </h2>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.65,
              color: 'rgba(255, 255, 255, 0.82)',
              maxWidth: 520,
              marginBottom: 32,
              fontWeight: 400,
            }}
          >
            Partner with ColorStack at GSU to put your brand and open roles in front of driven Black
            and Latinx computing students through info sessions, recruiting events, and direct
            access to our member network.
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a
              href="mailto:official@colorstackatgsu.com"
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 12,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                padding: '15px 32px',
                background: '#ffffff',
                color: '#0039A6',
                borderRadius: 999,
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = '#97CAEB';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = '#ffffff';
                (e.currentTarget as HTMLElement).style.transform = '';
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-10 6L2 7" />
              </svg>
              Email us to sponsor
            </a>
            <Link
              to="/sponsors"
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 12,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                padding: '15px 32px',
                background: 'transparent',
                color: '#ffffff',
                borderRadius: 999,
                border: '1px solid rgba(255, 255, 255, 0.45)',
                fontWeight: 500,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = '#ffffff')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.45)')}
            >
              Partnership details
            </Link>
          </div>

          <p
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 12,
              letterSpacing: '0.02em',
              color: 'rgba(255, 255, 255, 0.6)',
              marginTop: 18,
            }}
          >
            Opens your mail app to official@colorstackatgsu.com
          </p>
        </motion.div>

        {/* Right: benefit list */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
        >
          {benefits.map((b) => (
            <motion.div
              key={b.title}
              variants={item}
              style={{
                background: '#131c35',
                borderRadius: 0,
                padding: '22px 24px',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--display)',
                  fontSize: 18,
                  fontWeight: 600,
                  letterSpacing: '-0.01em',
                  marginBottom: 6,
                  color: '#ffffff',
                }}
              >
                {b.title}
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.55, color: 'rgba(255, 255, 255, 0.75)', margin: 0 }}>
                {b.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
