import Image from 'next/image'
import { siteConfig } from 'app/data/site'

export const metadata = { title: { absolute: 'shreyas | home' } }

export default function HomePage() {
  return (
    <section className="space-y-8 sm:space-y-10">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">
          {siteConfig.name}
        </h1>
        <p className="text-[var(--subtle)]"><em>{siteConfig.tagline}</em></p>
      </div>

      <div className="space-y-4 leading-[1.85] text-[var(--muted)]">
        {siteConfig.bio.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="relative h-52 w-full overflow-hidden rounded-2xl sm:h-72">
        <Image
          src="/profile.png"
          alt="Shreyas"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
    </section>
  )
}
