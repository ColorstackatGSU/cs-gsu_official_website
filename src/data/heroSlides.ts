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
      'A community for underrepresented students in computing at Georgia State University. Building careers, friendships, and a better industry.',
    image: 'https://static.wixstatic.com/media/407346_c8a8fb1fc33447ffa4a0864437a8de34~mv2.png',
    objectPosition: 'center 30%',
    cta: { label: 'Become a Member →', to: '/apply/member' },
    secondaryCta: { label: 'Learn More', to: '/about' },
  },
];
