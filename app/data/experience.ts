export type HighlightLink = {
  match: string
  url: string
}

export type ExperienceItem = {
  company: string
  url?: string
  role: string
  dates: string
  location?: string
  summary?: string
  highlights?: string[]
  highlightLinks?: Record<number, HighlightLink>
}

export const experience: ExperienceItem[] = [
  {
    company: 'Microsoft AI',
    url: 'https://www.microsoft.com/en-us/ai',
    role: 'Software Engineering Intern - Copilot Tasks and Growth',
    dates: 'May 2026 - August 2026',
    location: 'Mountain View, California',
    summary:
      'Incoming internship on the Microsoft AI team, focused on Copilot Tasks and Growth.',
    highlights: [],
  },
  {
    company: 'Pure Storage',
    url: 'https://www.purestorage.com',
    role: 'Software Engineer Intern',
    dates: 'May 2025 - August 2025',
    location: 'Santa Clara, California',
    highlights: [
      'Engineered and deployed a LangGraph-based AI log triaging agent for infrastructure diagnostics to analyze Systemd and Kubernetes logs, reducing manual RCA time from days to minutes.',
      'Implemented self-correcting workflow orchestration with sub-agent spawning, parallel execution, and context preservation, enabling automatic failure recovery and workload distribution across specialized agents.',
      'Developed a lightweight log streaming pipeline to Elasticsearch using FluentBit to enable structured log querying for AI agents, deployed across thousands of clusters, achieving sub 20MB memory usage.',
      'Integrated MCP configuration options enabling AI agent routing to Claude Code CLI with local MCP servers (Fuse, Elasticsearch, Kubernetes, Sequential Thinking), providing users enhanced tooling capabilities.',
    ],
  },
  {
    company: 'Gumloop (YCombinator W24)',
    url: 'https://www.gumloop.com',
    role: 'Founding Engineer',
    dates: 'January 2024 - December 2024',
    location: 'San Francisco, California',
    highlights: [
      'Developed an AI SaaS to allow users to create custom enterprise software with no code during the W24 YCombinator batch, shipping 570+ features for 200+ paid users, contributing to successful Series A funding.',
      'Maintained a native AI chatbot to suggest workflows using LangChain with function calling and structured JSON outputs, reducing latency from 24 to 7 seconds via prompt caching and dynamic LLM fallbacks.',
      'Architected a trigger service to enable automatic workflow execution on Google Kubernetes Engine, leveraging GCP Cloud Functions with CRON jobs for refreshing webhooks and Redis for in-memory caching.',
      'Parallelized workflows using Celery and Redis for worker management, enabling multiple concurrent workflow steps per user and optimizing runtime by up to 1500%.',
      'Optimized Google Spanner SQL queries by indexing and batch processing, reducing latency by over 1900%.',
      'Designed and developed a responsive landing page using React and Redux Toolkit for state management and TailwindCSS for styling, increasing conversion rates by over 1700%.',
      'Integrated with 30+ providers including OpenAI, Slack, Notion, Airtable, and Salesforce using Python and OAuth2.0, allowing users to link workspaces, CMS, and AI services to build comprehensive workflows.',
    ],
    highlightLinks: {
      5: { match: 'landing page', url: 'https://www.gumloop.com' },
    },
  },
]
