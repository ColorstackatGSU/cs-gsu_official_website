import { useEffect, useState, type ChangeEvent, type KeyboardEvent } from 'react';

type Team = { id: string; name: string; score: number };

const DEFAULT_TEAMS: Team[] = [
  { id: 'team-1', name: 'Team 1', score: 0 },
  { id: 'team-2', name: 'Team 2', score: 0 },
];

const POINT_STEPS = [100, 200, 300, 400, 500];

function loadTeams(storageKey: string): Team[] {
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) return DEFAULT_TEAMS;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    return DEFAULT_TEAMS;
  } catch {
    return DEFAULT_TEAMS;
  }
}

export default function Scoreboard({ storageKey }: { storageKey: string }) {
  const [teams, setTeams] = useState<Team[]>(() => loadTeams(storageKey));
  const [step, setStep] = useState(200);

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(teams));
    } catch {
      // ignore write failures (e.g. private browsing quota)
    }
  }, [teams, storageKey]);

  const addPoints = (id: string, delta: number) => {
    setTeams((prev) => prev.map((t) => (t.id === id ? { ...t, score: t.score + delta } : t)));
  };

  const renameTeam = (id: string, name: string) => {
    setTeams((prev) => prev.map((t) => (t.id === id ? { ...t, name } : t)));
  };

  const removeTeam = (id: string) => {
    setTeams((prev) => (prev.length > 1 ? prev.filter((t) => t.id !== id) : prev));
  };

  const addTeam = () => {
    setTeams((prev) => [
      ...prev,
      { id: `team-${Date.now()}`, name: `Team ${prev.length + 1}`, score: 0 },
    ]);
  };

  const resetScores = () => {
    setTeams((prev) => prev.map((t) => ({ ...t, score: 0 })));
  };

  return (
    <div
      style={{
        background: '#050b24',
        borderTop: '1px solid rgba(255,255,255,0.12)',
        padding: '14px 16px 18px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 10,
          marginBottom: 12,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 11,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.55)',
          }}
        >
          Scoreboard
        </span>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
          <span
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 11,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.45)',
            }}
          >
            Step
          </span>
          {POINT_STEPS.map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => setStep(v)}
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 11,
                padding: '4px 10px',
                borderRadius: 999,
                border: '1px solid rgba(255,255,255,0.2)',
                background: step === v ? '#0039A6' : 'transparent',
                color: '#ffffff',
                cursor: 'pointer',
              }}
            >
              {v}
            </button>
          ))}

          <button
            type="button"
            onClick={resetScores}
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 11,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              padding: '4px 10px',
              borderRadius: 999,
              border: '1px solid rgba(255,255,255,0.2)',
              background: 'transparent',
              color: 'rgba(255,255,255,0.8)',
              cursor: 'pointer',
              marginLeft: 8,
            }}
          >
            Reset scores
          </button>
          <button
            type="button"
            onClick={addTeam}
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 11,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              padding: '4px 12px',
              borderRadius: 999,
              border: 'none',
              background: '#0039A6',
              color: '#ffffff',
              cursor: 'pointer',
              fontWeight: 600,
            }}
          >
            + Add team
          </button>
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 10,
        }}
      >
        {teams.map((team) => (
          <TeamCard
            key={team.id}
            team={team}
            step={step}
            canRemove={teams.length > 1}
            onAddPoints={(delta) => addPoints(team.id, delta)}
            onRename={(name) => renameTeam(team.id, name)}
            onRemove={() => removeTeam(team.id)}
          />
        ))}
      </div>
    </div>
  );
}

function TeamCard({
  team,
  step,
  canRemove,
  onAddPoints,
  onRename,
  onRemove,
}: {
  team: Team;
  step: number;
  canRemove: boolean;
  onAddPoints: (delta: number) => void;
  onRename: (name: string) => void;
  onRemove: () => void;
}) {
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => onRename(e.target.value);
  const blurOnEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') e.currentTarget.blur();
  };

  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.14)',
        borderRadius: 10,
        padding: '10px 12px',
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <input
          value={team.name}
          onChange={handleNameChange}
          onKeyDown={blurOnEnter}
          aria-label="Team name"
          style={{
            flex: 1,
            minWidth: 0,
            background: 'transparent',
            border: 'none',
            borderBottom: '1px solid rgba(255,255,255,0.2)',
            color: '#ffffff',
            fontFamily: 'var(--mono)',
            fontSize: 12,
            letterSpacing: '0.02em',
            padding: '2px 0',
          }}
        />
        {canRemove && (
          <button
            type="button"
            onClick={onRemove}
            aria-label={`Remove ${team.name}`}
            style={{ color: 'rgba(255,255,255,0.5)', padding: 4, cursor: 'pointer' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
        )}
      </div>

      <div
        style={{
          fontFamily: 'var(--display)',
          fontWeight: 700,
          fontSize: 28,
          color: '#ffffff',
          textAlign: 'center',
        }}
      >
        {team.score}
      </div>

      <div style={{ display: 'flex', gap: 6 }}>
        <button
          type="button"
          onClick={() => onAddPoints(-step)}
          style={{
            flex: 1,
            fontFamily: 'var(--mono)',
            fontSize: 13,
            fontWeight: 600,
            padding: '6px 0',
            borderRadius: 8,
            border: '1px solid rgba(255,255,255,0.2)',
            background: 'rgba(220, 38, 38, 0.15)',
            color: '#fca5a5',
            cursor: 'pointer',
          }}
        >
          − {step}
        </button>
        <button
          type="button"
          onClick={() => onAddPoints(step)}
          style={{
            flex: 1,
            fontFamily: 'var(--mono)',
            fontSize: 13,
            fontWeight: 600,
            padding: '6px 0',
            borderRadius: 8,
            border: '1px solid rgba(255,255,255,0.2)',
            background: 'rgba(34, 197, 94, 0.15)',
            color: '#86efac',
            cursor: 'pointer',
          }}
        >
          + {step}
        </button>
      </div>
    </div>
  );
}
