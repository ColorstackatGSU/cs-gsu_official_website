import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/involvement', label: 'Events' },
  { to: '/students', label: 'Team' },
  { to: '/sponsors', label: 'Resources' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}>
      <nav
        style={{
          padding: '18px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(255,255,255,0.75)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--line)',
          transition: 'all 0.3s ease',
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            fontFamily: 'var(--mono)',
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: '0.02em',
            textTransform: 'uppercase',
            color: 'var(--ink)',
          }}
        >
          <div
            className="nav-logo-mark"
            style={{
              width: 28,
              height: 28,
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gridTemplateRows: '1fr 1fr',
              gap: 2,
            }}
          >
            <span /><span /><span /><span />
          </div>
          <span>ColorStack&nbsp;·&nbsp;GSU</span>
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: 4, alignItems: 'center' }} className="hidden md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              style={({ isActive }) => ({
                fontFamily: 'var(--mono)',
                fontSize: 12,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                padding: '8px 14px',
                borderRadius: 6,
                transition: 'all 0.2s',
                color: isActive ? 'var(--gsu-blue)' : 'var(--ink)',
                position: 'relative',
              })}
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/become-a-member"
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 12,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              padding: '10px 18px',
              background: 'var(--gsu-blue)',
              color: 'white',
              borderRadius: 6,
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              marginLeft: 8,
            }}
          >
            Join Us
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden"
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          style={{ padding: 8, color: 'var(--gsu-blue)' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open
              ? <path d="M6 6l12 12M6 18L18 6" />
              : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: 'rgba(255,255,255,0.97)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--line)',
            padding: '12px 24px 20px',
          }}
        >
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              onClick={() => setOpen(false)}
              style={({ isActive }) => ({
                display: 'block',
                fontFamily: 'var(--mono)',
                fontSize: 13,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                padding: '12px 0',
                borderBottom: '1px solid var(--line)',
                color: isActive ? 'var(--gsu-blue)' : 'var(--ink)',
              })}
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/become-a-member"
            onClick={() => setOpen(false)}
            style={{
              display: 'block',
              marginTop: 16,
              fontFamily: 'var(--mono)',
              fontSize: 13,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              padding: '14px 20px',
              background: 'var(--gsu-blue)',
              color: 'white',
              borderRadius: 8,
              textAlign: 'center',
            }}
          >
            Join Us
          </Link>
        </div>
      )}
    </header>
  );
}
