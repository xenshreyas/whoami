'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from './theme-toggle'
import { siteConfig } from 'app/data/site'

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-20 mb-14 border-b border-[var(--border)] bg-[var(--background)] py-3 will-change-transform">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[var(--subtle)]">
            {siteConfig.navItems.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    active
                      ? 'text-[var(--foreground)]'
                      : 'hover:text-[var(--foreground)]'
                  }
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </div>
        <ThemeToggle />
      </div>
    </header>
  )
}
