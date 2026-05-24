import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const links = [
  { to: '/about', label: 'About' },
  { to: '/involvement', label: 'Involvement' },
  { to: '/students', label: 'Students' },
  { to: '/sponsors', label: 'Sponsors' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gsu-light-gray bg-white/90 backdrop-blur">
      <nav className="container-wide flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src="/images/blue_logo.png.svg"
            alt="ColorStack at GSU"
            className="h-10 w-auto"
          />
          <span className="hidden text-lg font-display font-bold text-gsu-blue sm:inline">
            ColorStack <span className="text-gsu-red">@</span> GSU
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `text-sm font-semibold transition ${
                    isActive ? 'text-gsu-blue' : 'text-gsu-blue-steel hover:text-gsu-blue'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link to="/become-a-member" className="btn-primary px-5 py-2 text-sm">
              Become a Member
            </Link>
          </li>
        </ul>

        <button
          type="button"
          className="md:hidden rounded-md p-2 text-gsu-blue"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-gsu-light-gray bg-white">
          <ul className="container-wide flex flex-col gap-1 py-3">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded px-3 py-2 text-base font-semibold ${
                      isActive ? 'bg-gsu-light-gray text-gsu-blue' : 'text-gsu-blue-steel'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <Link to="/become-a-member" onClick={() => setOpen(false)} className="btn-primary w-full">
                Become a Member
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
