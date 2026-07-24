import { useState } from 'react';
import { eboadYears, type EBoardMember } from '../data/eboard';

/* Modal */
function MemberModal({
  member,
  onClose,
}: {
  member: EBoardMember;
  onClose: () => void;
}) {
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        background: 'rgba(10,14,26,0.75)',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'var(--paper)',
          borderRadius: 20,
          maxWidth: 540,
          width: '100%',
          overflow: 'hidden',
          boxShadow: '0 40px 80px -20px rgba(0,0,0,0.5)',
          animation: 'modal-in 0.25s cubic-bezier(.2,.6,.2,1)',
        }}
      >
        <div style={{ background: 'var(--gsu-blue)', height: 6 }} />

        <div style={{ padding: '32px 32px 28px' }}>
          <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', marginBottom: 24 }}>
            <div
              style={{
                width: 96,
                height: 96,
                borderRadius: 12,
                overflow: 'hidden',
                flexShrink: 0,
                border: '2px solid var(--line)',
                background: 'var(--paper-warm)',
              }}
            >
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--mono)',
                    fontSize: 28,
                    color: 'var(--gsu-blue)',
                    opacity: 0.3,
                  }}
                >
                  ?
                </div>
              )}
            </div>

            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 10,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--gsu-blue)',
                  marginBottom: 6,
                }}
              >
                {member.role}
              </div>
              <h2
                style={{
                  fontFamily: 'var(--display)',
                  fontSize: 26,
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.15,
                }}
              >
                {member.name}
              </h2>
              {(member.major || member.year) && (
                <div
                  style={{
                    marginTop: 6,
                    fontFamily: 'var(--mono)',
                    fontSize: 11,
                    opacity: 0.55,
                    letterSpacing: '0.05em',
                  }}
                >
                  {[member.major, member.year].filter(Boolean).join(' · ')}
                </div>
              )}
            </div>

            <button
              onClick={onClose}
              aria-label="Close"
              style={{
                width: 32,
                height: 32,
                borderRadius: 6,
                background: 'var(--paper-warm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 18,
                opacity: 0.6,
                flexShrink: 0,
                cursor: 'pointer',
                border: 'none',
              }}
            >
              ×
            </button>
          </div>

          {member.bio && (
            <p style={{ fontSize: 15, lineHeight: 1.65, opacity: 0.75, marginBottom: 24 }}>
              {member.bio}
            </p>
          )}

          {(member.linkedin || member.instagram) && (
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ padding: '10px 16px', fontSize: 11, display: 'inline-flex', alignItems: 'center', gap: 8 }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                  </svg>
                  LinkedIn
                </a>
              )}
              {member.instagram && (
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ padding: '10px 16px', fontSize: 11 }}
                >
                  Instagram ↗
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* Member Card */
function MemberCard({
  member,
  onClick,
  index = 0,
}: {
  member: EBoardMember;
  onClick: () => void;
  index?: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="member-card"
      style={{
        display: 'block',
        width: '100%',
        textAlign: 'left',
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        animationDelay: `${index * 80}ms`,
      }}
    >
      <div
        style={{
          borderRadius: 20,
          overflow: 'hidden',
          border: `1px solid ${hovered ? 'var(--gsu-blue)' : 'var(--line)'}`,
          transition: 'all 0.25s',
          transform: hovered ? 'translateY(-6px)' : 'none',
          boxShadow: hovered
            ? '0 28px 48px -20px rgba(0,57,166,0.3)'
            : '0 2px 12px rgba(0,0,0,0.04)',
          background: 'var(--paper)',
        }}
      >
        <div
          style={{
            aspectRatio: '4/5',
            overflow: 'hidden',
            background: 'var(--paper-warm)',
            position: 'relative',
          }}
        >
          {member.image ? (
            <>
              <img
                src={member.image}
                alt={member.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.4s',
                  transform: hovered ? 'scale(1.04)' : 'scale(1)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,57,166,0.7) 0%, transparent 50%)',
                  opacity: hovered ? 1 : 0,
                  transition: 'opacity 0.25s',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '20px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: 12,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'white',
                  }}
                >
                  View profile →
                </span>
              </div>
            </>
          ) : (
            <div
              style={{
                width: '100%',
                height: '100%',
                backgroundImage:
                  'repeating-linear-gradient(45deg, var(--gsu-blue) 0, var(--gsu-blue) 1px, transparent 1px, transparent 12px)',
                backgroundColor: 'rgba(0,57,166,0.03)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span
                style={{
                  background: 'var(--paper)',
                  border: '1px solid var(--gsu-blue)',
                  color: 'var(--gsu-blue)',
                  fontFamily: 'var(--mono)',
                  fontSize: 11,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  padding: '8px 14px',
                  borderRadius: 4,
                }}
              >
                Photo TBA
              </span>
            </div>
          )}
        </div>

        <div style={{ padding: '22px 24px 26px', textAlign: 'center' }}>
          <div
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 11,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--gsu-blue)',
              marginBottom: 8,
            }}
          >
            {member.role}
          </div>
          <div
            style={{
              fontFamily: 'var(--display)',
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: '-0.015em',
              lineHeight: 1.2,
            }}
          >
            {member.name}
          </div>
          {member.major && (
            <div
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 12,
                opacity: 0.5,
                marginTop: 6,
                letterSpacing: '0.04em',
              }}
            >
              {member.major}
            </div>
          )}
        </div>
      </div>
    </button>
  );
}

/* Page */
export default function Students() {
  const [selected, setSelected] = useState<EBoardMember | null>(null);
  // Default to newest year (last in array)
  const [activeYearIdx, setActiveYearIdx] = useState(eboadYears.length - 1);

  const activeYear = eboadYears[activeYearIdx];
  const activeMembers = activeYear.groups.flatMap((g) => g.members);
  const cols = activeMembers.length >= 4 ? 4 : 3;

  return (
    <>
      <style>{`
        @keyframes modal-in {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to   { opacity: 1; transform: none; }
        }
        @keyframes card-fade-in {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: none; }
        }
        .member-card {
          opacity: 0;
          animation: card-fade-in 0.55s cubic-bezier(.2,.6,.2,1) both;
        }
        @media (prefers-reduced-motion: reduce) {
          .member-card {
            opacity: 1;
            animation: none;
          }
        }
        .team-grid {
          display: grid;
          grid-template-columns: repeat(var(--team-cols, 4), 1fr);
          gap: 28px;
          max-width: 1200px;
          margin: 0 auto;
        }
        @media (max-width: 1024px) {
          .team-grid { grid-template-columns: repeat(3, 1fr); max-width: 900px; }
        }
        @media (max-width: 768px) {
          .team-grid { grid-template-columns: repeat(2, 1fr); max-width: 600px; gap: 20px; }
        }
        @media (max-width: 480px) {
          .team-grid { grid-template-columns: 1fr; max-width: 360px; }
        }
        .year-tab {
          font-family: var(--mono);
          font-size: 13px;
          letter-spacing: 0.08em;
          padding: 10px 22px;
          border-radius: 8px;
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
        className="students-hero-pad"
        style={{
          position: 'relative',
          background: 'var(--ink)',
          color: 'white',
          overflow: 'hidden',
          textAlign: 'center',
        }}
      >
        <div
          className="grid-bg dark"
          style={{ position: 'absolute', inset: 0, opacity: 0.7 }}
          aria-hidden
        />
        <div
          style={{
            position: 'absolute',
            width: 600,
            height: 600,
            background: 'radial-gradient(circle, rgba(0,57,166,0.4), transparent 70%)',
            top: -200,
            left: '50%',
            transform: 'translateX(-50%)',
            filter: 'blur(60px)',
            pointerEvents: 'none',
          }}
          aria-hidden
        />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div
            className="section-eyebrow"
            style={{
              color: 'var(--gsu-blue-bright)',
              justifyContent: 'center',
              display: 'flex',
            }}
          >
            <span className="num" style={{ background: 'var(--gsu-blue-bright)' }}>
              Team
            </span>
            Executive Board
          </div>
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
            Meet the{' '}
            <span style={{ color: '#97CAEB' }}>board.</span>
          </h1>
          <p
            style={{
              opacity: 0.65,
              maxWidth: '52ch',
              fontSize: 16,
              lineHeight: 1.5,
              margin: '0 auto',
            }}
          >
            The students running ColorStack at Georgia State. Organizing events, building
            partnerships, and keeping the chapter moving forward.
          </p>
        </div>
      </section>

      {/* Year tabs + grid */}
      <section
        className="board-grid-pad"
        style={{
          background: 'var(--paper)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Year switcher */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 10,
            marginBottom: 56,
          }}
        >
          {eboadYears.map((yr, idx) => (
            <button
              key={yr.label}
              className={`year-tab${idx === activeYearIdx ? ' active' : ''}`}
              onClick={() => setActiveYearIdx(idx)}
            >
              {yr.label}
            </button>
          ))}
        </div>

        {/* Flat grid for active year */}
        <div
          className="team-grid"
          style={{ '--team-cols': cols } as React.CSSProperties}
        >
          {activeMembers.map((member, i) => (
            <MemberCard
              key={`${activeYearIdx}-${member.name}-${i}`}
              member={member}
              index={i}
              onClick={() => setSelected(member)}
            />
          ))}
        </div>
      </section>

      {selected && (
        <MemberModal member={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
