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
    <header
      style={{
        position: 'absolute',
        top: 30,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 32px)',
        maxWidth: 860,
        zIndex: 50,
      }}
    >
      <nav
        className="nav-bar"
        style={{
          padding: '8px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: 'none',
          borderRadius: 999,
          boxShadow: '0 12px 36px rgba(0, 0, 0, 0.15)',
          transition: 'all 0.3s ease',
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          style={{ display: 'flex', alignItems: 'center', gap: 10 }}
        >
          <img
            src="/images/colorstack-gsu-logo.png"
            alt="ColorStack GSU"
            className="nav-logo-img"
            style={{ display: 'block', width: 32, height: 32, borderRadius: 8 }}
          />
          <span
            className="nav-brand-text"
            style={{
              fontFamily: 'var(--display)',
              fontWeight: 600,
              fontSize: 15,
              letterSpacing: '-0.01em',
              color: '#091024',
            }}
          >
            ColorStack at GSU
          </span>
        </Link>

        {/* Desktop links */}
        <div style={{ gap: 4, alignItems: 'center' }} className="hidden md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              style={({ isActive }) => ({
                fontFamily: 'var(--mono)',
                fontSize: 11,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                padding: '8px 18px',
                borderRadius: 999,
                transition: 'all 0.2s',
                color: isActive ? '#091024' : 'rgba(9, 16, 36, 0.75)',
                fontWeight: isActive ? 600 : 500,
                background: isActive ? 'rgba(9, 16, 36, 0.08)' : 'transparent',
                position: 'relative',
              })}
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/apply"
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 11,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              padding: '9px 22px',
              background: '#CC0000',
              color: '#ffffff',
              borderRadius: 999,
              fontWeight: 600,
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
          style={{ padding: 6, color: '#091024' }}
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
            marginTop: 10,
            background: 'rgba(255, 255, 255, 0.96)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: 'none',
            borderRadius: 24,
            padding: '16px 24px 24px',
            boxShadow: '0 12px 32px rgba(0, 0, 0, 0.15)',
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
                borderBottom: '1px solid rgba(9, 16, 36, 0.08)',
                color: isActive ? '#091024' : 'rgba(9, 16, 36, 0.75)',
                fontWeight: isActive ? 600 : 500,
              })}
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/apply"
            onClick={() => setOpen(false)}
            style={{
              display: 'block',
              marginTop: 16,
              fontFamily: 'var(--mono)',
              fontSize: 13,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              padding: '14px 20px',
              background: '#CC0000',
              color: '#ffffff',
              borderRadius: 999,
              textAlign: 'center',
              fontWeight: 600,
            }}
          >
            Join Us
          </Link>
        </div>
      )}
    </header>
  );
}
