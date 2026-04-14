export type FeaturedItem = {
  title: string
  shortTitle?: string
  source: string
  date: string
  url: string
  description: string
}

export const featured: FeaturedItem[] = [
  {
    title: 'Featured Co-op Student',
    source: 'UBC Science Co-op',
    date: '2025',
    url: 'https://sciencecoop.ubc.ca/community/chronicles/shreyas-goyal',
    description:
      'Selected by UBC Science Co-op to share my experience as a founding engineer at Gumloop during the YC W24 batch — covering what it was like to build and ship at startup speed.',
  },
  {
    title: 'CS Undergraduate Teaching Assistant Award',
    shortTitle: 'UBC CS UTA Award',
    source: 'UBC Computer Science',
    date: '2024',
    url: 'https://www.linkedin.com/posts/xenshreyas_i-won-the-ubc-computer-science-undergraduate-activity-7201404732668534784-XjJn',
    description:
      'Awarded by the UBC CS department on nomination by students for contributions as a teaching assistant.',
  },
  {
    title: 'Gumloop - where it all began',
    source: 'Gumloop',
    date: '2024',
    url: 'https://www.gumloop.com/photos',
    description:
      'A look back at the early days of Gumloop — the people, the energy, and what it felt like to build something incredible with friends.',
  },
]
