import { useState } from 'react';
import { eboadYears, type EBoardMember } from '../data/eboard';

/* ── Modal ─────────────────────────────────────────────────────────────── */
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
        {/* Top band */}
        <div
          style={{
            background: 'var(--gsu-blue)',
            height: 6,
          }}
        />

        <div style={{ padding: '32px 32px 28px' }}>
          {/* Photo + close */}
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
              }}
            >
              ×
            </button>
          </div>

          {/* Bio */}
          {member.bio && (
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.65,
                opacity: 0.75,
                marginBottom: 24,
              }}
            >
              {member.bio}
            </p>
          )}

          {/* Links */}
          {(member.email || member.linkedin || member.instagram) && (
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="btn-secondary"
                  style={{ padding: '10px 16px', fontSize: 11 }}
                >
                  Email →
                </a>
              )}
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ padding: '10px 16px', fontSize: 11 }}
                >
                  LinkedIn ↗
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

/* ── Member Card ────────────────────────────────────────────────────────── */
function MemberCard({
  member,
  onClick,
  isPlaceholder,
}: {
  member: EBoardMember;
  onClick: () => void;
  isPlaceholder: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={isPlaceholder ? undefined : onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'block',
        width: '100%',
        textAlign: 'left',
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: isPlaceholder ? 'default' : 'pointer',
      }}
    >
      <div
        style={{
          borderRadius: 16,
          overflow: 'hidden',
          border: `1px solid ${hovered && !isPlaceholder ? 'var(--gsu-blue)' : 'var(--line)'}`,
          transition: 'all 0.25s',
          transform: hovered && !isPlaceholder ? 'translateY(-4px)' : 'none',
          boxShadow:
            hovered && !isPlaceholder
              ? '0 20px 40px -20px rgba(0,57,166,0.25)'
              : 'none',
          background: isPlaceholder ? 'var(--paper-warm)' : 'var(--paper)',
        }}
      >
        {/* Photo */}
        <div
          style={{
            aspectRatio: '4/4.5',
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
              {/* Hover overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,57,166,0.7) 0%, transparent 50%)',
                  opacity: hovered ? 1 : 0,
                  transition: 'opacity 0.25s',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '16px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: 11,
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
            /* Striped placeholder */
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
                  background: 'white',
                  border: '1px solid var(--gsu-blue)',
                  color: 'var(--gsu-blue)',
                  fontFamily: 'var(--mono)',
                  fontSize: 10,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  padding: '6px 12px',
                  borderRadius: 4,
                }}
              >
                Photo TBA
              </span>
            </div>
          )}
        </div>

        {/* Info */}
        <div style={{ padding: '18px 20px 20px' }}>
          <div
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 10,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--gsu-blue)',
              marginBottom: 5,
              opacity: isPlaceholder ? 0.5 : 1,
            }}
          >
            {member.role}
          </div>
          <div
            style={{
              fontFamily: 'var(--display)',
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: '-0.01em',
              opacity: isPlaceholder ? 0.35 : 1,
            }}
          >
            {isPlaceholder ? '——' : member.name}
          </div>
          {member.major && (
            <div
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 11,
                opacity: 0.45,
                marginTop: 4,
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

/* ── Page ───────────────────────────────────────────────────────────────── */
export default function Students() {
  const [activeYear, setActiveYear] = useState(0);
  const [selected, setSelected] = useState<EBoardMember | null>(null);

  const year = eboadYears[activeYear];
  const isPlaceholderYear = activeYear === 1;

  return (
    <>
      <style>{`
        @keyframes modal-in {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to   { opacity: 1; transform: none; }
        }
      `}</style>

      {/* Hero */}
      <section
        style={{
          position: 'relative',
          paddingTop: 160,
          paddingBottom: 80,
          paddingLeft: 32,
          paddingRight: 32,
          background: 'var(--ink)',
          color: 'white',
          overflow: 'hidden',
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
            right: -100,
            filter: 'blur(60px)',
            pointerEvents: 'none',
          }}
          aria-hidden
        />
        <div style={{ maxWidth: 1400, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div className="section-eyebrow" style={{ color: 'var(--gsu-blue-bright)' }}>
            <span className="num" style={{ background: 'var(--gsu-blue-bright)' }}>
              Team
            </span>
            Executive Board
          </div>
          <h1
            style={{
              fontFamily: 'var(--display)',
              fontSize: 'clamp(48px, 8vw, 100px)',
              fontWeight: 600,
              letterSpacing: '-0.04em',
              lineHeight: 0.95,
              marginBottom: 24,
            }}
          >
            Meet the{' '}
            <span style={{ WebkitTextStroke: '2px white', color: 'transparent' }}>board.</span>
          </h1>
          <p style={{ opacity: 0.65, maxWidth: '52ch', fontSize: 18, lineHeight: 1.5 }}>
            The students running ColorStack at Georgia State — organizing events, building
            partnerships, and keeping the chapter moving forward.
          </p>

          {/* Year tabs */}
          <div
            style={{
              display: 'flex',
              gap: 8,
              marginTop: 40,
              flexWrap: 'wrap',
            }}
          >
            {eboadYears.map((y, i) => (
              <button
                key={y.label}
                onClick={() => setActiveYear(i)}
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 12,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  padding: '10px 20px',
                  borderRadius: 6,
                  border: '1px solid',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  background: activeYear === i ? 'white' : 'transparent',
                  color: activeYear === i ? 'var(--ink)' : 'rgba(255,255,255,0.6)',
                  borderColor: activeYear === i ? 'white' : 'rgba(255,255,255,0.2)',
                }}
              >
                {y.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Board grid */}
      <section
        style={{
          padding: '80px 32px 120px',
          background: 'var(--paper)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          {isPlaceholderYear && (
            <div
              style={{
                border: '1px solid var(--line)',
                borderRadius: 12,
                padding: '16px 24px',
                marginBottom: 60,
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                background: 'var(--paper-warm)',
                fontFamily: 'var(--mono)',
                fontSize: 12,
                letterSpacing: '0.06em',
                color: 'var(--gsu-blue)',
              }}
            >
              <span style={{ opacity: 0.5 }}>●</span>
              Applications for the 2026–2027 e-board will open in Spring 2026.
            </div>
          )}

          {year.groups.map((group) => (
            <div key={group.title} style={{ marginBottom: 72 }}>
              {/* Group label */}
              <div
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 11,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--gsu-blue)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  marginBottom: 32,
                }}
              >
                <span
                  style={{
                    width: 32,
                    height: 1,
                    background: 'var(--gsu-blue)',
                    display: 'inline-block',
                  }}
                />
                {group.title}
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                  gap: 20,
                }}
              >
                {group.members.map((member, i) => (
                  <MemberCard
                    key={`${member.name}-${i}`}
                    member={member}
                    isPlaceholder={isPlaceholderYear || member.name === 'TBA'}
                    onClick={() => setSelected(member)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <MemberModal member={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
