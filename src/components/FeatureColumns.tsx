const pillars = [
  {
    num: '— Pillar 01',
    title: 'Career Readiness',
    body: "Resume reviews, mock interviews, technical workshops, and a direct pipeline to ColorStack national's partner companies (Microsoft, Stripe, Roblox, & more).",
    delay: '0s',
  },
  {
    num: '— Pillar 02',
    title: 'Community',
    body: "Game nights, study sessions, food, panel events, and the kind of friendships you'll keep long after graduation. Show up as yourself.",
    delay: '0.1s',
  },
  {
    num: '— Pillar 03',
    title: 'Building',
    body: 'Project teams, hackathon squads, open-source contributions, and shipping real things to put on your portfolio & in your offer letters.',
    delay: '0.2s',
  },
];

export default function FeatureColumns() {
  return (
    <section
      style={{
        background: 'var(--paper-warm)',
        position: 'relative',
        padding: '120px 32px',
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <div className="section-eyebrow">
          <span className="num">02</span>
          What we do
        </div>
        <h2
          style={{
            fontFamily: 'var(--display)',
            fontSize: 'clamp(40px, 6vw, 88px)',
            fontWeight: 600,
            letterSpacing: '-0.035em',
            lineHeight: 1,
            marginBottom: 60,
          }}
        >
          Three pillars,
          <br />
          one chapter.
        </h2>

        <div className="mission-grid">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="reveal"
              style={{
                background: 'var(--paper)',
                border: '1px solid var(--line)',
                borderRadius: 16,
                padding: 32,
                transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
                transitionDelay: p.delay,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--gsu-blue)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow =
                  '0 20px 40px -20px rgba(0,57,166,0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--line)';
                e.currentTarget.style.transform = '';
                e.currentTarget.style.boxShadow = '';
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 11,
                  color: 'var(--gsu-blue)',
                  letterSpacing: '0.1em',
                  marginBottom: 16,
                }}
              >
                {p.num}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--display)',
                  fontSize: 28,
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  marginBottom: 12,
                  lineHeight: 1.1,
                }}
              >
                {p.title}
              </h3>
              <p style={{ opacity: 0.7, fontSize: 15, lineHeight: 1.55 }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
