import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const offerings = [
  {
    title: 'Technical Workshops',
    desc: 'Hands-on sessions covering software engineering, data science, AI, and more, designed to sharpen your technical skills at every level.',
  },
  {
    title: 'Professional Development',
    desc: 'Resume reviews, mock interviews, LinkedIn optimization, and career coaching to help you land the internship or full-time role you want.',
  },
  {
    title: 'Career Opportunities',
    desc: 'Direct connections to recruiting events, sponsor info sessions, and job postings from companies actively seeking diverse tech talent.',
  },
  {
    title: 'Community Building',
    desc: "A welcoming space to find your people: study groups, social events, and a network that lasts beyond graduation.",
  },
];

const cardAnim = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <section
        className="about-hero-pad"
        style={{
          background: 'var(--paper)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="grid-bg dark" style={{ position: 'absolute', inset: 0, opacity: 0.4, zIndex: 0 }} aria-hidden />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 11,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.5)',
              marginBottom: 20,
            }}
          >
            About Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: 'var(--display)',
              fontSize: 'clamp(30px, 4vw, 58px)',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              marginBottom: 28,
            }}
          >
            Who We Are
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontSize: 16, lineHeight: 1.65, color: 'rgba(255,255,255,0.72)', maxWidth: 640, margin: '0 auto' }}
          >
            ColorStack's mission is to increase the number of Black, Latinx, and Indigenous
            technologists who graduate and launch rewarding technical careers.
          </motion.p>
        </div>
      </section>

      {/* About section */}
      <section className="section-pad-md" style={{ background: 'var(--paper)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
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
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 0.6)',
                marginBottom: 20,
              }}
            >
              Our Story
            </p>
            <p
              style={{
                fontSize: 'clamp(15px, 1.2vw, 17px)',
                lineHeight: 1.75,
                color: 'var(--ink)',
                opacity: 0.8,
                marginBottom: 24,
              }}
            >
              ColorStack at Georgia State University is a chartered chapter of the national ColorStack
              organization, a community for Black and Latinx students pursuing
              degrees and careers in computing.
            </p>
            <p
              style={{
                fontSize: 'clamp(15px, 1.2vw, 17px)',
                lineHeight: 1.75,
                color: 'var(--ink)',
                opacity: 0.8,
                marginBottom: 24,
              }}
            >
              Founded by GSU students who saw a gap in community and opportunity, ColorStack at GSU
              leverages Atlanta's thriving tech scene and Georgia State's diverse campus to drive
              real change across the industry. We partner with faculty, alumni, and corporate sponsors
              to put meaningful opportunities in front of our members.
            </p>
            <p style={{ fontSize: 'clamp(15px, 1.2vw, 17px)', lineHeight: 1.75, color: 'var(--ink)', opacity: 0.8 }}>
              Membership is free and open to all GSU students regardless of major, background, or
              experience. Thank you for taking the time to learn about us. We'd love to have you
              join our community!
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="section-pad-md" style={{ background: 'var(--paper-warm)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            style={{ marginBottom: 48 }}
          >
            <p
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 11,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 0.6)',
                marginBottom: 20,
              }}
            >
              What We Offer
            </p>
            <h2
              style={{
                fontFamily: 'var(--display)',
                fontSize: 'clamp(24px, 2.5vw, 40px)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
              }}
            >
              Everything you need to grow.
            </h2>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 24,
            }}
          >
            {offerings.map((o) => (
              <motion.div
                key={o.title}
                variants={cardAnim}
                style={{
                  background: 'var(--paper)',
                  border: 'none',
                  borderRadius: 0,
                  padding: '32px 28px',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--display)',
                    fontSize: 20,
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    marginBottom: 12,
                  }}
                >
                  {o.title}
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.65, opacity: 0.65 }}>{o.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* National ColorStack */}
      <section className="section-pad-md" style={{ background: 'var(--paper)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            style={{
              background: 'var(--paper-warm)',
              border: 'none',
              borderRadius: 0,
              padding: 'clamp(28px, 5vw, 48px) clamp(20px, 5vw, 40px)',
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
            }}
          >
            <p
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 11,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 0.6)',
                marginBottom: 0,
              }}
            >
              National Organization
            </p>
            <h2
              style={{
                fontFamily: 'var(--display)',
                fontSize: 'clamp(21px, 2vw, 32px)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
              }}
            >
              Part of something bigger.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, opacity: 0.75, maxWidth: 580 }}>
              As a chartered chapter, we are proud members of ColorStack National, one of the
              largest communities for Black and Latinx students in tech. Becoming a national member
              unlocks access to even more resources, scholarships, and a nationwide network.
            </p>
            <a
              href="https://www.colorstack.org/member-application-requirements"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary about-cta-btn"
              style={{ alignSelf: 'flex-start' }}
            >
              Join ColorStack National →
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-pad-md" style={{ background: 'var(--paper)', color: 'white' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
          >
            <p
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 11,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                opacity: 0.5,
                marginBottom: 20,
              }}
            >
              Contact Us
            </p>
            <h2
              style={{
                fontFamily: 'var(--display)',
                fontSize: 'clamp(24px, 2.8vw, 42px)',
                fontWeight: 700,
                letterSpacing: '-0.04em',
                lineHeight: 1.1,
                marginBottom: 24,
              }}
            >
              Want to collaborate or connect?
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.7, opacity: 0.7, marginBottom: 36 }}>
              Want to collaborate on a tech talk or event with our community? We're here for it!
              For any questions or opportunities, drop us a line.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="mailto:official@colorstackatgsu.com"
                className="btn-primary"
              >
                official@colorstackatgsu.com →
              </a>
              <Link to="/apply" className="btn-secondary" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.25)' }}>
                Join the Community
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
