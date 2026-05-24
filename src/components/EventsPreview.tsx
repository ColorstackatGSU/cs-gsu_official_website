import { Link } from 'react-router-dom';

const events = [
  { date: 'SEP 12', title: 'Kickoff: Welcome to ColorStack GSU', tag: 'In person · Aderhold' },
  { date: 'SEP 26', title: 'Resume Lab w/ Microsoft recruiters', tag: 'Hybrid · 6 PM' },
  { date: 'OCT 10', title: 'Build Night: GroupMe API hack', tag: 'In person · Lab' },
  { date: 'OCT 24', title: 'Panel: Black women shipping at Big Tech', tag: 'In person · 7 PM' },
  { date: 'NOV 07', title: 'Mock Technical Interviews', tag: 'In person · all-day' },
];

export default function EventsPreview() {
  return (
    <section
      style={{
        background: 'var(--paper-warm)',
        position: 'relative',
        padding: '120px 32px',
        zIndex: 1,
        borderTop: '1px solid var(--line)',
      }}
    >
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        {/* Header row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: 24,
            marginBottom: 40,
          }}
        >
          <div>
            <div className="section-eyebrow">
              <span className="num">03</span>
              Upcoming
            </div>
            <h2
              style={{
                fontFamily: 'var(--display)',
                fontSize: 'clamp(40px, 6vw, 88px)',
                fontWeight: 600,
                letterSpacing: '-0.035em',
                lineHeight: 1,
                marginBottom: 0,
              }}
            >
              This semester.
            </h2>
          </div>
          <Link to="/involvement" className="btn-secondary">
            All events →
          </Link>
        </div>

        {/* Event list */}
        <div className="reveal">
          {events.map((e) => (
            <div key={e.date} className="event-row">
              <div
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 11,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--gsu-blue)',
                  fontWeight: 600,
                }}
              >
                {e.date}
              </div>
              <div
                style={{
                  fontFamily: 'var(--display)',
                  fontSize: 'clamp(18px, 2vw, 26px)',
                  fontWeight: 500,
                  letterSpacing: '-0.01em',
                }}
              >
                {e.title}
              </div>
              <div
                className="event-tag"
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 10,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  padding: '6px 10px',
                  borderRadius: 4,
                  border: '1px solid var(--line-strong)',
                  opacity: 0.7,
                  whiteSpace: 'nowrap',
                }}
              >
                {e.tag}
              </div>
              <div className="event-arrow">→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
