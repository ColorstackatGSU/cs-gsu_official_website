import { useState } from 'react';
import { AnimatePresence, motion, type Variants } from 'framer-motion';
import { eventYears, type Event } from '../data/events';
import GetInvolved from '../components/GetInvolved';

/* ---------------- Animations ---------------- */

// Three different entrance styles, rotated per card
const cardVariants: Variants[] = [
  // From left, with slight rotation
  {
    hidden: { opacity: 0, x: -90, rotate: -4 },
    show: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
  },
  // Pop up from below with spring
  {
    hidden: { opacity: 0, y: 80, scale: 0.92 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 140, damping: 16 },
    },
  },
  // From right, with rotation
  {
    hidden: { opacity: 0, x: 90, rotate: 4 },
    show: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
  },
];

/* ---------------- Event Card ---------------- */

function EventCard({ event, index }: { event: Event; index: number }) {
  const variants = cardVariants[index % cardVariants.length];

  return (
    <motion.article
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        background: 'var(--paper)',
        border: 'none',
        borderRadius: 0,
        overflow: 'hidden',
        boxShadow: 'none',
        transition: 'all 0.3s',
      }}
      className="event-card"
    >
      {/* Image */}
      <div className="event-card-img">
        {event.image ? (
          <motion.img
            src={event.image}
            alt={event.title}
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              background:
                'linear-gradient(135deg, var(--gsu-blue) 0%, var(--gsu-blue-bright) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              aria-hidden
              style={{
                position: 'absolute',
                inset: 0,
                opacity: 0.15,
                backgroundImage:
                  'repeating-linear-gradient(45deg, white 0, white 1px, transparent 1px, transparent 18px)',
              }}
            />
            <div
              style={{
                fontFamily: 'var(--display)',
                fontSize: 96,
                fontWeight: 700,
                color: 'white',
                opacity: 0.85,
                lineHeight: 0.8,
                position: 'relative',
              }}
            >
              {event.date.split(' ')[1]?.replace(',', '') ?? ''}
            </div>
          </div>
        )}
      </div>

      {/* Body */}
      <div
        style={{
          padding: '22px 24px 26px',
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          background: 'var(--paper)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 8,
            flexWrap: 'wrap',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 11,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#ffffff',
            }}
          >
            {event.date}
          </span>
          {event.tag && (
            <span
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 10,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                padding: '4px 10px',
                background: 'rgba(255, 255, 255, 0.08)',
                color: '#ffffff',
                borderRadius: 4,
                fontWeight: 600,
                marginLeft: 8,
              }}
            >
              {event.tag}
            </span>
          )}
        </div>
        <h3
          style={{
            fontFamily: 'var(--display)',
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: 0,
            lineHeight: 1.2,
          }}
        >
          {event.title}
        </h3>
        <p
          style={{
            fontSize: 12,
            lineHeight: 1.5,
            opacity: 0.5,
            margin: '6px 0 0',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {event.description}
        </p>
        <div
          style={{
            marginTop: 8,
            fontFamily: 'var(--mono)',
            fontSize: 12,
            letterSpacing: '0.04em',
            opacity: 0.35,
          }}
        >
          {event.semester}
        </div>
      </div>
    </motion.article>
  );
}

/* ---------------- Empty year placeholder ---------------- */

function EmptyYear() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: 'var(--paper)',
        border: '1px dashed var(--line-strong)',
        borderRadius: 24,
        padding: '80px 32px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Floating sparkles */}
      {[
        { x: '10%', y: '20%', size: 8, delay: 0 },
        { x: '85%', y: '30%', size: 12, delay: 0.4 },
        { x: '20%', y: '75%', size: 6, delay: 0.8 },
        { x: '78%', y: '70%', size: 10, delay: 0.2 },
        { x: '50%', y: '15%', size: 7, delay: 0.6 },
      ].map((s, i) => (
        <motion.div
          key={i}
          aria-hidden
          animate={{
            y: [0, -14, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.4,
            repeat: Infinity,
            delay: s.delay,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            left: s.x,
            top: s.y,
            width: s.size,
            height: s.size,
            borderRadius: 2,
            background: 'var(--gsu-blue)',
            transform: 'rotate(45deg)',
            opacity: 0.4,
          }}
        />
      ))}

      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 140, damping: 12, delay: 0.2 }}
        style={{
          width: 80,
          height: 80,
          margin: '0 auto 28px',
          borderRadius: '50%',
          background: 'rgba(0,57,166,0.08)',
          backgroundImage: 'url(/images/colorstack-gsu-logo.png)',
          backgroundSize: 52,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 0,
          position: 'relative',
        }}
      >
        ✨
      </motion.div>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{
          fontFamily: 'var(--display)',
          fontSize: 'clamp(24px, 3.2vw, 36px)',
          fontWeight: 700,
          letterSpacing: '-0.03em',
          lineHeight: 1.15,
          marginBottom: 14,
          maxWidth: 600,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        Can&apos;t wait to make some{' '}
        <span style={{ color: 'var(--gsu-blue)' }}>new memories.</span>
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55 }}
        style={{
          fontSize: 16,
          opacity: 0.6,
          maxWidth: 520,
          margin: '0 auto',
          lineHeight: 1.6,
        }}
      >
        The 2026&ndash;2027 calendar is on its way. Check back soon, or join us
        on PIN to be the first to know.
      </motion.p>
    </motion.div>
  );
}

/* ---------------- Page ---------------- */

export default function Involvement() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeYear = eventYears[activeIdx];
  const eventCols = activeYear.events.length >= 4 ? 4 : 3;

  return (
    <>
      <style>{`
        .event-card {
          grid-template-columns: 1fr;
          height: 100%;
        }
        .event-card-img {
          aspect-ratio: 4 / 5;
          overflow: hidden;
          background: var(--paper-warm);
        }
        .events-list {
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
          max-width: 1200px;
          margin: 0 auto;
        }
        @media (min-width: 481px) {
          .events-list {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            max-width: 600px;
          }
        }
        @media (min-width: 769px) {
          .events-list {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            max-width: 900px;
          }
        }
        @media (min-width: 1025px) {
          .events-list {
            grid-template-columns: repeat(var(--event-cols, 4), minmax(0, 1fr));
            max-width: 1200px;
          }
        }
        .year-tab {
          font-family: var(--mono);
          font-size: 13px;
          letter-spacing: 0.08em;
          padding: 10px 22px;
          border-radius: 999px;
          border: 1px solid var(--line);
          background: none;
          cursor: pointer;
          transition: all 0.2s;
          color: inherit;
          opacity: 0.55;
        }
        .year-tab:hover {
          opacity: 0.85;
          border-color: var(--gsu-blue);
        }
        .year-tab.active {
          background: var(--gsu-blue);
          border-color: var(--gsu-blue);
          color: white;
          opacity: 1;
        }
      `}</style>

      {/* Hero */}
      <section
        style={{
          position: 'relative',
          background: 'var(--paper)',
          color: 'white',
          overflow: 'hidden',
          textAlign: 'center',
          padding: '160px 24px 100px',
        }}
      >
        <div
          className="grid-bg dark"
          style={{ position: 'absolute', inset: 0, opacity: 0.7 }}
          aria-hidden
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 2 }}
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
            Events &middot; What we&apos;ve been up to
          </p>
          <h1
            style={{
              fontFamily: 'var(--display)',
              fontSize: 'clamp(40px, 6.5vw, 80px)',
              fontWeight: 600,
              letterSpacing: '-0.04em',
              lineHeight: 0.95,
              marginBottom: 24,
            }}
          >
            Look what we&apos;ve{' '}
            <span style={{ color: '#97CAEB' }}>
              gotten into.
            </span>
          </h1>
          <p
            style={{
              opacity: 0.65,
              maxWidth: '56ch',
              fontSize: 16,
              lineHeight: 1.5,
              margin: '0 auto',
            }}
          >
            Hackathons, mixers, panels, study nights, and the moments in between.
            Here&apos;s what we&apos;ve been building together.
          </p>
        </motion.div>
      </section>

      {/* Events */}
      <section style={{ background: 'var(--paper-warm)', padding: '80px 24px 120px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          {/* Year tabs */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 10,
              marginBottom: 56,
            }}
          >
            {eventYears.map((yr, idx) => (
              <button
                key={yr.label}
                className={`year-tab${idx === activeIdx ? ' active' : ''}`}
                onClick={() => setActiveIdx(idx)}
              >
                {yr.label}
              </button>
            ))}
          </div>

          {/* Animated content swap */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeYear.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {activeYear.events.length > 0 ? (
                <div
                  className="events-list"
                  style={{ '--event-cols': eventCols } as React.CSSProperties}
                >
                  {activeYear.events.map((e, i) => (
                    <EventCard key={e.title} event={e} index={i} />
                  ))}
                </div>
              ) : (
                <EmptyYear />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <GetInvolved />
    </>
  );
}
