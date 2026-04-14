import { projects } from 'app/data/projects'
import { ExternalLinkIcon } from 'app/components/external-link-icon'

export const metadata = {
  title: 'projects',
  description: 'Selected software projects by Shreyas.',
}

export default function ProjectsPage() {
  return (
    <section className="space-y-8 sm:space-y-12">
      <div className="space-y-3">
        <p className="eyebrow">Projects</p>
        <p className="max-w-2xl leading-[1.85] text-[var(--muted)]">
          <em>Mostly</em> practical software, usually with a strong bias toward shipping something real.
        </p>
      </div>

      <div className="space-y-8 sm:space-y-10">
        {projects.map((project) => (
          <article key={project.name} className="space-y-3">
            <div className="space-y-0.5">
              <h2 className="text-xl font-semibold tracking-tight text-[var(--foreground)]">
                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 border-b border-transparent hover:border-[var(--foreground)] pb-px transition-[border-color] duration-[180ms]"
                  >
                    {project.name}
                    <ExternalLinkIcon />
                  </a>
                ) : (
                  project.name
                )}
              </h2>
              <p className="font-mono text-sm text-[var(--subtle)] break-words">
                {project.stack.join(' · ')}
              </p>
            </div>

            <p className="leading-[1.85] text-[var(--muted)]">
              {project.description}
            </p>

          </article>
        ))}
      </div>
    </section>
  )
}
