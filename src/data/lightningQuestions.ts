export type LightningQuestion = {
  id: string;
  category: string;
  question: string;
  answer: string;
};

// Keep this in sync with questions.md at the repo root.
export const LIGHTNING_QUESTIONS: LightningQuestion[] = [
  {
    id: '1',
    category: 'Programming',
    question: 'What does `3 // 2` evaluate to in Python?',
    answer: '1. The double slash is floor division.',
  },
  {
    id: '2',
    category: 'Programming',
    question: 'What keyword turns a regular function into a generator function in Python?',
    answer: 'yield.',
  },
  {
    id: '3',
    category: 'Programming',
    question: "What's the difference between `is` and `==` in Python?",
    answer:
      '`is` checks whether two variables point to the same object in memory, `==` checks whether their values are equal.',
  },
  {
    id: '4',
    category: 'Programming',
    question: 'What Python data type is ordered, immutable, and can hold mixed types?',
    answer: 'A tuple.',
  },
  {
    id: '5',
    category: 'Programming',
    question: 'What Python data structure maps unique keys to values and is written with curly braces?',
    answer: 'A dictionary.',
  },
  {
    id: '6',
    category: 'Data Structures',
    question: 'What data structure follows last in, first out order?',
    answer: 'A stack.',
  },
  {
    id: '7',
    category: 'Data Structures',
    question: "What's the average case time complexity of a lookup in a hash table?",
    answer: 'O(1).',
  },
  {
    id: '8',
    category: 'Data Structures',
    question: "In a binary search tree, where do values smaller than a node's value go?",
    answer: "In that node's left subtree.",
  },
  {
    id: '9',
    category: 'Data Structures',
    question: 'What structure would you use to implement a priority queue efficiently?',
    answer: 'A binary heap.',
  },
  {
    id: '10',
    category: 'Data Structures',
    question: 'What data structure follows first in, first out order?',
    answer: 'A queue.',
  },
  {
    id: '11',
    category: 'Algorithms',
    question: "What's the time complexity of binary search on a sorted array of size n?",
    answer: 'O(log n).',
  },
  {
    id: '12',
    category: 'Algorithms',
    question: 'Name a comparison based sorting algorithm that is O(n log n) in the worst case and stable.',
    answer: 'Merge sort.',
  },
  {
    id: '13',
    category: 'Algorithms',
    question:
      'What technique solves a problem by breaking it into overlapping subproblems and caching results?',
    answer: 'Dynamic programming.',
  },
  {
    id: '14',
    category: 'Algorithms',
    question: 'What order does an in order traversal visit the nodes of a binary tree?',
    answer: 'Left subtree, then the node itself, then the right subtree.',
  },
  {
    id: '15',
    category: 'Algorithms',
    question:
      'What graph traversal algorithm uses a queue and explores all neighbors at the current depth before going deeper?',
    answer: 'Breadth first search (BFS).',
  },
  {
    id: '16',
    category: 'Computer Organization',
    question: 'What number base is hexadecimal?',
    answer: 'Base 16.',
  },
  {
    id: '17',
    category: 'Computer Organization',
    question: 'What is cache memory used for in a CPU?',
    answer:
      'Fast, small storage close to the processor that holds frequently used data to reduce access time to main memory.',
  },
  {
    id: '18',
    category: 'Computer Organization',
    question:
      'What CPU technique allows multiple instructions to be in different stages of execution at the same time to improve throughput?',
    answer: 'Pipelining.',
  },
  {
    id: '19',
    category: 'Computer Organization',
    question: 'How many bits are in a byte?',
    answer: '8.',
  },
  {
    id: '20',
    category: 'Operating Systems',
    question: "What's the smallest unit of execution that can be scheduled independently within a process?",
    answer: 'A thread.',
  },
  {
    id: '21',
    category: 'Operating Systems',
    question:
      "What memory management technique divides a process's memory into fixed size blocks that don't need to sit contiguously in physical memory?",
    answer: 'Paging.',
  },
  {
    id: '22',
    category: 'Operating Systems',
    question:
      'What term describes two or more processes each waiting on a resource the other is holding, with neither able to proceed?',
    answer: 'Deadlock.',
  },
  {
    id: '23',
    category: 'Cybersecurity',
    question:
      'What term describes tricking a person into giving up sensitive information, rather than exploiting a technical flaw?',
    answer: 'Social engineering (phishing is a common example).',
  },
  {
    id: '24',
    category: 'Cybersecurity',
    question: 'What does the "S" in HTTPS stand for, and what does it mean for the connection?',
    answer: 'Secure — the connection is encrypted, typically using TLS.',
  },
  {
    id: '25',
    category: 'Cybersecurity',
    question: 'What type of attack floods a server with traffic to make it unavailable to legitimate users?',
    answer:
      'A denial of service (DoS) attack, or distributed denial of service (DDoS) when it comes from many sources.',
  },
];

export const SUDDEN_DEATH_QUESTIONS: LightningQuestion[] = [
  {
    id: 'T1',
    category: 'Sudden Death',
    question:
      'Why is appending to the end of a Python list considered O(1) on average, even though the underlying array sometimes needs to be resized?',
    answer:
      'Because resizing happens infrequently and the cost is spread out, or amortized, across many cheap appends.',
  },
  {
    id: 'T2',
    category: 'Sudden Death',
    question: "What's the time complexity of extracting the minimum element from a min heap?",
    answer: 'O(log n).',
  },
  {
    id: 'T3',
    category: 'Sudden Death',
    question: "What's the difference between preemptive and non preemptive CPU scheduling?",
    answer:
      'Preemptive scheduling can interrupt a running process to give the CPU to another; non preemptive scheduling lets the running process finish or voluntarily give up the CPU first.',
  },
  {
    id: 'T4',
    category: 'Sudden Death',
    question: "What's the worst case time complexity of quicksort, and what input causes it?",
    answer:
      'O(n squared), which happens when the pivot chosen is repeatedly the smallest or largest remaining element, such as on an already sorted array with a poor pivot strategy.',
  },
  {
    id: 'T5',
    category: 'Sudden Death',
    question: "What's the difference between a process and a thread?",
    answer:
      'A process has its own independent memory space, while a thread shares memory space with other threads that belong to the same process.',
  },
  {
    id: 'T6',
    category: 'Sudden Death',
    question:
      "What cybersecurity term describes malware that encrypts a victim's files and demands payment to restore access?",
    answer: 'Ransomware.',
  },
];
