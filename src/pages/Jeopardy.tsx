import { Link } from 'react-router-dom';
import Scoreboard from '../components/Scoreboard';

function JeopardyRound({
  src,
  round,
  storageKey,
}: {
  src: string;
  round: string;
  storageKey: string;
}) {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        background: '#001133',
        overflowY: 'auto',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 16px',
          background: '#001133',
          color: '#ffffff',
        }}
      >
        <Link
          to="/"
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 12,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.8)',
          }}
        >
          ← Back home
        </Link>
        <span
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 12,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.6)',
          }}
        >
          {round}
        </span>
      </div>

      <div style={{ flex: '1 0 60vh', minHeight: 0 }}>
        <iframe
          src={src}
          title={`Are You Smarter Than a Software Engineer? — Jeopardy, ${round}`}
          frameBorder={0}
          width="100%"
          height="100%"
          style={{ display: 'block', border: 0 }}
        />
      </div>

      <Scoreboard storageKey={storageKey} />
    </div>
  );
}

export default function Jeopardy() {
  return (
    <JeopardyRound
      src="https://jeopardylabs.com/play/are-you-smarter-than-a-software-engineer?embed=1"
      round="Round One"
      storageKey="jeopardy-scoreboard-round-1"
    />
  );
}

export function Jeopardy2() {
  return (
    <JeopardyRound
      src="https://jeopardylabs.com/play/are-you-smarter-than-a-software-engineer-round-2?embed=1"
      round="Round Two"
      storageKey="jeopardy-scoreboard-round-2"
    />
  );
}
