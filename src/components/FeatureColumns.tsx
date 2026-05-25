import { motion } from 'framer-motion';

const pillars = [
  {
    num: '01',
    title: 'Career Readiness',
    body: "Resume reviews, mock interviews, technical workshops, and a direct pipeline to ColorStack national's partner companies like Microsoft, Stripe, Roblox, and more.",
    img: '/images/involvement-img.jpg',
  },
  {
    num: '02',
    title: 'Community',
    body: "Game nights, study sessions, food, panel events, and the kind of friendships you'll keep long after graduation. Show up as yourself.",
    img: '/images/involvement-img2.jpg',
  },
  {
    num: '03',
    title: 'Building',
    body: 'Project teams, hackathon squads, open-source contributions, and shipping real things to put on your portfolio and in your offer letters.',
    img: '/images/memeber-img.jpg',
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

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
              fontSize: 'clamp(36px, 5vw, 72px)',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              marginBottom: 60,
            }}
          >
            Three pillars,
            <br />
            one chapter.
          </h2>
        </motion.div>

        <motion.div
          className="mission-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {pillars.map((p) => (
            <motion.div
              key={p.title}
              variants={card}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
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
                  '0 24px 48px -16px rgba(0,57,166,0.2)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--line)';
                (e.currentTarget as HTMLElement).style.boxShadow =
                  '0 2px 16px rgba(0,0,0,0.04)';
              }}
            >
              {/* Card image */}
              <div
                style={{
                  height: 220,
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)')
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1)')
                  }
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(to bottom, transparent 50%, rgba(0,57,166,0.12) 100%)',
                    pointerEvents: 'none',
                  }}
                />
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
          ))}
        </motion.div>
      </div>
    </section>
  );
}
