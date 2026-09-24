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
        isUpcoming: false,
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
        isUpcoming: false,
        link: 'https://pin.gsu.edu/event/12716936',
      },
      {
        title: 'GSU Tech Clubs - Resume Workshop',
        date: 'Sep 22, 2026',
        semester: 'Fall 2026',
        description:
          'Get the ins and outs of perfecting your resume and standing out to recruiters.',
        image: '/images/events/resume_workshop_1_2026.png',
        tag: 'Social',
        isUpcoming: false,
        link: '',
      },
      {
        title: 'Equifax X Colorstack & CS Club',
        date: 'Sep 28, 2026',
        semester: 'Fall 2026',
        description:
          'An event built to introduce students to Equifax, Technical Career Paths, and 2027 Internship and Rotational Opportunities.',
        image: '/images/events/equifax_colorstack.png',
        tag: 'Social',
        isUpcoming: true,
        link: 'https://pin.gsu.edu/event/12793088',
      },
      {
        title: 'CS Club X progsu X ColorStack Tech League',
        date: 'Sep 30, 2026',
        semester: 'Fall 2026',
        description:
          'A semester-long, team-based competition. Teams of 3-4 tackle 5 milestones, rack up points pn the leaderboard, and finish with a Capstone Hackathon',
        image: '/images/events/tech_league_3.jpg',
        tag: 'Social',
        isUpcoming: true,
        link: '', 
      },
      // {
      //   title: 'ColorStack X NVIDIA',
      //   date: 'Oct 8, 2026',
      //   semester: 'Fall 2026',
      //   description:
      //     'Explore the future of technology and hear from an NVIDIA engineering leader about the innovation shaping our industry. Learn about opportunities and resume best practices.',
      //   image: '/images/events/colorstackxnvidia_placeholder.png',
      //   tag: 'Social',
      //   isUpcoming: true,
      //   link: 'https://pin.gsu.edu/event/12793269', 
      // }
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

