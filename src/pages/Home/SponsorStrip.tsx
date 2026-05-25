const ITEMS = [
  'Workshops',
  'Hackathons',
  'Mentorship',
  'Internships',
  'Community',
  'Career Prep',
  'Workshops',
  'Hackathons',
  'Mentorship',
  'Internships',
  'Community',
  'Career Prep',
];

export default function SponsorStrip() {
  return (
    <div
      style={{
        background: 'var(--gsu-blue)',
        color: 'white',
        padding: '24px 0',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 2,
        borderTop: '1px solid var(--gsu-blue-dim)',
        borderBottom: '1px solid var(--gsu-blue-dim)',
      }}
    >
      <div className="marquee-track">
        {ITEMS.map((item, i) => (
          <div
            key={i}
            className="marquee-item"
            style={{
              fontFamily: 'var(--display)',
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              display: 'inline-block',
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
