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
  /** Seconds for one full pass of the track. Lower is faster. */
  speed?: number;
};

export default function SponsorMarquee({ logos, speed = 40 }: SponsorMarqueeProps) {
  // The track holds two identical copies of the list and slides exactly half its
  // width, so the second copy lands where the first began and the loop never seams.
  const track = [...logos, ...logos];

  return (
    <div
      className="sponsor-marquee relative w-full overflow-hidden py-2"
      role="region"
      aria-label="Our sponsors"
    >
      <div
        className="sponsor-marquee-track flex w-max items-center gap-6 sm:gap-8"
        style={{ animationDuration: `${speed}s` }}
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
