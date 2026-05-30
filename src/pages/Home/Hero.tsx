import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section style={{ position: 'relative', background: 'var(--ink)', color: 'white' }}>
      {/* Full-bleed hero image */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '88vh',
          minHeight: 520,
          overflow: 'hidden',
        }}
      >
        <img
          src="https://static.wixstatic.com/media/407346_c8a8fb1fc33447ffa4a0864437a8de34~mv2.png"
          alt="ColorStack GSU community members"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 30%',
            display: 'block',
          }}
        />
        {/* Animated color glow */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.3 }}
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background:
              'radial-gradient(60% 50% at 20% 80%, rgba(0,82,165,0.35) 0%, transparent 60%), radial-gradient(50% 40% at 90% 20%, rgba(255,89,0,0.18) 0%, transparent 65%)',
            mixBlendMode: 'screen',
          }}
        />
        {/* Gradient overlay: dark at bottom for text legibility */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, rgba(10,14,26,0.25) 0%, rgba(10,14,26,0.1) 40%, rgba(10,14,26,0.75) 75%, rgba(10,14,26,0.92) 100%)',
          }}
        />

        {/* Text overlaid at bottom of image */}
        <div
          className="hero-text-wrap"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 11,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.65)',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              marginBottom: 20,
            }}
          >
            <span style={{ width: 24, height: 1, background: 'rgba(255,255,255,0.5)', display: 'inline-block' }} />
            ColorStack Chapter · Georgia State University
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.09, delayChildren: 0.25 } },
            }}
            className="hero-headline"
            style={{
              fontFamily: 'var(--display)',
              fontSize: 'clamp(26px, 6.5vw, 64px)',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              color: 'white',
              marginBottom: 20,
              maxWidth: '14ch',
            }}
          >
            {['Welcome', 'to', 'ColorStack', 'at', 'GSU'].map((word, i) => (
              <span key={i} style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom', marginRight: '0.25em' }}>
                <motion.span
                  variants={{
                    hidden: { y: '110%', opacity: 0 },
                    visible: { y: '0%', opacity: 1 },
                  }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                  style={{ display: 'inline-block' }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.32 }}
            className="hero-sub"
            style={{
              fontSize: 'clamp(14px, 1.2vw, 18px)',
              color: 'rgba(255,255,255,0.75)',
              lineHeight: 1.6,
              maxWidth: 500,
              marginBottom: 28,
            }}
          >
            A community for Black and Latinx students in computing at Georgia State University.
            Building careers, friendships, and a better industry.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.44 }}
            className="hero-cta-row"
            style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}
          >
            <Link
              to="/become-a-member"
              className="hero-cta"
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 13,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                padding: '16px 32px',
                background: 'var(--gsu-blue)',
                color: 'white',
                borderRadius: 8,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                transition: 'background 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'var(--gsu-blue-bright)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'var(--gsu-blue)';
                (e.currentTarget as HTMLElement).style.transform = '';
              }}
            >
              Become a Member →
            </Link>
            <Link
              to="/about"
              className="hero-cta"
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 13,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                padding: '16px 32px',
                background: 'rgba(255,255,255,0.12)',
                color: 'white',
                borderRadius: 8,
                border: '1px solid rgba(255,255,255,0.25)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                transition: 'background 0.2s',
                backdropFilter: 'blur(8px)',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.2)')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.12)')}
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
