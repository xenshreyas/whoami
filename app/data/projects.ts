export type ProjectItem = {
  name: string
  description: string
  stack: string[]
  demoUrl?: string
  githubUrl?: string
  status?: string
}

export const projects: ProjectItem[] = [
  {
    name: 'Silhouette Notes',
    description:
      'A Discord meeting notes bot that turns conversations into notes people can actually revisit later.',
    stack: ['TypeScript', 'Discord API', 'OpenAI', 'Azure', 'Redis'],
    demoUrl: 'https://silhouettenotes.com/',
  },
  {
    name: 'Resistance',
    description:
      'An online implementation of The Resistance built because the versions I found leaned too heavily into Avalon instead.',
    stack: ['TypeScript', 'WebSockets', 'Next.js', 'Node.js'],
    demoUrl: 'https://resistance-production-fcd8.up.railway.app/',
  },
  {
    name: 'Zolyra',
    description:
      'A personal assistant that remembers what you care about and reminds you at the right time. Currently in beta.',
    stack: ['TypeScript', 'Next.js', 'PostgreSQL'],
    demoUrl: 'https://zolyrafrontend-xenshreyas-projects.vercel.app/',
  },
  {
    name: 'ForumAI',
    description:
      'An academic forum platform with 24/7 AI assistance for course material, assignments, and logistics — built for structured discussion between students, instructors, and TAs with support for anonymous posting.',
    stack: ['TypeScript', 'React', 'Next.js', 'Python', 'Drizzle', 'OpenAI', 'Pinecone'],
    demoUrl: 'https://github.com/ubclaunchpad/forum',
  },
]
