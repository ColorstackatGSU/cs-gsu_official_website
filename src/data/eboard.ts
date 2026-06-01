export type EBoardMember = {
  name: string;
  role: string;
  email?: string;
  linkedin?: string;
  instagram?: string;
  image?: string;
  bio?: string;
  major?: string;
  year?: string;
};

export type EBoardYear = {
  label: string;
  groups: { title: string; members: EBoardMember[] }[];
};

export const eboadYears: EBoardYear[] = [
  {
    label: '2025–2026',
    groups: [
      {
        title: 'Executive Leadership',
        members: [
          {
            name: 'Vanohra Gaspard',
            role: 'Founder & President',
            email: 'vanohrag@student.gsu.edu',
            image: '/images/eboard/Vanohra_Gaspard.jpeg',
            bio: 'Leading ColorStack at Georgia State and building bridges between students and industry partners. Passionate about increasing representation in tech and creating a home for underrepresented computing students at GSU.',
            major: 'Computer Science',
            year: 'Junior',
          },
          {
            name: 'Joseph Boone',
            role: 'Vice President',
            email: 'josephb@student.gsu.edu',
            image: '/images/eboard/joseph_boone.jpeg',
            bio: 'Driving the chapter\'s operations, member experience, and long-term strategy. Committed to making ColorStack GSU a space where every member feels supported and seen.',
            major: 'Computer Information Systems',
            year: 'Senior',
          },
        ],
      },
      {
        title: 'Chairs',
        members: [
          {
            name: 'Chenice Taylor',
            role: 'Programs Chair',
            email: 'chenicet@student.gsu.edu',
            image: '/images/eboard/chenice_taylo.jpeg',
            bio: 'Organizing workshops, study jams, and professional development programming. Focused on creating events that give members real, tangible career skills.',
            major: 'Computer Science',
            year: 'Sophomore',
          },
        ],
      },
    ],
  },
  {
    label: '2026–2027',
    groups: [
      {
        title: 'Executive Leadership',
        members: [
          { name: 'TBA', role: 'President' },
          { name: 'TBA', role: 'Vice President' },
          { name: 'TBA', role: 'Treasurer' },
          { name: 'TBA', role: 'Secretary' },
        ],
      },
      {
        title: 'Chairs',
        members: [
          { name: 'TBA', role: 'Programs Chair' },
          { name: 'TBA', role: 'Marketing Chair' },
          { name: 'TBA', role: 'Technical Chair' },
          { name: 'TBA', role: 'Community Chair' },
          { name: 'TBA', role: 'Events Chair' },
          { name: 'TBA', role: 'Outreach Chair' },
        ],
      },
    ],
  },
];

// Legacy flat export kept for backward compat
export type { EBoardMember as default };
export const eboard = eboadYears[0].groups.flatMap((g) => g.members);
