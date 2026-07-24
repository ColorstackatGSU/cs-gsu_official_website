import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const cards = [
  {
    heading: 'Collaborate With Us',
    sub: 'Sponsorship',
    desc: 'Partner with us to connect your brand with driven Black and Latinx students in tech at GSU.',
    href: '/sponsors',
    external: false,
  },
  {
    heading: 'Join Us',
    sub: 'Join the Community',
    desc: "Membership is free and open to all GSU students interested in tech. Apply once, you're in for the year.",
    href: '/apply',
    external: false,
  },
  {
    heading: 'Get In Touch',
    sub: 'Contact Us',
    desc: "Have questions? Reach out to our e-board directly. We'd love to hear from you.",
    href: '/about',
    external: false,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardAnim = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function GetInvolved() {
  return (
    <section
      style={{
        background: '#ffffff',
        position: 'relative',
        zIndex: 1,
        padding: '100px 32px',
      }}
    >
      <div style={{ maxWidth: 1300, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          <p
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 11,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#0039A6',
              marginBottom: 16,
              fontWeight: 600,
            }}
          >
            Ready to get started?
          </p>
          <h2
            style={{
              fontFamily: 'var(--display)',
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 400,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: '#091024',
            }}
          >
            Get Involved{' '}
            <span style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 400, color: '#0039A6' }}>
              (join our community).
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 28,
          }}
        >
          {cards.map((c) => (
            <motion.div key={c.heading} variants={cardAnim}>
              <Link
                to={c.href}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: '#f8fafc',
                  borderRadius: 0,
                  padding: '40px 32px',
                  textDecoration: 'none',
                  color: '#091024',
                  transition: 'all 0.25s',
                  height: '100%',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = '#f1f5f9';
                  el.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = '#f8fafc';
                  el.style.transform = '';
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--display)',
                      fontSize: 24,
                      fontWeight: 600,
                      letterSpacing: '-0.02em',
                      marginBottom: 8,
                      color: '#091024',
                    }}
                  >
                    {c.heading}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: 11,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: '#0039A6',
                      marginBottom: 16,
                      fontWeight: 600,
                    }}
                  >
                    {c.sub}
                  </div>
                  <p style={{ color: '#475569', fontSize: 14, lineHeight: 1.6, margin: 0, fontWeight: 400 }}>{c.desc}</p>
                </div>
                <div style={{ marginTop: 32 }}>
                  <span
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: 11,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      padding: '8px 20px',
                      background: '#0039A6',
                      color: '#ffffff',
                      borderRadius: 999,
                      fontWeight: 600,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                    }}
                  >
                    Learn more &rarr;
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
