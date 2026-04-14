export type TeachingItem = {
  title: string
  subjects: string[]
  duration: string
  description: string
}

export const teaching: TeachingItem[] = [
  {
    title: 'UBC CS Teaching Assistant',
    subjects: ['Data Structures & Algorithms', 'Operating Systems'],
    duration: '2 years',
    description:
      'I have taught data structures, algorithms, and operating systems for two years. It matters to me because teaching is one of the clearest ways to help students who are in the position I used to be in.',
  },
]
