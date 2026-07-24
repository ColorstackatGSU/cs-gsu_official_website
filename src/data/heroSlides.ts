// Banners for the autoscrolling hero carousel on the home page.
// Add, remove, or reorder slides here — the carousel adapts automatically.
// `image` paths are served from /public, so they start at /images/...

export type HeroSlide = {
  id: string;
  eyebrow: string;
  // Headline is an array of words so each one can animate in on slide change.
  headline: string[];
  subtitle: string;
  image: string;
  // CSS object-position for the background image (tweak focal point per photo).
  objectPosition?: string;
  cta: { label: string; to: string };
  // Optional second, outlined button.
  secondaryCta?: { label: string; to: string };
};

export const heroSlides: HeroSlide[] = [
  {
    id: 'welcome',
    eyebrow: 'ColorStack Chapter · Georgia State University',
    headline: ['Welcome', 'to', 'ColorStack', 'at', 'GSU'],
    subtitle:
      'Building careers, networks, and technical leadership for Black & Latinx students in tech.',
    image: '/images/events/atl-social-mixer-bw.jpg',
    objectPosition: 'center 35%',
    cta: { label: 'Become a Member →', to: '/apply/member' },
    secondaryCta: { label: 'How it works', to: '/about' },
  },
];
