import { useEffect, useRef, useState } from 'react';

export type SponsorLogo = {
  /** Path to the logo image, or omit to render `svg` instead. */
  src?: string;
  /** Inline SVG logo, used when there is no hosted image. */
  svg?: React.ReactNode;
  alt: string;
  /** Optional link to the sponsor's site. */
  href?: string;
  /** Height override for marks whose proportions differ from a wide wordmark. */
  sizeClassName?: string;
};

type SponsorMarqueeProps = {
  logos: SponsorLogo[];
  /** Seconds one copy of the list takes to cross. Lower is faster. */
  speed?: number;
};

export default function SponsorMarquee({ logos, speed = 40 }: SponsorMarqueeProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const setRef = useRef<HTMLDivElement>(null);
  // How many times the list is repeated. The track slides exactly -50%, so one
  // half must be wider than the viewport or the tail leaves a gap on the right.
  const [copies, setCopies] = useState(2);

  useEffect(() => {
    const measure = () => {
      const wrap = wrapRef.current;
      const set = setRef.current;
      if (!wrap || !set) return;

      const setWidth = set.getBoundingClientRect().width / copies;
      if (setWidth <= 0) return;

      // Each half needs to cover the viewport, so half the copies must span it.
      const needed = Math.ceil(wrap.getBoundingClientRect().width / setWidth) + 1;
      // Keep the count even so the two halves stay identical.
      const next = Math.max(2, needed * 2);
      if (next !== copies) setCopies(next);
    };

    measure();
    const observer = new ResizeObserver(measure);
    if (wrapRef.current) observer.observe(wrapRef.current);
    return () => observer.disconnect();
  }, [copies, logos]);

  const track = Array.from({ length: copies }, () => logos).flat();

  return (
    <div
      className="sponsor-marquee relative w-full overflow-hidden py-2"
      role="region"
      aria-label="Our sponsors"
      ref={wrapRef}
    >
      <div
        className="sponsor-marquee-track flex w-max items-center gap-6 sm:gap-8"
        // One -50% pass covers half the copies, so scale the duration with them
        // to hold the scroll at a constant pixel speed on any screen width.
        style={{ animationDuration: `${(speed * copies) / 2}s` }}
        ref={setRef}
      >
        {track.map((logo, i) => (
          <SponsorTile
            key={`${logo.alt}-${i}`}
            logo={logo}
            aria-hidden={i >= logos.length}
          />
        ))}
      </div>
    </div>
  );
}

function SponsorTile({
  logo,
  'aria-hidden': ariaHidden,
}: {
  logo: SponsorLogo;
  'aria-hidden'?: boolean;
}) {
  const inner = (
    <div className="sponsor-tile flex h-24 w-48 shrink-0 items-center justify-center rounded-xl px-6 sm:h-28 sm:w-56">
      {logo.src ? (
        <img
          src={logo.src}
          alt={logo.alt}
          className={`w-auto max-w-full select-none object-contain ${
            logo.sizeClassName ?? 'max-h-14 sm:max-h-16'
          }`}
          loading="lazy"
          draggable={false}
        />
      ) : (
        logo.svg
      )}
    </div>
  );

  if (logo.href) {
    return (
      <a
        href={logo.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-hidden={ariaHidden}
        tabIndex={ariaHidden ? -1 : undefined}
        aria-label={ariaHidden ? undefined : logo.alt}
        className="shrink-0 transition-transform duration-300 hover:scale-[1.04]"
      >
        {inner}
      </a>
    );
  }

  return (
    <div aria-hidden={ariaHidden} className="shrink-0">
      {inner}
    </div>
  );
}
