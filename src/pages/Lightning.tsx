import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Scoreboard from '../components/Scoreboard';
import { LIGHTNING_QUESTIONS, SUDDEN_DEATH_QUESTIONS, type LightningQuestion } from '../data/lightningQuestions';

const ALL_QUESTIONS: LightningQuestion[] = [...LIGHTNING_QUESTIONS, ...SUDDEN_DEATH_QUESTIONS];

export default function Lightning() {
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const question = ALL_QUESTIONS[index];
  const isSuddenDeath = question.category === 'Sudden Death';
  const isLast = index === ALL_QUESTIONS.length - 1;

  const progressLabel = useMemo(() => {
    if (isSuddenDeath) {
      const sdIndex = SUDDEN_DEATH_QUESTIONS.findIndex((q) => q.id === question.id);
      return `Sudden death ${sdIndex + 1} / ${SUDDEN_DEATH_QUESTIONS.length}`;
    }
    return `Question ${index + 1} / ${LIGHTNING_QUESTIONS.length}`;
  }, [index, isSuddenDeath, question.id]);

  const goNext = () => {
    setRevealed(false);
    setIndex((i) => Math.min(i + 1, ALL_QUESTIONS.length - 1));
  };

  const goPrev = () => {
    setRevealed(false);
    setIndex((i) => Math.max(i - 1, 0));
  };

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
          Lightning Round
        </span>
      </div>

      <div
        style={{
          flex: '1 0 60vh',
          minHeight: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '32px 20px',
          gap: 24,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <span
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 12,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: isSuddenDeath ? '#facc15' : 'rgba(255,255,255,0.5)',
            }}
          >
            {isSuddenDeath ? 'Sudden Death Tiebreaker' : question.category}
          </span>
          <span
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 11,
              letterSpacing: '0.08em',
              color: 'rgba(255,255,255,0.35)',
            }}
          >
            {progressLabel}
          </span>
        </div>

        <div
          style={{
            width: '100%',
            maxWidth: 760,
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.14)',
            borderRadius: 16,
            padding: '36px 32px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--display)',
              fontWeight: 700,
              fontSize: 'clamp(20px, 3.2vw, 32px)',
              color: '#ffffff',
              lineHeight: 1.4,
            }}
          >
            {question.question}
          </div>

          {revealed && (
            <div
              style={{
                marginTop: 24,
                paddingTop: 24,
                borderTop: '1px solid rgba(255,255,255,0.16)',
                fontFamily: 'var(--mono)',
                fontSize: 'clamp(15px, 2vw, 19px)',
                color: '#86efac',
                lineHeight: 1.5,
              }}
            >
              {question.answer}
            </div>
          )}
        </div>

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
          <button
            type="button"
            onClick={goPrev}
            disabled={index === 0}
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 13,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              padding: '10px 18px',
              borderRadius: 999,
              border: '1px solid rgba(255,255,255,0.2)',
              background: 'transparent',
              color: index === 0 ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.8)',
              cursor: index === 0 ? 'default' : 'pointer',
            }}
          >
            ← Prev
          </button>

          <button
            type="button"
            onClick={() => setRevealed((r) => !r)}
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              padding: '10px 22px',
              borderRadius: 999,
              border: 'none',
              background: revealed ? 'rgba(255,255,255,0.14)' : '#0039A6',
              color: '#ffffff',
              cursor: 'pointer',
            }}
          >
            {revealed ? 'Hide answer' : 'Reveal answer'}
          </button>

          <button
            type="button"
            onClick={goNext}
            disabled={isLast}
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 13,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              padding: '10px 18px',
              borderRadius: 999,
              border: 'none',
              background: isLast ? 'rgba(255,255,255,0.08)' : '#0039A6',
              color: isLast ? 'rgba(255,255,255,0.3)' : '#ffffff',
              cursor: isLast ? 'default' : 'pointer',
            }}
          >
            Next →
          </button>
        </div>
      </div>

      <Scoreboard
        storageKey="lightning-round-scoreboard"
        fixedStep={1}
        defaultTeams={[
          { id: 'player-1', name: 'Player 1', score: 0 },
          { id: 'player-2', name: 'Player 2', score: 0 },
        ]}
      />
    </div>
  );
}
