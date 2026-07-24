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
        background: '#ffffff',
        color: '#091024',
        padding: '20px 0',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 2,
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <div className="marquee-track">
        {ITEMS.map((item, i) => (
          <div
            key={i}
            className="marquee-item"
            style={{
              fontFamily: 'var(--display)',
              fontSize: 'clamp(27px, 3.2vw, 40px)',
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
