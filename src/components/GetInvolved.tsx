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
    href: '/become-a-member',
    external: false,
  },
  {
    heading: 'Get In Touch',
    sub: 'Contact Us',
    desc: "Have questions? Reach out to our e-board directly — we'd love to hear from you.",
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
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function GetInvolved() {
  return (
    <section
      className="section-pad-lg"
      style={{
        background: 'var(--paper-warm)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
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
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--gsu-blue)',
              marginBottom: 16,
            }}
          >
            Ready to get started?
          </p>
          <h2
            style={{
              fontFamily: 'var(--display)',
              fontSize: 'clamp(32px, 4vw, 60px)',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
            }}
          >
            Get Involved
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
          }}
          className="get-involved-grid"
        >
          {cards.map((c) => (
            <motion.div key={c.heading} variants={cardAnim}>
              <Link
                to={c.href}
                style={{
                  display: 'block',
                  background: 'var(--paper)',
                  border: '1px solid var(--line)',
                  borderRadius: 20,
                  padding: '40px 36px',
                  textDecoration: 'none',
                  color: 'var(--ink)',
                  transition: 'border-color 0.25s, transform 0.25s, box-shadow 0.25s',
                  height: '100%',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'var(--gsu-blue)';
                  el.style.transform = 'translateY(-6px)';
                  el.style.boxShadow = '0 24px 48px -16px rgba(0,57,166,0.18)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'var(--line)';
                  el.style.transform = '';
                  el.style.boxShadow = '';
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--display)',
                    fontSize: 28,
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    marginBottom: 8,
                    lineHeight: 1.15,
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
                    color: 'var(--gsu-blue)',
                    marginBottom: 20,
                  }}
                >
                  {c.sub}
                </div>
                <p style={{ opacity: 0.65, fontSize: 15, lineHeight: 1.65 }}>{c.desc}</p>
                <div
                  style={{
                    marginTop: 32,
                    fontFamily: 'var(--mono)',
                    fontSize: 12,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: 'var(--gsu-blue)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  Learn more →
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
