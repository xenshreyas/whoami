import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="space-y-6">
      <div className="space-y-3">
        <p className="eyebrow">404</p>
        <h1 className="font-serif text-4xl font-semibold tracking-tight">
          Page not found
        </h1>
      </div>
      <p className="leading-[1.85] text-[var(--muted)]">
        The page you were looking for does not exist, or it moved.
      </p>
      <Link className="link-subtle" href="/">
        → Back home
      </Link>
    </section>
  )
}
