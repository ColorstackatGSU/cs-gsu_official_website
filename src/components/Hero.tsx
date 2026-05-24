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
        {/* Gradient overlay — dark at bottom for text legibility */}
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
            ColorStack Chapter — Georgia State University
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            style={{
              fontFamily: 'var(--display)',
              fontSize: 'clamp(36px, 5.5vw, 80px)',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              color: 'white',
              marginBottom: 24,
              maxWidth: '14ch',
            }}
          >
            Welcome to ColorStack at GSU
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.32 }}
            style={{
              fontSize: 'clamp(15px, 1.2vw, 18px)',
              color: 'rgba(255,255,255,0.75)',
              lineHeight: 1.6,
              maxWidth: 500,
              marginBottom: 36,
            }}
          >
            A community for Black and Latinx students in computing at Georgia State University
            — building careers, friendships, and a better industry.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.44 }}
            style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}
          >
            <Link
              to="/become-a-member"
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
