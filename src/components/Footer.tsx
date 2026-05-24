import { Link } from 'react-router-dom';

const sitemap: [string, string][] = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/involvement', 'Events'],
  ['/students', 'Team'],
  ['/sponsors', 'Resources'],
  ['/become-a-member', 'Join'],
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
          {/* Brand col */}
          <div>
            <div
              style={{
                fontFamily: 'var(--display)',
                fontSize: 'clamp(40px, 5vw, 72px)',
                fontWeight: 600,
                letterSpacing: '-0.03em',
                lineHeight: 0.95,
                marginBottom: 24,
              }}
            >
              Built by
              <br />
              <span
                style={{ WebkitTextStroke: '2px white', color: 'transparent' }}
              >
                students,
              </span>
              <br />
              for students.
            </div>
            <p
              style={{
                opacity: 0.6,
                fontSize: 14,
                maxWidth: '36ch',
                lineHeight: 1.55,
              }}
            >
              ColorStack at Georgia State University — a community for Black
              &amp; Latinx students in computing at GSU.
            </p>
          </div>

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
                ['https://www.instagram.com/colorstackgsu/', 'Instagram ↗'],
                ['https://www.linkedin.com/company/colorstackgsu/', 'LinkedIn ↗'],
                ['#', 'Discord ↗'],
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
              <li
                style={{
                  marginTop: 12,
                  fontFamily: 'var(--mono)',
                  fontSize: 11,
                  letterSpacing: '0.1em',
                  opacity: 0.6,
                }}
              >
                33.7530° N, 84.3863° W
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
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
          <span>Not affiliated with ColorStack national org</span>
          <span>v1.0.0 / Atlanta</span>
        </div>
      </div>
    </footer>
  );
}
