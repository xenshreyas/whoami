import { siteConfig } from 'app/data/site'

export default function Footer() {
  return (
    <footer className="mt-20 space-y-5 pb-2 text-sm text-[var(--subtle)]">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        {siteConfig.socialLinks.map((link) => (
          <a
            key={link.label}
            className="link-subtle"
            href={link.href}
            rel="noopener noreferrer"
            target="_blank"
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  )
}
