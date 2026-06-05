import type { ReactElement } from 'react';
import { motion, type Variants } from 'framer-motion';

/* ---------- Illustrations ---------- */

function CareerArt() {
  return (
    <svg viewBox="0 0 320 220" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="careerBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0039A6" />
          <stop offset="100%" stopColor="#1d56c9" />
        </linearGradient>
      </defs>
      <rect width="320" height="220" fill="url(#careerBg)" />

      {/* grid */}
      <g opacity="0.18" stroke="white" strokeWidth="1">
        <line x1="0" y1="55" x2="320" y2="55" />
        <line x1="0" y1="110" x2="320" y2="110" />
        <line x1="0" y1="165" x2="320" y2="165" />
        <line x1="80" y1="0" x2="80" y2="220" />
        <line x1="160" y1="0" x2="160" y2="220" />
        <line x1="240" y1="0" x2="240" y2="220" />
      </g>

      {/* rising bars */}
      <g>
        {[60, 110, 160, 210].map((x, i) => {
          const heights = [50, 80, 120, 150];
          const h = heights[i];
          return (
            <motion.rect
              key={i}
              x={x}
              y={190 - h}
              width="28"
              height={h}
              rx="4"
              fill="white"
              fillOpacity={0.25 + i * 0.18}
              initial={{ scaleY: 0, transformOrigin: 'bottom' }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformBox: 'fill-box', transformOrigin: '50% 100%' }}
            />
          );
        })}
      </g>

      {/* arrow trail */}
      <motion.path
        d="M 50 160 Q 130 130, 175 100 T 280 40"
        stroke="white"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }}
      />
      <motion.polygon
        points="275,32 290,40 275,48"
        fill="white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 1.6 }}
      />
    </svg>
  );
}

function CommunityArt() {
  const nodes = [
    { cx: 80, cy: 70, r: 14 },
    { cx: 220, cy: 60, r: 18 },
    { cx: 260, cy: 150, r: 14 },
    { cx: 160, cy: 170, r: 16 },
    { cx: 60, cy: 160, r: 12 },
    { cx: 160, cy: 100, r: 20 },
  ];
  const links: [number, number][] = [
    [5, 0], [5, 1], [5, 2], [5, 3], [5, 4],
    [0, 4], [1, 2], [3, 2], [3, 4],
  ];

  return (
    <svg viewBox="0 0 320 220" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="commBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1d56c9" />
          <stop offset="100%" stopColor="#0039A6" />
        </linearGradient>
      </defs>
      <rect width="320" height="220" fill="url(#commBg)" />

      {/* dotted background */}
      <g opacity="0.2" fill="white">
        {Array.from({ length: 8 }).map((_, r) =>
          Array.from({ length: 12 }).map((_, c) => (
            <circle key={`${r}-${c}`} cx={20 + c * 27} cy={15 + r * 27} r="1" />
          ))
        )}
      </g>

      {/* connection lines */}
      <g stroke="white" strokeOpacity="0.55" strokeWidth="1.5">
        {links.map(([a, b], i) => {
          const A = nodes[a];
          const B = nodes[b];
          return (
            <motion.line
              key={i}
              x1={A.cx}
              y1={A.cy}
              x2={B.cx}
              y2={B.cy}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.06 }}
            />
          );
        })}
      </g>

      {/* nodes (pulsing) */}
      {nodes.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.cx}
          cy={n.cy}
          r={n.r}
          fill="white"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.1 + i * 0.08,
            type: 'spring',
            stiffness: 200,
          }}
          style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
        >
          <animate
            attributeName="opacity"
            values="0.9;0.6;0.9"
            dur={`${2.2 + i * 0.3}s`}
            repeatCount="indefinite"
          />
        </motion.circle>
      ))}

      {/* center accent ring */}
      <motion.circle
        cx="160"
        cy="100"
        r="30"
        fill="none"
        stroke="white"
        strokeOpacity="0.4"
        strokeWidth="1.5"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 1.0 }}
        style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
      />
    </svg>
  );
}

function BuildingArt() {
  return (
    <svg viewBox="0 0 320 220" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="buildBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0039A6" />
          <stop offset="100%" stopColor="#002a7a" />
        </linearGradient>
      </defs>
      <rect width="320" height="220" fill="url(#buildBg)" />

      {/* diagonal lines */}
      <g opacity="0.12" stroke="white" strokeWidth="1">
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={i} x1={-40 + i * 40} y1="0" x2={20 + i * 40} y2="220" />
        ))}
      </g>

      {/* stacking blocks */}
      <motion.g
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{ show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } } }}
      >
        {[
          { x: 110, y: 150, w: 100, h: 30, fill: 'rgba(255,255,255,0.95)' },
          { x: 95, y: 115, w: 130, h: 30, fill: 'rgba(255,255,255,0.75)' },
          { x: 80, y: 80, w: 160, h: 30, fill: 'rgba(255,255,255,0.55)' },
          { x: 130, y: 45, w: 60, h: 30, fill: 'rgba(255,255,255,0.35)' },
        ].map((b, i) => (
          <motion.rect
            key={i}
            x={b.x}
            y={b.y}
            width={b.w}
            height={b.h}
            rx="6"
            fill={b.fill}
            variants={{
              hidden: { y: -30, opacity: 0 },
              show: {
                y: 0,
                opacity: 1,
                transition: { type: 'spring', stiffness: 180, damping: 14 },
              },
            }}
          />
        ))}
      </motion.g>

      {/* code brackets */}
      <motion.text
        x="36"
        y="40"
        fontSize="32"
        fontFamily="Montserrat, sans-serif"
        fontWeight="700"
        fill="white"
        fillOpacity="0.8"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 0.8, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        {'</>'}
      </motion.text>

      <motion.text
        x="248"
        y="200"
        fontSize="24"
        fontFamily="Montserrat, sans-serif"
        fontWeight="700"
        fill="white"
        fillOpacity="0.5"
        initial={{ opacity: 0, x: 10 }}
        whileInView={{ opacity: 0.5, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1.1 }}
      >
        {'{ }'}
      </motion.text>
    </svg>
  );
}

/* ---------- Pillars ---------- */

const pillars: Array<{
  num: string;
  title: string;
  body: string;
  Art: () => ReactElement;
  variants: Variants;
}> = [
  {
    num: '01',
    title: 'Career Readiness',
    body: "Resume reviews, mock interviews, technical workshops, and a direct pipeline to ColorStack national's partner companies like Microsoft, Stripe, Roblox, and more.",
    Art: CareerArt,
    // Slide in from the left with a small rotation
    variants: {
      hidden: { opacity: 0, x: -80, rotate: -3 },
      show: {
        opacity: 1,
        x: 0,
        rotate: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
      },
    },
  },
  {
    num: '02',
    title: 'Community',
    body: "Game nights, study sessions, food, panel events, and the kind of friendships you'll keep long after graduation. Show up as yourself.",
    Art: CommunityArt,
    // Pop in with spring scale
    variants: {
      hidden: { opacity: 0, scale: 0.7, y: 30 },
      show: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 160, damping: 14, delay: 0.15 },
      },
    },
  },
  {
    num: '03',
    title: 'Building',
    body: 'Project teams, hackathon squads, open-source contributions, and shipping real things to put on your portfolio and in your offer letters.',
    Art: BuildingArt,
    // Slide in from the right with rotation
    variants: {
      hidden: { opacity: 0, x: 80, rotate: 3 },
      show: {
        opacity: 1,
        x: 0,
        rotate: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
      },
    },
  },
];

export default function FeatureColumns() {
  return (
    <section
      className="section-pad-xl"
      style={{
        background: 'var(--paper-warm)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
        >
          <div className="section-eyebrow">
            <span className="num">02</span>
            What we do
          </div>
          <h2
            style={{
              fontFamily: 'var(--display)',
              fontSize: 'clamp(30px, 4vw, 58px)',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              marginBottom: 60,
            }}
          >
            What you actually
            <br />
            get out of it.
          </h2>
        </motion.div>

        <div className="mission-grid">
          {pillars.map((p) => {
            const Art = p.Art;
            return (
              <motion.div
                key={p.title}
                variants={p.variants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                style={{
                  background: 'var(--paper)',
                  border: '1px solid var(--line)',
                  borderRadius: 20,
                  overflow: 'hidden',
                  cursor: 'default',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.04)',
                  transition: 'border-color 0.3s, box-shadow 0.3s',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--gsu-blue)';
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    '0 24px 48px -16px rgba(0,57,166,0.25)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--line)';
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    '0 2px 16px rgba(0,0,0,0.04)';
                }}
              >
                {/* Illustrated header */}
                <div style={{ height: 220, overflow: 'hidden', position: 'relative' }}>
                  <Art />
                </div>

                {/* Card body */}
                <div style={{ padding: '28px 28px 32px' }}>
                  <div
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: 11,
                      color: 'var(--gsu-blue)',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      marginBottom: 12,
                    }}
                  >
                    Pillar {p.num}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--display)',
                      fontSize: 24,
                      fontWeight: 700,
                      letterSpacing: '-0.02em',
                      marginBottom: 12,
                      lineHeight: 1.15,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p style={{ opacity: 0.65, fontSize: 15, lineHeight: 1.65 }}>{p.body}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
