export type NavItem = {
  href: string
  label: string
}

export type SocialLink = {
  label: string
  href: string
}

export type SiteConfig = {
  name: string
  defaultTitle: string
  description: string
  roleSummary: string
  tagline: string
  currently: string[]
  bio: string[]
  navItems: NavItem[]
  socialLinks: SocialLink[]
}

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export const siteConfig: SiteConfig = {
  name: 'Shreyas',
  defaultTitle: 'Shreyas',
  description:
    'CS student at UBC. Incoming Microsoft AI intern. Previously at Gumloop and Everpure. Interested in startups, programming languages, teaching, and the future of humanoid robots.',
  roleSummary:
    'CS student at UBC. Incoming Microsoft AI intern. Previously at Gumloop and Everpure.',
  tagline: 'There\'s no algorithm to intuition. You just know.',
  currently: [
    'AI Research @ UBC',
    'Incoming SWE Intern at Microsoft AI',
    'Building Personalized AI Assistants',
  ],
  bio: [
    "I study computer science at UBC, love building things. From scrappy side projects to large-scale systems that quietly power the experiences of millions of people.",
    "I've been a founding engineer at Gumloop (YCombinator/Series B), built core AI infrastructure at Pure Storage, and done AI research at UBC. This summer I'm joining Microsoft AI in Mountain View to work on Copilot Tasks and Growth. I also teach computer science, which I find just as rewarding as the engineering itself.",
    "Outside of that, I travel whenever I get the chance, take my coffee seriously, and run Champion 1 on Rocket League duos.",
  ],
  navItems: [
    { href: '/', label: 'home' },
    { href: '/work', label: 'work' },
    { href: '/projects', label: 'projects' },
    { href: '/featured', label: 'featured' },
  ],
  socialLinks: [
    { label: 'Email', href: 'mailto:xenshreyas@gmail.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/xenshreyas' },
    { label: 'X', href: 'https://x.com/xenshreyas' },
    { label: 'GitHub', href: 'https://github.com/xenshreyas' },
  ],
}
