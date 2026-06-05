import { Link } from 'react-router-dom';

const sitemap: [string, string][] = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/involvement', 'Events'],
  ['/students', 'Team'],
  ['/sponsors', 'Resources'],
  ['/apply', 'Join'],
];

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--ink)',
        color: 'white',
        padding: '80px 32px 32px',
        position: 'relative',
        overflow: 'hidden',
        zIndex: 2,
      }}
    >
      <div
        className="grid-bg dark"
        style={{ position: 'absolute', inset: 0, opacity: 0.5, zIndex: 0 }}
        aria-hidden
      />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div className="footer-grid">
          {/* Sitemap col */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 11,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                opacity: 0.5,
                marginBottom: 16,
              }}
            >
              Sitemap
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {sitemap.map(([to, label]) => (
                <li key={to}>
                  <Link
                    to={to}
                    style={{ fontSize: 14, opacity: 0.85, transition: 'opacity 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.85')}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect col */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 11,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                opacity: 0.5,
                marginBottom: 16,
              }}
            >
              Connect
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                ['https://www.instagram.com/colorstackatgsu/', 'Instagram ↗'],
                ['https://www.linkedin.com/company/colorstack-gsu/', 'LinkedIn ↗'],
                ['https://discord.gg/RdSeNwMjr4', 'Discord ↗'],
                ['mailto:colorstackgsu@gmail.com', 'Email ↗'],
              ].map(([href, label]) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    style={{ fontSize: 14, opacity: 0.85, transition: 'opacity 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.85')}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location col */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 11,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                opacity: 0.5,
                marginBottom: 16,
              }}
            >
              Location
            </h4>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: 6,
                opacity: 0.7,
                fontSize: 14,
              }}
            >
              <li>Georgia State University</li>
              <li>Atlanta, GA</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="footer-bottom"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: 32,
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'var(--mono)',
            fontSize: 11,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            opacity: 0.5,
            maxWidth: 1400,
            margin: '0 auto',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <span>© {new Date().getFullYear()} ColorStack GSU Chapter</span>
          <span>A chartered chapter of ColorStack National</span>
        </div>
      </div>
    </footer>
  );
}
