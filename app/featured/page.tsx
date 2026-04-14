import { featured } from 'app/data/featured'
import { ExternalLinkIcon } from 'app/components/external-link-icon'

export const metadata = {
  title: 'featured',
  description: 'Press and features.',
}

export default function FeaturedPage() {
  return (
    <section className="space-y-8 sm:space-y-12">
      <div className="space-y-3">
        <p className="eyebrow">Featured</p>
        <p className="max-w-2xl leading-[1.85] text-[var(--muted)]">
          Places I've been mentioned or written about.
        </p>
      </div>

      <div className="space-y-6">
        {featured.map((item) => (
          <article key={item.url} className="space-y-2">
            <div className="space-y-0.5">
              <h2 className="text-xl font-semibold tracking-tight text-[var(--foreground)]">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 border-b border-transparent hover:border-[var(--foreground)] pb-px transition-[border-color] duration-[180ms]"
                >
                  <span className="sm:hidden">{item.shortTitle ?? item.title}</span>
                  <span className="hidden sm:inline">{item.title}</span>
                  <ExternalLinkIcon />
                </a>
              </h2>
              <p className="text-sm text-[var(--subtle)]">
                {item.source} · {item.date}
              </p>
            </div>
            <p className="leading-[1.85] text-[var(--muted)]">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
