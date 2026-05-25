export type Event = {
  title: string;
  date: string; // display date like "Jan 31, 2025"
  semester: string; // "Spring 2025", "Fall 2025"
  description: string;
  image?: string;
  tag?: string;
};

export type EventYear = {
  label: string;
  events: Event[];
};

export const eventYears: EventYear[] = [
  {
    label: '2025–2026',
    events: [
      {
        title: 'Thrive in Tech: Duolingo Panel',
        date: 'Sep 5, 2025',
        semester: 'Fall 2025',
        description:
          "An empowering evening of storytelling, career insight, and authentic conversation designed to uplift underrepresented students in tech. Featuring voices from Duolingo in collaboration with ColorStack's Yale chapter.",
        image: '/images/events/duolingo-panel.png',
        tag: 'Panel',
      },
      {
        title: 'ColorStack ATL Social Mixer',
        date: 'Jan 31, 2025',
        semester: 'Spring 2025',
        description:
          'We brought together ColorStack chapters from Georgia Tech, Kennesaw State, Emory, and Georgia State for a vibrant evening of community, connection, and good vibes across Atlanta.',
        image: '/images/events/atl-social-mixer.png',
        tag: 'Social',
      },
      {
        title: 'Peach Hacks Y2K Hackathon',
        date: 'Apr 9, 2025',
        semester: 'Spring 2025',
        description:
          'Retro met innovation. Our participants reimagined early 2000s tech in a throwback-themed hackathon filled with nostalgia, creativity, and next-level code.',
        image: '/images/events/peach-hacks.jpeg',
        tag: 'Hackathon',
      },
    ],
  },
  {
    label: '2026–2027',
    events: [],
  },
];
