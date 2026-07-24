import { Link } from 'react-router-dom';

const sitemap: [string, string][] = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/involvement', 'Events'],
  ['/students', 'Team'],
  ['/sponsors', 'Resources'],
  ['/apply', 'Join Us'],
];

const connectLinks: [string, string][] = [
  ['https://www.instagram.com/colorstackatgsu/', 'Instagram ↗'],
  ['https://www.linkedin.com/company/colorstack-gsu/', 'LinkedIn ↗'],
  ['https://discord.gg/RdSeNwMjr4', 'Discord ↗'],
  ['mailto:official@colorstackatgsu.com', 'Email ↗'],
];

export default function Footer() {
  return (
    <footer
      style={{
        background: '#091024',
        color: '#ffffff',
        padding: '80px 32px 40px',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        zIndex: 2,
      }}
    >
      <div style={{ maxWidth: 1300, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Main 4-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 48,
            marginBottom: 64,
          }}
        >
          {/* Brand Column */}
          <div style={{ gridColumn: 'span 1' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <img
                src="/images/colorstack-gsu-logo.png"
                alt="ColorStack GSU"
                style={{ width: 36, height: 36, borderRadius: '50%' }}
              />
              <span style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 16, color: '#ffffff' }}>
                ColorStack at GSU
              </span>
            </Link>
            <p style={{ fontSize: 13, color: '#94a3b8', lineHeight: 1.6, maxWidth: 280, margin: 0 }}>
              Empowering Black and Latinx students in computing at Georgia State University through community, mentorship, and career opportunities.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 11,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#64748b',
                marginBottom: 20,
              }}
            >
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {sitemap.map(([to, label]) => (
                <li key={to}>
                  <Link
                    to={to}
                    style={{ fontSize: 14, color: '#cbd5e1', transition: 'color 0.2s', textDecoration: 'none' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#cbd5e1')}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 11,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#64748b',
                marginBottom: 20,
              }}
            >
              Connect
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {connectLinks.map(([href, label]) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    style={{ fontSize: 14, color: '#cbd5e1', transition: 'color 0.2s', textDecoration: 'none' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#cbd5e1')}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Chapter Info Column */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 11,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#64748b',
                marginBottom: 20,
              }}
            >
              Location & Info
            </h4>
            <div style={{ fontSize: 13, color: '#cbd5e1', lineHeight: 1.6 }}>
              <p style={{ margin: '0 0 6px' }}>Georgia State University</p>
              <p style={{ margin: '0 0 16px', color: '#94a3b8' }}>Atlanta, GA &middot; United States</p>
              <span
                style={{
                  display: 'inline-block',
                  fontFamily: 'var(--mono)',
                  fontSize: 10,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  padding: '4px 10px',
                  borderRadius: 20,
                  background: 'rgba(255, 255, 255, 0.10 )',
                  color: '#94a3b8',
                }}
              >
                ColorStack National Chapter
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: 28,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontFamily: 'var(--mono)',
            fontSize: 11,
            letterSpacing: '0.06em',
            color: '#64748b',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <span>&copy; {new Date().getFullYear()} ColorStack at GSU. All rights reserved.</span>
          <div style={{ display: 'flex', gap: 20 }}>
            <Link to="/about" style={{ color: '#64748b', textDecoration: 'none' }}>About</Link>
            <Link to="/involvement" style={{ color: '#64748b', textDecoration: 'none' }}>Events</Link>
            <Link to="/apply" style={{ color: '#64748b', textDecoration: 'none' }}>Join Us</Link>
          </div>
          <span>Atlanta, GA</span>
        </div>
      </div>
    </footer>
  );
}
