export type Event = {
  title: string;
  date: string; // display date like "Jan 31, 2025"
  time?: string; // e.g. "6:00 PM"
  location?: string; // e.g. "CMII Room 306"
  semester: string; // "Spring 2025", "Fall 2026"
  description: string;
  image?: string;
  tag?: string;
  isUpcoming?: boolean;
  link?: string;
};

export type EventYear = {
  label: string;
  isCurrent?: boolean;
  events: Event[];
};

export const eventYears: EventYear[] = [
  {
    label: '2026–2027',
    isCurrent: true,
    events: [
      {
        title: 'Fall 2026 Kickoff',
        date: 'Sep 9, 2026',
        semester: 'Fall 2026',
        description:
          'Kick off the new academic year with ColorStack at GSU! Meet the new executive board, learn about our upcoming workshops, panels, and networking events, and connect with fellow tech students.',
        image: '/images/events/kickoff-fall-2026.png',
        tag: 'Social',
        isUpcoming: true,
        link: 'https://pin.gsu.edu/event/12618217',
      },
      {
        title: 'SHPE × ColorStack AI Idea-a-Thon',
        date: 'Sep 15, 2026',
        semester: 'Fall 2026',
        description:
          'A collaborative AI Idea-a-Thon presented by SHPE and ColorStack at GSU! Brainstorm innovative AI solutions, collaborate with peers across disciplines, and pitch your ideas.',
        image: '/images/events/ai-ideathon.png',
        tag: 'Social',
        isUpcoming: true,
        link: 'https://pin.gsu.edu/event/12716936',
      },
    ],
  },
  {
    label: '2025–2026',
    isCurrent: false,
    events: [
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
      {
        title: 'Thrive in Tech: Duolingo Panel',
        date: 'Sep 5, 2025',
        semester: 'Fall 2025',
        description:
          "An empowering evening of storytelling, career insight, and authentic conversation designed to uplift Black and Latinx students in tech. Featuring voices from Duolingo in collaboration with ColorStack's Yale chapter.",
        image: '/images/events/duolingo-panel.png',
        tag: 'Panel',
      },
    ],
  },
];

