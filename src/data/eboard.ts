export type EBoardMember = {
  name: string;
  role: string;
  email: string;
  image: string;
  bio: string;
};

export const eboard: EBoardMember[] = [
  {
    name: 'Vanohra Gaspard',
    role: 'President',
    email: 'vanohrag@student.gsu.edu',
    image: '/images/eboard/Vanohra_Gaspard.jpeg',
    bio: 'Leading ColorStack at Georgia State and building bridges between students and industry partners.',
  },
  {
    name: 'Raphael Omorose',
    role: 'Vice President',
    email: 'raphaelomorose@gmail.com',
    image: '/images/eboard/joseph_boone.jpeg',
    bio: 'Driving the chapter\'s technical initiatives and member experience.',
  },
  {
    name: 'Chenice Taylor',
    role: 'Programs Chair',
    email: 'chenicet@student.gsu.edu',
    image: '/images/eboard/chenice_taylo.jpeg',
    bio: 'Organizing workshops, study jams, and professional development programming.',
  },
];
