import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

type Path = {
  to: string;
  eyebrow: string;
  title: string;
  desc: string;
  cta: string;
  icon: ReactNode;
};

const paths: Path[] = [
  {
    to: '/apply/member',
    eyebrow: 'Open to all GSU students',
    title: 'Become a Member',
    desc: "Free to join. Get into the Slack, the event calendar, mentorship matches, and recruiting events with our sponsors. Apply once and you're in for the year.",
    cta: 'Apply to join →',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M19 8v6M22 11h-6" />
      </svg>
    ),
  },
  {
    to: '/apply/e-board',
    eyebrow: "Leadership · We're hiring",
    title: 'Join the E-Board',
    desc: 'Help lead the chapter. Apply for an executive board position and shape events, partnerships, and the community that supports underrepresented technologists at Georgia State.',
    cta: 'Apply for E-Board →',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.3L12 14.8 7.2 17l.9-5.3L4.2 7.9l5.4-.8L12 2z" />
      </svg>
    ),
  },
];

export default function ApplyLanding() {
  return (
    <section style={{ position: 'relative', background: 'var(--ink)', color: 'white', overflow: 'hidden' }}>
      {/* Decorative grid + glow */}
      <div className="grid-bg dark" aria-hidden style={{ position: 'absolute' }} />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background:
            'radial-gradient(55% 45% at 18% 12%, rgba(0,57,166,0.45) 0%, transparent 60%), radial-gradient(45% 40% at 88% 90%, rgba(255,89,0,0.16) 0%, transparent 65%)',
        }}
      />

      <div className="interior-hero-pad" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 1040, margin: '0 auto' }}>
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ textAlign: 'center', marginBottom: 56 }}
          >
            <div
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 11,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.6)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                marginBottom: 20,
              }}
            >
              <span style={{ width: 24, height: 1, background: 'rgba(255,255,255,0.5)' }} />
              Get involved
              <span style={{ width: 24, height: 1, background: 'rgba(255,255,255,0.5)' }} />
            </div>
            <h1
              style={{
                fontFamily: 'var(--display)',
                fontSize: 'clamp(30px, 6vw, 60px)',
                fontWeight: 700,
                letterSpacing: '-0.04em',
                lineHeight: 1.05,
                marginBottom: 18,
              }}
            >
              Apply to ColorStack at GSU
            </h1>
            <p
              style={{
                fontSize: 'clamp(14px, 1.2vw, 18px)',
                color: 'rgba(255,255,255,0.72)',
                lineHeight: 1.6,
                maxWidth: 580,
                margin: '0 auto',
              }}
            >
              Whether you want to join the community or help lead it, there's a place for you. Choose your
              path below to get started.
            </p>
          </motion.div>

          {/* Path cards */}
          <div className="apply-paths" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {paths.map((p, i) => (
              <motion.div
                key={p.to}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 + i * 0.12 }}
              >
                <Link
                  to={p.to}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    padding: 32,
                    borderRadius: 16,
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    backdropFilter: 'blur(8px)',
                    transition: 'transform 0.25s ease, background 0.25s ease, border-color 0.25s ease',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = 'translateY(-4px)';
                    el.style.background = 'rgba(255,255,255,0.07)';
                    el.style.borderColor = 'rgba(255,255,255,0.25)';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = '';
                    el.style.background = 'rgba(255,255,255,0.04)';
                    el.style.borderColor = 'rgba(255,255,255,0.12)';
                  }}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 12,
                      background: 'var(--gsu-blue)',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 20,
                    }}
                  >
                    {p.icon}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: 11,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.55)',
                      marginBottom: 10,
                    }}
                  >
                    {p.eyebrow}
                  </div>
                  <h2 style={{ fontSize: 'clamp(22px, 2.4vw, 28px)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 12 }}>
                    {p.title}
                  </h2>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,0.72)', marginBottom: 24, flexGrow: 1 }}>
                    {p.desc}
                  </p>
                  <span
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: 13,
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                      color: 'white',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                    }}
                  >
                    {p.cta}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
