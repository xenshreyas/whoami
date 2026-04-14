import { experience } from 'app/data/experience'
import { teaching } from 'app/data/teaching'
import { ExternalLinkIcon } from 'app/components/external-link-icon'

export const metadata = {
  title: 'work',
  description: 'Software experience across product, startups, and systems.',
}

export default function WorkPage() {
  return (
    <section className="space-y-8 sm:space-y-12">
      <div className="space-y-3">
        <p className="eyebrow">Work</p>
        <p className="max-w-2xl leading-[1.85] text-[var(--muted)]">
          I thrive in environments where the feedback loop is tight, the product is
          close, and the engineering bar is extremely high.
        </p>
      </div>

      <div className="space-y-8 sm:space-y-10">
        {experience.map((entry) => (
          <article key={`${entry.company}-${entry.role}`} className="space-y-3">
            <div className="space-y-0.5">
              <h2 className="text-xl font-semibold tracking-tight text-[var(--foreground)]">
                {entry.url ? (
                  <a href={entry.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 border-b border-transparent hover:border-[var(--foreground)] pb-px transition-[border-color] duration-[180ms]">
                    {entry.company}
                    <ExternalLinkIcon />
                  </a>
                ) : entry.company}
              </h2>
              <p className="text-sm text-[var(--subtle)]">{entry.role}</p>
              <p className="text-sm text-[var(--subtle)]">
                {entry.dates}
                {entry.location ? ` · ${entry.location}` : ''}
              </p>
            </div>

            {entry.summary ? (
              <p className="leading-[1.85] text-[var(--muted)]">
                {entry.summary}
              </p>
            ) : null}

            {entry.highlights?.length ? (
              <ul className="space-y-2 pl-4 text-[var(--muted)]">
                {entry.highlights.map((highlight, i) => {
                  const link = entry.highlightLinks?.[i]
                  if (link) {
                    const [before, after] = highlight.split(link.match)
                    return (
                      <li key={highlight} className="list-disc leading-[1.85]">
                        {before}
                        <a href={link.url} target="_blank" rel="noopener noreferrer" className="link-subtle">
                          {link.match}
                        </a>
                        {after}
                      </li>
                    )
                  }
                  return (
                    <li key={highlight} className="list-disc leading-[1.85]">
                      {highlight}
                    </li>
                  )
                })}
              </ul>
            ) : null}
          </article>
        ))}
      </div>

      <section className="space-y-8">
        <div className="space-y-3">
          <p className="eyebrow">Teaching</p>
          <p className="max-w-2xl leading-[1.85] text-[var(--muted)]">
            Separate from internships and startup work, teaching has been one
            of the most meaningful ways I can give back to my community.
          </p>
        </div>

        <div className="space-y-7">
          {teaching.map((entry) => (
            <article key={entry.title} className="space-y-2">
              <div className="space-y-0.5">
                <h3 className="text-lg font-semibold tracking-tight text-[var(--foreground)]">
                  {entry.title}
                </h3>
                <p className="text-sm text-[var(--subtle)]">
                  {entry.subjects.join(' · ')} · {entry.duration}
                </p>
              </div>
              <p className="leading-[1.85] text-[var(--muted)]">
                {entry.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}
