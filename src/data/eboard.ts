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
            linkedin: 'https://www.linkedin.com/in/vanohra-gaspard-chrissy/',
            image: '/images/eboard/Vanohra_Gaspard.jpeg',
            bio: 'Leading ColorStack at Georgia State and building bridges between students and industry partners. Passionate about increasing representation in tech and creating a home for Black and Latinx computing students at GSU.',
            major: 'Computer Science',
            year: 'Junior',
          },
          {
            name: 'Joseph Boone',
            role: 'Vice President',
            linkedin: 'https://www.linkedin.com/in/jboone81/',
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
            linkedin: 'https://www.linkedin.com/in/chenice-taylor/',
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
          {
            name: 'Uyiosa Nehikhuere',
            role: 'President',
            linkedin: 'https://www.linkedin.com/in/uyiosa-nehikhuere-16406328b/',
            image: '/images/eboard/Uyiosa_Nehikhuere.jpeg',
            bio: 'Leading the Chapter this year and working to create a supportive community for Black and Latinx students in tech at GSU. Passionate about mentorship and helping members achieve their career goals.',
            major: 'Computer Science',
            year: 'Senior',
          },
          {
            name: 'Raphael Omorose',
            role: 'Vice President',
            linkedin: 'https://www.linkedin.com/in/raphaelomorose/',
            image: '/images/eboard/Raphael_Omorose.jpeg',
            bio:'',
            major: 'Computer Science',
            year: 'Senior',
          },
        ],
      },
      {
        title: 'Directors',
        members: [
          { name: 'TBA', role: 'Partnership Director' },
          { name: 'TBA', role: 'Media Director' },
          {
            name: 'Shelden Rattray',
            role: 'Tech Director',
            image: '/images/eboard/shelden.webp',
            linkedin: 'https://www.linkedin.com/in/shelden-rattray/',
            major: 'Computer Science',
          },
          { name: 'TBA', role: 'Outreach Director' },
          { name: 'TBA', role: 'Operations Director' },
          { name: 'TBA', role: 'Finance Director' },
        ],
      },
    ],
  },
];

// Legacy flat export kept for backward compat
export type { EBoardMember as default };
export const eboard = eboadYears[0].groups.flatMap((g) => g.members);
