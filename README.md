# Shreyas Portfolio

Personal website built with Next.js App Router and Tailwind CSS.

## Includes

- Portfolio routes for home, work, projects, and blog
- MDX-powered blog posts with syntax highlighting
- RSS feed, sitemap, robots.txt, and dynamic OG images
- Light and dark themes
- Vercel Analytics and Speed Insights

## Local Development

```bash
npm install
npm run dev
```

## Production Notes

- Set `NEXT_PUBLIC_SITE_URL` to the deployed site URL for canonical metadata, RSS, and sitemap generation.
- Blog content lives in `app/blog/posts`.
- Portfolio content lives in `app/data`.
